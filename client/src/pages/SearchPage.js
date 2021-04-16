import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import Rating from "../components/Rating";
import { useLocation } from "react-router-dom";
import {
	defaultCategoryValue,
	defaultNameValue,
	defaultMinValue,
	defaultMaxValue,
	defaultRatingValue,
	highest,
	lowest,
	prices,
	ratings,
	toprated,
	defaultPageNumberValue,
} from "../constants/defaultValueConstants.js";

export default function SearchPage(props) {
	const {
		name = defaultNameValue,
		category = defaultCategoryValue,
		min = defaultMinValue,
		max = defaultMaxValue,
		rating = defaultRatingValue,
		order,
		pageNumber = defaultPageNumberValue,
	} = useParams();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, totalpages } = productList;
	const productCategoryList = useSelector((state) => state.productCategoryList);
	const {
		loading: loadingCategories,
		error: errorCategories,
		categories,
	} = productCategoryList;
	const search = useLocation().search;
	const searchCategory = new URLSearchParams(search).get("category");
	const searchMin = new URLSearchParams(search).get("min");
	const searchMax = new URLSearchParams(search).get("max");
	const searchOrder = new URLSearchParams(search).get("order");
	const searchRating = new URLSearchParams(search).get("rating");
	const searchPageNumber = new URLSearchParams(search).get("pageNumber");
	useEffect(() => {
		dispatch(
			listProducts({
				pageNumber: searchPageNumber,
				name: name !== "all" ? name : "",
				category: searchCategory,
				min: searchMin,
				max: searchMax,
				rating: searchRating,
				order: searchOrder,
			})
		);
	}, [
		dispatch,
		name,
		searchMin,
		searchMax,
		searchRating,
		searchOrder,
		searchCategory,
		searchPageNumber,
	]);

	const getFilterUrl = (filter) => {
		const filterPage = filter.searchPageNumber || pageNumber;
		const filterCategory = filter.searchCategory || category;
		const filterName = filter.name || name;
		const filterRating = filter.searchRating || rating;
		const sortOrder = filter.searchOrder || order;
		let filterMin;
		let filterMax;
		switch (filter.searchMin) {
			case filter.searchMin:
				filterMin = filter.searchMin;
				break;
			case 0:
				filterMin = 0;
				break;
			default:
				filterMin = min;
				break;
		}
		switch (filter.searchMax) {
			case filter.searchMax:
				filterMax = filter.searchMax;
				break;
			case 0:
				filterMax = 0;
				break;
			default:
				filterMax = max;
				break;
		}
		return `/search/?category=${filterCategory}&name=${filterName}&min=${filterMin}&max=${filterMax}&rating=${filterRating}&order=${sortOrder}&pageNumber=${filterPage}`;
	};
	return (
		<div className="row top">
			<div className="col-1">
				<div className="row">
					{loading ? (
						<LoadingBox></LoadingBox>
					) : error ? (
						<MessageBox variant="danger">{error}</MessageBox>
					) : (
						<div>{products.length} Results</div>
					)}
					<div>
						Sort by{" "}
						<select
							value={order}
							onChange={(e) => {
								props.history.push(
									getFilterUrl({ searchOrder: e.target.value })
								);
							}}
						>
							<option>Newest Arrivals</option>
							<option value={`${lowest}`}>Price: Low to High</option>
							<option value={`${highest}`}>Price: High to Low</option>
							<option value={`${toprated}`}>Avg. Customer Reviews</option>
						</select>
					</div>
				</div>

				<h3>Category</h3>
				<div>
					{loadingCategories ? (
						<LoadingBox></LoadingBox>
					) : errorCategories ? (
						<MessageBox variant="danger">{errorCategories}</MessageBox>
					) : (
						<ul>
							<li>
								<Link
									className={"all" === searchCategory ? "active" : ""}
									to={getFilterUrl({ searchCategory: "all" })}
								>
									Any
								</Link>
							</li>
							{categories.map((c) => (
								<li key={c.name}>
									<Link
										className={c.name === searchCategory ? "active" : ""}
										to={getFilterUrl({ searchCategory: c.id })}
									>
										{c.name}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
				<div>
					<h3>Price</h3>
					<ul>
						{prices.map((p) => (
							<li key={p.name}>
								<Link
									to={getFilterUrl({ searchMax: p.max })}
									className={`${p.max}` === `${searchMax}` ? "active" : ""}
								>
									{p.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Avg. Customer Review</h3>
					<ul>
						{ratings.map((r) => (
							<li key={r.name}>
								<Link
									to={getFilterUrl({ searchRating: r.rating })}
									className={
										`${r.rating}` === `${searchRating}` ? "active" : ""
									}
								>
									<Rating caption={" & up"} rating={r.rating}></Rating>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="col-3">
				{" "}
				<div className="row-center-pagination">
					<div className="pagination">
						<Link to={getFilterUrl({ searchPageNumber: page - 1 })}>
							Previous
						</Link>
					</div>
					<div className="pagination">
						{[...Array(totalpages).keys()].map((x) => (
							<Link
								className={x + 1 === page ? "active" : ""}
								key={x + 1}
								to={getFilterUrl({ searchPageNumber: x + 1 })}
							>
								{x + 1}
							</Link>
						))}
					</div>
					<div className="pagination">
						<Link to={getFilterUrl({ searchPageNumber: page + 1 })}>Next</Link>
					</div>
				</div>{" "}
				{loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant="danger">{error}</MessageBox>
				) : (
					<>
						{products.length === 0 && <MessageBox>No Product Found</MessageBox>}
						<div className="row center-search">
							{products.map((product) => (
								<Product key={product.id} product={product}></Product>
							))}
						</div>
					</>
				)}
			</div>{" "}
		</div>
	);
}
