var div_1_sizes = [
	[300, 250],
	[300, 600],
];
var div_2_sizes = [
	[728, 90],
	[970, 250],
	[300, 250],
	[336, 280],
];
var PREBID_TIMEOUT = 1000;
var FAILSAFE_TIMEOUT = 3000;

// var AdUnits = [{
//   code: "ad-slot-1",
//   mediaTypes: {
//       banner: {
//           sizes: [[768,90], [468,60], [320,50]]
//       }
//   },
//   bids: [
//       {
//           bidder: "bidderA",
//           params: {
//               placement: "1000"
//           }
//      },{
//           bidder: "mobileBidder",
//           labelAny: ["phone"],  // this bid only applies to small screensizes
//           params: {
//               placement: "2000"
//           }
//      }
//  ]
// }]
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

window.googletag = window.googletag || { cmd: [] };

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
	googletag.pubads().disableInitialLoad();
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

// pbjs.setConfig({
// 	sizeConfig: [
// 		{
// 			mediaQuery: "(min-width: 1600px)",
// 			sizesSupported: [
// 				[1000, 300],
// 				[970, 90],
// 				[728, 90],
// 				[300, 250],
// 				[300, 600],
// 			],
// 			labels: ["desktop-hd"],
// 		},
// 		{
// 			mediaQuery: "(min-width: 1200px)",
// 			sizesSupported: [
// 				[970, 90],
// 				[728, 90],
// 				[300, 250],
// 				[300, 600],
// 			],
// 			labels: ["desktop"],
// 		},
// 		{
// 			mediaQuery: "(min-width: 768px) and (max-width: 1199px)",
// 			sizesSupported: [
// 				[728, 90],
// 				[300, 250],
// 			],
// 			labels: ["tablet"],
// 		},
// 		{
// 			mediaQuery: "(min-width: 0px)",
// 			sizesSupported: [
// 				[300, 250],
// 				[300, 100],
// 			],
// 			labels: ["phone"],
// 		},
// 	],
// });

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
		});
	});
}
setTimeout(function () {
	initAdserver();
}, FAILSAFE_TIMEOUT);
