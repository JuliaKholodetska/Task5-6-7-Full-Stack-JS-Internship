import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder, payOrder } from "../actions/orderAcrions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_PAY } from "../constants/orderConstants";
import debounce from "lodash.debounce";

export default function OrderPage(props) {
	const orderId = props.match.params.id;
	const [sdkReady, setSdkReady] = useState(false);
	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;
	const orderPay = useSelector((state) => state.orderPay);
	const {
		loading: loadingPay,
		error: errorPay,
		success: successPay,
	} = orderPay;
	const dispatch = useDispatch();
	useEffect(() => {
		const addPayPalScript = async () => {
			const { data } = await Axios.get("/api/config/paypal");
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
			script.async = true;
			script.onload = () => {
				setSdkReady(true);
			};
			document.body.appendChild(script);
		};

		if (
			!order ||
			successPay ||
			(order && Number(order.id) !== Number(orderId))
		) {
			dispatch({ type: ORDER_PAY.RESET });
			dispatch(detailsOrder(orderId));
		} else {
			if (!order.paymentStatusId) {
				if (!window.paypal) {
					addPayPalScript();
				} else {
					setSdkReady(true);
				}
			}
		}
	}, [dispatch, order, orderId, sdkReady, successPay]);

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(order, paymentResult));
	};
	const debouncedChangeHandler = useCallback(
		debounce(successPaymentHandler, 600),
		[]
	);

	return loading ? (
		<LoadingBox></LoadingBox>
	) : error ? (
		<MessageBox variant="danger">{error}</MessageBox>
	) : (
		<div>
			<h1>Order {order.id}</h1>
			<div className="row top">
				<div className="col-2">
					<ul>
						<li>
							<div className="card-body-order">
								<h2>Shipping</h2>
								<p>
									<strong>Name:</strong> {order.fullName} <br />
									<strong>Address: </strong> {order.shippingAddress},
									{order.city},{order.postalCode},{order.country}
								</p>
								{order.isDelivered ? (
									<MessageBox variant="success">
										Delivered status {order.orderStatusId}
									</MessageBox>
								) : (
									<MessageBox variant="danger">Not Delivered</MessageBox>
								)}
							</div>
						</li>
						<li>
							<div className="card-body-order">
								<h2>Payment</h2>
								<p>
									<strong>Method:</strong> {order.paymentMethod}
								</p>
								{order.isPaid ? (
									<MessageBox variant="success">
										Paiment status {order.paymentStatusId}
									</MessageBox>
								) : (
									<MessageBox variant="danger">Not Paid</MessageBox>
								)}
							</div>
						</li>
						<li>
							<div className="card-body-order">
								<h2>Order items price</h2>
								<ul>
									{order.orderItem.map((item) => (
										<li key={item.id}>
											<div className="row">
												<div>
													{item.quantity} x ${item.price} = $
													{item.quantity * item.price}
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-1">
					<div className="card card-body">
						<ul>
							<li>
								<h2>Order Summary</h2>
							</li>
							<li>
								<div className="row">
									<div>Items</div>
									<div>${order.itemsPrice}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Shipping</div>
									<div>${order.shippingPrice}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Tax</div>
									<div>${order.taxPrice}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>
										<strong> Order Total</strong>
									</div>
									<div>
										<strong>${order.totalPrice}</strong>
									</div>
								</div>
							</li>
							{!order.isPaid && (
								<li>
									{!sdkReady ? (
										<LoadingBox></LoadingBox>
									) : (
										<>
											{errorPay && (
												<MessageBox variant="danger">{errorPay}</MessageBox>
											)}
											{loadingPay && <LoadingBox></LoadingBox>}

											<PayPalButton
												amount={order.totalPrice}
												onSuccess={debouncedChangeHandler}
											></PayPalButton>
										</>
									)}
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
