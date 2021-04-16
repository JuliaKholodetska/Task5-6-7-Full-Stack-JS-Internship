import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import Rating from "../components/Rating";
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
	const { loading, error, products, page, pages } = productList;
	const productCategoryList = useSelector((state) => state.productCategoryList);
	const {
		loading: loadingCategories,
		error: errorCategories,
		categories,
	} = productCategoryList;
	useEffect(() => {
		dispatch(
			listProducts({
				pageNumber,
				name: name !== "all" ? name : "",
				category: category,
				min,
				max,
				rating,
				order,
			})
		);
	}, [dispatch, name, min, max, rating, order, category, pageNumber]);

	const getFilterUrl = (filter) => {
		const filterPage = filter.page || pageNumber;
		const filterCategory = filter.category || category;
		const filterName = filter.name || name;
		const filterRating = filter.rating || rating;
		const sortOrder = filter.order || order;
		let filterMin;
		let filterMax;
		switch (filter.min) {
			case filter.min:
				filterMin = filter.min;
				break;
			case 0:
				filterMin = 0;
				break;
			default:
				filterMin = min;
				break;
		}
		switch (filter.max) {
			case filter.max:
				filterMax = filter.max;
				break;
			case 0:
				filterMax = 0;
				break;
			default:
				filterMax = max;
				break;
		}
		return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
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
								props.history.push(getFilterUrl({ order: e.target.value }));
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
									className={"all" === category ? "active" : ""}
									to={getFilterUrl({ category: "all" })}
								>
									Any
								</Link>
							</li>
							{categories.map((c) => (
								<li key={c.name}>
									<Link
										className={c.name === category ? "active" : ""}
										to={getFilterUrl({ category: c.id })}
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
									to={getFilterUrl({ max: p.max })}
									className={`${p.max}` === `${max}` ? "active" : ""}
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
									to={getFilterUrl({ rating: r.rating })}
									className={`${r.rating}` === `${rating}` ? "active" : ""}
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
						<Link to={getFilterUrl({ page: page - 1 })}>Previous</Link>
					</div>
					<div className="pagination">
						{[...Array(pages).keys()].map((x) => (
							<Link
								className={x + 1 === page ? "active" : ""}
								key={x + 1}
								to={getFilterUrl({ page: x + 1 })}
							>
								{x + 1}
							</Link>
						))}
					</div>
					<div className="pagination">
						<Link to={getFilterUrl({ page: page + 1 })}>Next</Link>
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
