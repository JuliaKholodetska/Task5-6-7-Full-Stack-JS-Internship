/* global pbjs, googletag */

window.googletag.cmd = googletag.cmd || [];
window.googletag.cmd.push(function () {
	googletag.pubads().disableInitialLoad();
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

const PREBID_TIMEOUT = 700;
var FAILSAFE_TIMEOUT = 3000;

function sendAdserverRequest() {
	if (pbjs.adserverRequestSent) {
		return;
	}
	pbjs.adserverRequestSent = true;
	googletag.cmd.push(() =>
		pbjs.que.push(() => {
			pbjs.setTargetingForGPTAsync();
			googletag.pubads().refresh();
		})
	);
}

function reset() {
	googletag.cmd.push(() => {
		googletag.destroySlots();
		pbjs.adserverRequestSent = false;
	});
}

export default class {
	constructor(adUnits) {
		this.adUnits = adUnits;
	}

	init() {
		reset();
		googletag.cmd.push(() => googletag.pubads().disableInitialLoad());

		pbjs.que.push(() => {
			pbjs.addAdUnits(this.adUnits);
			pbjs.requestBids({
				bidsBackHandler: sendAdserverRequest,
				timeout: PREBID_TIMEOUT,
			});
		});

		setTimeout(() => sendAdserverRequest(), FAILSAFE_TIMEOUT);

		googletag.cmd.push(() => {
			for (const { path, sizes, code } of this.adUnits) {
				googletag.defineSlot(path, sizes, code).addService(googletag.pubads());
			}

			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
		});
	}

	refresh(id) {
		googletag.cmd.push(() => googletag.display(id));
	}
}
