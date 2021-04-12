import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderAcrions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderHistoryPage(props) {
	const orderMineList = useSelector((state) => state.orderMineList);
	const { loading, error, orders } = orderMineList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listOrderMine());
	}, [dispatch]);
	return (
		<div>
			<h1>Order History</h1>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Shipping Price</th>
							<th>DELIVERED ADDRESS</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order.id}>
								<tr> {order.id}</tr>
								<td>{order.shippingPrice}</td>
								<td>{order.shippingAddress}</td>
								<td>
									<button
										type="button"
										className="small"
										onClick={() => {
											props.history.push(`/order/${order.id}`);
										}}
									>
										Details
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
