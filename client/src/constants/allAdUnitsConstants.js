import {
	firstSlotSizes,
	secondSlotSizes,
	thirdSlotSizes,
} from "./adUnitSizeConstants";

export const adUnits = [
	{
		code: "/19968336/header-bid-tag-0",
		mediaTypes: {
			banner: {
				labelAny: ["tablet", "desktop", "desktop-hd"],
				sizes: firstSlotSizes,
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
				labelAny: ["phone", "tablet", "desktop", "desktop-hd"],
				sizes: secondSlotSizes,
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
		code: "/19968336/header-bid-tag-2",
		mediaTypes: {
			banner: {
				labelAny: ["phone", "tablet", "desktop", "desktop-hd"],
				sizes: thirdSlotSizes,
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
