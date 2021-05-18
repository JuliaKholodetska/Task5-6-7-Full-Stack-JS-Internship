import React, { useEffect } from "react";

export default function AdSlot({ id }) {
	const TIMEOUT = 30000;
	const adRefresh = () => {
		window.googletag.cmd.push(function () {
			window.googletag.pubads().refresh();
		});
	};
	setTimeout(function () {
		adRefresh();
	}, TIMEOUT);
	useEffect(adRefresh, []);

	return (
		<div id={id} className="ad-slot-home-page">
			<script>
				{window.googletag.cmd.push(function () {
					window.googletag.display(id);
				})}
			</script>
		</div>
	);
}
