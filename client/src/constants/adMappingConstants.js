const bannerMapping = {
	firstSlot: () => {
		return window.googletag
			.sizeMapping()
			.addSize(
				[1024, 768],
				[
					[300, 600],
					[300, 250],
				]
			)
			.addSize(
				[400, 300],
				[
					[300, 600],
					[300, 250],
				]
			)
			.addSize([0, 0], [])
			.build();
	},
	secondSlot: () => {
		return window.googletag
			.sizeMapping()
			.addSize(
				[1024, 768],
				[
					[970, 250],
					[728, 90],
				]
			)
			.addSize(
				[640, 0],
				[
					[468, 60],
					[300, 250],
					[336, 280],
				]
			)
			.addSize(
				[400, 0],
				[
					[300, 250],
					[336, 280],
				]
			)
			.addSize([0, 0], [])
			.build();
	},
	thirdSlot: () => {
		return window.googletag
			.sizeMapping()
			.addSize(
				[1024, 768],
				[
					[336, 280],
					[300, 250],
				]
			)
			.addSize(
				[400, 300],
				[
					[336, 280],
					[300, 250],
				]
			)
			.addSize([0, 0], [])
			.build();
	},
};
export default bannerMapping;
