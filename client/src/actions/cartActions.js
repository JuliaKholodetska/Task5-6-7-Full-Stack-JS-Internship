import Axios from "axios";

import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHOD,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_ADD_ITEM_FAIL,
} from "../constants/cartConstants";

export const addToCart = (productId, quantity) => async (dispatch) => {
	try {
		const { data } = await Axios.get(`/api/products/${productId}`);
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				product: data.id,
				quantity,
			},
		});
	} catch (error) {
		dispatch({
			type: CART_ADD_ITEM_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
	dispatch({ type: CART_REMOVE_ITEM, payload: productId });
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
	localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
