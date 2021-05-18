window.googletag = window.googletag || { cmd: [] };
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
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
	window.googletag.cmd.push(() =>
		pbjs.que.push(() => {
			pbjs.setTargetingForGPTAsync();
			window.googletag.pubads().refresh();
		})
	);
}

function reset() {
	window.googletag.cmd.push(() => {
		window.googletag.destroySlots();
		pbjs.adserverRequestSent = false;
	});
}

export default class {
	constructor(adUnits) {
		this.adUnits = adUnits;
	}

	init() {
		reset();
		window.googletag.cmd.push(() =>
			window.googletag.pubads().disableInitialLoad()
		);

		pbjs.que.push(() => {
			pbjs.addAdUnits(this.adUnits);
			pbjs.requestBids({
				bidsBackHandler: sendAdserverRequest,
				timeout: PREBID_TIMEOUT,
			});
		});

		setTimeout(() => sendAdserverRequest(), FAILSAFE_TIMEOUT);

		window.googletag.cmd.push(() => {
			for (const { path, sizes, code } of this.adUnits) {
				window.googletag
					.defineSlot(path, sizes, code)
					.addService(window.googletag.pubads());
			}

			window.googletag.pubads().enableSingleRequest();
			window.googletag.enableServices();
		});
	}

	refresh(id) {
		window.googletag.cmd.push(() => window.googletag.display(id));
	}
}
