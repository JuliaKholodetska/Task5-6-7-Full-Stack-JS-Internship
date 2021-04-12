import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import { useParams } from "react-router";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { defaultNameValue, defaultCategoryValue } from "../utils";

export default function HomePage() {
	const {
		name = defaultNameValue,
		category = defaultCategoryValue,
	} = useParams();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	useEffect(() => {
		dispatch(listProducts({ name: name !== "all" ? name : "", category }));
	}, [dispatch, name, category]);

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div className="row center">
					{products.map((product) => (
						<Product key={product.id} product={product}></Product>
					))}
				</div>
			)}
		</div>
	);
}
