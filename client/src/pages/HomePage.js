import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import { useParams } from "react-router";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import {
	defaultNameValue,
	defaultCategoryValue,
	defaultPageNumberValue,
} from "../constants/defaultValueConstants.js";
import { Link } from "react-router-dom";
export default function HomePage() {
	const {
		name = defaultNameValue,
		category = defaultCategoryValue,
		pageNumber = defaultPageNumberValue,
	} = useParams();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;
	useEffect(() => {
		dispatch(
			listProducts({ name: name !== "all" ? name : "", category, pageNumber })
		);
	}, [dispatch, name, category, pageNumber]);

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
			<div className="row-center-pagination">
				<div className="pagination">
					<Link to={`/productlist/pageNumber/${page - 1}`}>Previous</Link>
				</div>
				<div className="pagination">
					{[...Array(pages).keys()].map((x) => (
						<Link
							className={x + 1 === page ? "active" : ""}
							key={x + 1}
							to={`/productlist/pageNumber/${x + 1}`}
						>
							{x + 1}
						</Link>
					))}
				</div>
				<div className="pagination">
					<Link to={`/productlist/pageNumber/${page + 1}`}>Next</Link>
				</div>
			</div>
		</div>
	);
}
