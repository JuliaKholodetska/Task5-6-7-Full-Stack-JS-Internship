var div_1_sizes = [
	[300, 250],
	[300, 600],
];
var div_2_sizes = [
	[728, 90],
	[970, 250],
];
var PREBID_TIMEOUT = 1000;
var FAILSAFE_TIMEOUT = 3000;

var adUnits = [
	{
		code: "/19968336/header-bid-tag-0",
		mediaTypes: {
			banner: {
				sizes: div_1_sizes,
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
	{
		code: "/19968336/header-bid-tag-1",
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
let firstSlot;
let secondSlot;

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
	var firstdMapping = googletag
		.sizeMapping()
		.addSize(
			[992, 0],
			[
				[300, 250],
				[1, 1],
			]
		)
		.addSize(
			[768, 0],
			[
				[300, 250],
				[320, 100],
				[320, 50],
				[1, 1],
			]
		)
		.addSize([0, 0], [1, 1], [])
		.build();
	firstSlot = googletag.defineSlot(
		"/19968336/header-bid-tag-0",
		div_1_sizes,
		"div-1"
	);

	if (firstSlot) {
		firstSlot.defineSizeMapping(firstdMapping).addService(googletag.pubads());
		googletag.pubads().enableSingleRequest();
		googletag.pubads().collapseEmptyDivs();
		googletag.enableServices();
	}
});

googletag.cmd.push(function () {
	var secondMapping = googletag
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
	secondSlot = googletag.defineSlot(
		"/19968336/header-bid-tag-1",
		div_2_sizes,
		"div-2"
	);
	if (secondSlot) {
		secondSlot.defineSizeMapping(secondMapping).addService(googletag.pubads());
		googletag.pubads().enableSingleRequest();
		googletag.pubads().collapseEmptyDivs();
		googletag.enableServices();
	}
});
