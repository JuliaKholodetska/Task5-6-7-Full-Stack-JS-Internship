const div_2_sizes = [
	[728, 90],
	[970, 250],
];
const PREBID_TIMEOUT = 1000;
const FAILSAFE_TIMEOUT = 3000;
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
let slot;

window.googletag = window.googletag || { cmd: [] };

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
	googletag.pubads().disableInitialLoad();
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function () {
	pbjs.addAdUnits(adUnits);
	pbjs.requestBids({
		bidsBackHandler: initAdserver,
		timeout: PREBID_TIMEOUT,
	});
});

function initAdserver() {
	if (pbjs.initAdserverSet) return;
	pbjs.initAdserverSet = true;
	googletag.cmd.push(function () {
		pbjs.que.push(function () {
			pbjs.setTargetingForGPTAsync();
			googletag.pubads().refresh();
		});
	});
}
setTimeout(function () {
	initAdserver();
}, FAILSAFE_TIMEOUT);

googletag.cmd.push(function () {
	var mapping = googletag
		.sizeMapping()
		.addSize(
			[992, 0],
			[
				[970, 90],
				[970, 250],
				[970, 66],
				[980, 120],
				[728, 90],
			]
		)
		.addSize([640, 480], [300, 250])
		.addSize([0, 0], [1, 1], [])
		.build();
	slot = googletag.defineSlot(
		"/19968336/header-bid-tag-1",
		div_2_sizes,
		"div-2"
	);
	if (slot) {
		slot.defineSizeMapping(mapping).addService(googletag.pubads());
		googletag.pubads().enableSingleRequest();
		googletag.pubads().collapseEmptyDivs();
		googletag.enableServices();
	}
});
