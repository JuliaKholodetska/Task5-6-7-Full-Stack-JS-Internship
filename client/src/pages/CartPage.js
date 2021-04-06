import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

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
	return (
		<div className="row">
			<div className="col-2">
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<MessageBox>
						Cart is empty. <Link to="/">Go Shopping</Link>
					</MessageBox>
				) : (
					<ul>
						{cartItems.map((item) => (
							<li key={item.product}>
								<div className="row-cart-product">
									<div>
										<img src={item.img} alt={item.name} className="small"></img>
									</div>
									<div className="name-product-cart">
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</div>
									<div>
										<select
											className="quantity-cart"
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
									<div>
										<button
											type="button"
											onClick={() => removeFromCartHandler(item.product)}
										>
											Delete
										</button>
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
								onClick={checkoutHandler}
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
