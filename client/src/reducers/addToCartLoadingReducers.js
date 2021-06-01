import { SET_ITEM_LOADING } from "../constants/cartConstants";

export const cartItemLoadingReducer = (
	state = { cartItemLoading: false },
	action
) => {
	switch (action.type) {
		case SET_ITEM_LOADING:
			return { cartItemLoading: action.payload };
		default:
			return state;
	}
};
