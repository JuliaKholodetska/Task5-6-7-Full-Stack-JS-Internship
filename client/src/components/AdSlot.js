import React from "react";

export default function AdSlot(props) {
	const { id } = props;

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
