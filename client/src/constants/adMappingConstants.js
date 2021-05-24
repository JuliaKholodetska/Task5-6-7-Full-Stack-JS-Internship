const { googletag } = window;
const bannerMapping = {
	firstSlot: () => {
		return googletag
			.sizeMapping()
			.addSize(
				[1024, 0],
				[
					[300, 600],
					[300, 250],
				]
			)
			.addSize(
				[200, 0],
				[
					[300, 600],
					[300, 250],
				]
			)
			.addSize([0, 0], [])
			.build();
	},
	secondSlot: () => {
		return googletag
			.sizeMapping()
			.addSize(
				[1024, 0],
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
				[200, 0],
				[
					[300, 250],
					[336, 280],
				]
			)
			.addSize([0, 0], [])
			.build();
	},
	thirdSlot: () => {
		return googletag
			.sizeMapping()
			.addSize(
				[1024, 0],
				[
					[336, 280],
					[300, 250],
				]
			)
			.addSize(
				[200, 0],
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
