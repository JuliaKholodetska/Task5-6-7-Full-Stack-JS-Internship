import React, { useEffect } from "react";

export default function AdSlot({ id }) {
	const TIMEOUT = 20000;
	const adRefresh = () => {
		window.googletag.cmd.push(function () {
			window.googletag.pubads().refresh();
			console.log("ia refresh");
		});
	};
	setTimeout(function () {
		adRefresh();
	}, TIMEOUT);
	useEffect(adRefresh, []);

	return (
		<div id={id}>
			<script>
				{window.googletag.cmd.push(function () {
					window.googletag.display(id);
					console.log("ia display");
				})}
			</script>
		</div>
	);
}
