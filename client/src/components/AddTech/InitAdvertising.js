window.googletag = window.googletag || { cmd: [] };

window.pbjs = window.pbjs || {};
window.pbjs.que = window.pbjs.que || [];
window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];

var PREBID_TIMEOUT = 1000;
var FAILSAFE_TIMEOUT = 3000;

var adUnits = [
	{
		path: "/19968336/header-bid-tag-1",
		code: "div-2",
		mediaTypes: {
			banner: {
				sizes: [
					[728, 90],
					[970, 250],
				],
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

function sendAdserverRequest() {
	if (window.pbjs.adserverRequestSent) {
		return;
	}
	window.pbjs.adserverRequestSent = true;
	window.pbjs.setTargetingForGPTAsync();
	window.pbjs.que.push(() => {
		window.pbjs.setTargetingForGPTAsync();
		window.googletag.pubads().refresh();
	});
}

export default () => {
	window.googletag.cmd.push(() =>
		window.googletag.pubads().disableInitialLoad()
	);

	window.pbjs.que.push(() => {
		window.pbjs.addAdUnits(adUnits);
		window.pbjs.requestBids({
			bidsBackHandler: sendAdserverRequest,
			timeout: PREBID_TIMEOUT,
		});
	});

	setTimeout(() => sendAdserverRequest(), FAILSAFE_TIMEOUT);

	window.googletag.cmd.push(() => {
		for (const { path, sizes, code } of adUnits) {
			window.googletag
				.defineSlot(path, sizes, code)
				.addService(window.googletag.pubads());
		}
		window.googletag.pubads().enableSingleRequest();
		window.googletag.enableServices();
	});
};
