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
	DEFAULT_lIMIT_PRODUCTS,
	DEFAULT_TOTAL_PAGE_VALUE,
} from "../constants/defaultValueConstants.js";
import Pagination from "../components/Pagination";
import AdProvider from "../components/Advertisement/AdProvider";
import AdPlacement from "../components/Advertisement/AdPlacement";
export default function HomePage() {
	const div_2_sizes = [
		[728, 90],
		[970, 250],
	];
	const adUnits = [
		{
			path: "/19968336/header-bid-tag-1",
			code: "div-2",
			mediaTypes: {
				banner: {
					sizes: div_2_sizes,
				},
			},
			bids: [
				{
					bidder: "appnexus",
					params: {
						placementId: 13144370,
					},
				},
			],
		},
	];
	const {
		name = DEFAULT_NAME_VALUE,
		category = DEFAULT_CATEGORY_VALUE,
		pageNumber = DEFAULT_PAGE_NUMBER_VALUE,
		limitProducts = DEFAULT_lIMIT_PRODUCTS,
	} = useParams();
	const getUrlParams = (data) => {
		const params = ["pageNumber", "limitProducts"]
			.map((prop) => {
				if (data[prop]) {
					return `${prop}=${data[prop]}`;
				}
			})
			.filter(Boolean);

		return `?${params.join("&")}`;
	};

	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, productsTotalCount } = productList;
	const totalPages =
		Math.ceil(productsTotalCount / DEFAULT_lIMIT_PRODUCTS) ||
		DEFAULT_TOTAL_PAGE_VALUE;
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();

	const searchPageNumber = query.get("pageNumber") || DEFAULT_PAGE_NUMBER_VALUE;
	const searchLimitProducts =
		query.get("limitProducts") || DEFAULT_lIMIT_PRODUCTS;

	useEffect(() => {
		dispatch(
			listProducts({
				name: name !== "all" ? name : "",
				category,
				pageNumber: searchPageNumber || 1,
				limitProducts: searchLimitProducts || 8,
			})
		);
	}, [dispatch, name, category, searchPageNumber, searchLimitProducts]);
	const getFilterUrl = (filter) => {
		const filterPage = filter.searchPageNumber || pageNumber;
		const filterLimit = filter.searchLimitProducts || limitProducts;
		return `/${getUrlParams({
			pageNumber: filterPage,
			limitProducts: filterLimit,
		})}`;
	};
	return (
		<div className="col-1">
			{" "}
			<AdProvider adUnits={adUnits}>
				{" "}
				{/* <div id="div-2"></div> */}
				<AdPlacement id="div-2" />
			</AdProvider>
			<Pagination
				getFilterUrl={getFilterUrl}
				page={page}
				totalPages={totalPages}
			/>{" "}
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div className="row center">
					{" "}
					{products.map((product) => (
						<Product key={product.id} product={product}></Product>
					))}
				</div>
			)}
		</div>
	);
}
