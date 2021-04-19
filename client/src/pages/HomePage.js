import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import { useLocation, useParams } from "react-router";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import {
	DEFAULT_NAME_VALUE,
	DEFAULT_CATEGORY_VALUE,
	DEFAULT_PAGE_NUMBER_VALUE,
} from "../constants/defaultValueConstants.js";
import Pagination from "../components/Pagination";
export default function HomePage() {
	const {
		name = DEFAULT_NAME_VALUE,
		category = DEFAULT_CATEGORY_VALUE,
		pageNumber = DEFAULT_PAGE_NUMBER_VALUE,
	} = useParams();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, totalPages } = productList;
	const search = useLocation().search;
	const searchPageNumber = new URLSearchParams(search).get("pageNumber");
	useEffect(() => {
		dispatch(
			listProducts({
				name: name !== "all" ? name : "",
				category,
				pageNumber: searchPageNumber || 1,
			})
		);
	}, [dispatch, name, category, searchPageNumber]);
	const getFilterUrl = (filter) => {
		const filterPage = filter.searchPageNumber || pageNumber;
		return `/?pageNumber=${filterPage}`;
	};
	return (
		<div className="col-1">
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
			<Pagination
				getFilterUrl={getFilterUrl}
				page={page}
				totalPages={totalPages}
			/>
		</div>
	);
}
