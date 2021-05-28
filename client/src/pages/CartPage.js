import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import debounce from "lodash.debounce";

export default function CartPage(props) {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const dispatch = useDispatch();
	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};
	const checkoutHandler = () => {
		props.history.push("/signin?redirect=shipping");
	};

	const debouncedChangeHandler = useCallback(
		debounce(checkoutHandler, 600),
		[]
	);
	return (
		<div className="row">
			<div className="col-2">
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<MessageBox>
						Cart is empty.{" "}
						<Link className="underline-link" to="/">
							Go Shopping
						</Link>
					</MessageBox>
				) : (
					<ul>
						{cartItems.map((item) => (
							<li key={item.product}>
								<div className="row-cart-product">
									<div>
										<img
											src={item.image}
											alt={item.name}
											className="mobile"
										></img>
									</div>
									<div className="name-product-cart row-cart-item-position">
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</div>
									<div className="row row-cart-item-position">
										<div>
											<select
												className="quantity-cart row-cart-item-position"
												value={item.quantity}
												onChange={(e) =>
													dispatch(
														addToCart(item.product, Number(e.target.value))
													)
												}
											>
												{[...Array(item.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))}
											</select>
										</div>
										<div>${item.price}</div>
										<div className="button-delete row-cart-item-position">
											<button
												type="button"
												onClick={() => removeFromCartHandler(item.product)}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="col-1">
				<div className="card card-body">
					<ul>
						<li>
							<h2>
								Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)
								: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
							</h2>
						</li>
						<li>
							<button
								type="button"
								onClick={debouncedChangeHandler}
								className="primary block"
								disabled={cartItems.length === 0}
							>
								Proceed to Checkout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
