var intViewportWidth = window.innerWidth;
var div_2_sizes;
if (intViewportWidth > 800) {
	div_2_sizes = [
		[728, 90],
		[970, 250],
	];
} else {
	div_2_sizes = [
		[300, 50],
		[336, 280],
	];
}

var PREBID_TIMEOUT = 1000;
var FAILSAFE_TIMEOUT = 3000;

var adUnits = [
	{
		code: "/19968336/header-bid-tag-1",
		mediaTypes: {
			banner: {
				sizes: div_2_sizes,
			},
		},
		bids: [
			{
				bidder: "pubmatic",
				params: {
					placementId: 13144370,
				},
			},
		],
	},
];

// ======== DO NOT EDIT BELOW THIS LINE =========== //
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
// in case PBJS doesn't load
setTimeout(function () {
	initAdserver();
}, FAILSAFE_TIMEOUT);

googletag.cmd.push(function () {
	googletag
		.defineSlot("/19968336/header-bid-tag-1", div_2_sizes, "div-2")
		.addService(googletag.pubads());
	googletag.pubads().enableSingleRequest();
	googletag.enableServices();
});
