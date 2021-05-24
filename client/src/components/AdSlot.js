import React, { useEffect } from "react";

export default function AdSlot({ divId, code, sizes, slotMapping }) {
	const { googletag } = window;
	const REFRESH_TIME_INTERVAL = 30000;

	let slot;
	let adMapping = slotMapping();
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
			googletag.pubads().refresh();
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
