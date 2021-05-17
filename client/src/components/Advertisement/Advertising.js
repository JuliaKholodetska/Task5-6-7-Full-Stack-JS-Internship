/* global pbjs, googletag */
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
	googletag.pubads().disableInitialLoad();
});
const div_2_sizes = [
	[728, 90],
	[970, 250],
];
const adUnits = [
	{
		path: "/19968336/header-bid-tag-1",
		code: "div-2",
		mediaTypes: {
			banner: {
				sizes: div_2_sizes,
			},
		},
		bids: [
			{
				bidder: "appnexus",
				params: {
					placementId: 13144370,
				},
			},
		],
	},
];
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
			googletag
				.defineSlot("/19968336/header-bid-tag-1", div_2_sizes, "div-2")
				.addService(googletag.pubads());
			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
		});
	}

	refresh(id) {
		googletag.cmd.push(() => googletag.display(id));
	}
}
