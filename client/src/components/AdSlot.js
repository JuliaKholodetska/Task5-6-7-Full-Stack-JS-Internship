import React, { useEffect } from "react";

export default function AdSlot({ id }) {
	const TIMEOUT = 30000;
	const adRefresh = () => {
		window.googletag.cmd.push(function () {
			window.googletag.display(id);
			window.googletag.pubads().refresh();
		});
		setInterval(() => {
			window.googletag.pubads().refresh();
		}, TIMEOUT);
	};

	useEffect(adRefresh, []);

	return <div id={id}></div>;
}
