import {
	CART_ADD_ITEM,
	CART_EMPTY,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHOD,
	CART_SAVE_SHIPPING_ADDRESS,
	SET_CART_FROM_LS,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				const newCart = { ...state, cartItems: [...state.cartItems, item] };
				localStorage.setItem("productInCart", JSON.stringify(newCart));
				return newCart;
			}
		case CART_REMOVE_ITEM:
			const newCart = state.cartItems.filter(
				(x) => x.product !== action.payload
			);
			localStorage.setItem("productInCart", JSON.stringify(newCart));
			return {
				...state,
				cartItems: newCart,
			};
		case CART_SAVE_SHIPPING_ADDRESS:
			return { ...state, shippingAddress: action.payload };
		case CART_SAVE_PAYMENT_METHOD:
			return { ...state, paymentMethod: action.payload };
		case CART_EMPTY:
			return { ...state, cartItems: [] };
		case SET_CART_FROM_LS:
			return { ...state, cartItems: action.payload };
		default:
			return state;
	}
};
