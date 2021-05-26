import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

export default function ProductPage(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const [quantity, setquantity] = useState(1);
	const [cartIsEmpty, setcartIsEmpty] = useState(true);
	const { productDetails } = useSelector((state) => ({
		productDetails: state.productDetails,
	}));
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(detailsProduct(productId));
	}, [dispatch, productId]);
	const addToCartHandler = () => {
		dispatch(addToCart(productId, quantity));
		setcartIsEmpty(false);
	};

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div>
					<Link to="/" className="link-main-page link-main-page-mobile-size">
						Back to All
					</Link>

					<div className="row">
						<div className="col-2">
							<img
								className="img-size"
								src={product.image}
								alt={product.name}
							></img>
						</div>
						<div className="col-1">
							{!cartIsEmpty ? (
								<MessageBox variant="success ad-to-cart-message">
									Successfully added to the cart!
								</MessageBox>
							) : error ? (
								<MessageBox variant="danger ad-to-cart-message">
									{error}
								</MessageBox>
							) : (
								""
							)}
							<ul>
								<li>
									<h1>{product.name}</h1>
								</li>
								<li>
									<Rating
										rating={product.rating}
										numReviews={product.numReviews}
									></Rating>
								</li>
								<li>Price : ${product.price}</li>
								<li>
									Description:
									<p>{product.description}</p>
								</li>
							</ul>
						</div>
						<div className="col-1">
							<div className="card card-body">
								<ul>
									<li>
										<div className="row">
											<div>Price</div>
											<div className="price">${product.price}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div>Status</div>
											<div>
												{product.countInStock > 0 ? (
													<span className="succes">In Stock</span>
												) : (
													<span className="error">Unavailable</span>
												)}
											</div>
										</div>
									</li>
									{product.countInStock > 0 && (
										<>
											<li>
												<div className="row">
													<div>quantity</div>

													<div class="select">
														<select
															name="slct"
															id="slct"
															className="select-product-page"
															value={quantity}
															onChange={(e) => setquantity(e.target.value)}
														>
															{[...Array(product.countInStock).keys()].map(
																(x) => (
																	<option key={x + 1} value={x + 1}>
																		{x + 1}
																	</option>
																)
															)}
														</select>
													</div>
												</div>
											</li>
											<li>
												<button
													onClick={addToCartHandler}
													className="primary block"
												>
													Add to Cart
												</button>
											</li>
										</>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
