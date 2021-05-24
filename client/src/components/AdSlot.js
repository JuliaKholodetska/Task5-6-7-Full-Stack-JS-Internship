import React, { useEffect } from "react";

export default function AdSlot({ divId, code, sizes, slotMapping }) {
	const REFRESH_TIME_INTERVAL = 30000;
	let slot;
	let mapping = slotMapping();
	const adRefresh = () => {
		window.googletag.cmd.push(function () {
			slot = window.googletag.defineSlot(code, sizes, divId);

			if (slot) {
				slot.defineSizeMapping(mapping).addService(window.googletag.pubads());
				window.googletag.pubads().enableSingleRequest();
				window.googletag.pubads().disableInitialLoad();
				window.googletag.enableServices();
			}
		});

		window.googletag.cmd.push(function () {
			window.googletag.display(divId);
			window.googletag.pubads().refresh();
		});

		const refreshSlotFunction = setInterval(() => {
			window.googletag.pubads().refresh([slot]);
		}, REFRESH_TIME_INTERVAL);
		return () => {
			window.googletag.destroySlots([slot]);
			clearInterval(refreshSlotFunction);
		};
	};

	useEffect(adRefresh, []);

	return <div id={divId}></div>;
}
