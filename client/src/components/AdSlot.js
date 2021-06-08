import React, { useEffect } from "react";
// import { adUnits } from "../constants/allAdUnitsConstants";

export default function AdSlot({ divId, code, sizes, slotMapping }) {
	const { googletag } = window;
	const REFRESH_TIME_INTERVAL = 30000;

	let slot;
	let adMapping = slotMapping();
	// let usedAdUnits = [];
	// const adUnitsOnPage = adUnits.map((ad) => {
	// 	// console.log(ad.code);
	// 	// console.log(code);
	// 	if (code === ad.code) {
	// 		usedAdUnits.push({ ...ad });
	// 	}
	// 	return usedAdUnits;
	// });

	const adRefresh = () => {
		googletag.cmd.push(function () {
			slot = googletag.defineSlot(code, sizes, divId);
			if (slot) {
				slot.defineSizeMapping(adMapping).addService(googletag.pubads());
				googletag.pubads().enableSingleRequest();
				googletag.pubads().disableInitialLoad();
				googletag.enableServices();
			}
		});
		googletag.cmd.push(function () {
			googletag.display(divId);
			googletag.pubads().refresh([slot]);
		});
		const refreshSlotFunction = setInterval(() => {
			googletag.pubads().refresh([slot]);
		}, REFRESH_TIME_INTERVAL);
		return () => {
			googletag.destroySlots([slot]);
			clearInterval(refreshSlotFunction);
		};
	};

	useEffect(adRefresh, []);

	return <div id={divId}></div>;
}
