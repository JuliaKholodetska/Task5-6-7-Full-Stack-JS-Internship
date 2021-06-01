import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { listProductCategories } from "./actions/productActions";
import { signout } from "./actions/userActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import SearchBox from "./components/SearchBox";
import PrivateRoute from "./components/PrivateRoute";
import { SET_CART_FROM_LS } from "./constants/cartConstants";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const OrderPage = React.lazy(() => import("./pages/OrderPage"));
const PaymentMethodPage = React.lazy(() => import("./pages/PaymentMethodPage"));
const PlaceOrderPage = React.lazy(() => import("./pages/PlaceOrderPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const ShippingAdressPage = React.lazy(() =>
	import("./pages/ShippingAdressPage")
);
const SigninPage = React.lazy(() => import("./pages/SigninPage"));
const OrderHistoryPage = React.lazy(() => import("./pages/OrderHistoryPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const ChatPage = React.lazy(() => import("./pages/ChatPage"));

function App() {
	const cart = useSelector((state) => state.cart);

	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
	const { cartItems } = cart;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};
	const productCategoryList = useSelector((state) => state.productCategoryList);
	const {
		loading: loadingCategories,
		error: errorCategories,
		categories,
	} = productCategoryList;
	useEffect(() => {
		try {
			const stateStr = JSON.parse(localStorage.getItem("productInCart"));
			if (stateStr.hasOwnProperty("cartItems")) {
				dispatch({
					type: SET_CART_FROM_LS,
					payload: stateStr.cartItems,
				});
			}
			return stateStr ? JSON.parse(stateStr) : undefined;
		} catch (e) {
			return undefined;
		}
	}, []);
	useEffect(() => {
		dispatch(listProductCategories());
	}, [dispatch]);
	let checkCartEmptyState;
	cartItems.length > 0
		? (checkCartEmptyState = "fa fa-cart-arrow-down ")
		: (checkCartEmptyState = "fas fa-shopping-cart");

	return (
		<React.Suspense fallback={<span>...</span>}>
			<BrowserRouter>
				<div className="grid-container">
					<header className="row">
						<div>
							<button
								type="button"
								className="open-sidebar"
								onClick={() => setSidebarIsOpen(true)}
							>
								<i className="fa fa-bars"> </i>
							</button>
							<Link className="brand" to="/">
								Beauty Beach
							</Link>
						</div>
						<div className="row">
							<div className="search-container search-container-desktop">
								<Route
									render={({ history }) => (
										<SearchBox
											history={history}
											setSidebarIsOpen={setSidebarIsOpen}
										></SearchBox>
									)}
								></Route>
							</div>

							<Link className={checkCartEmptyState} to="/cart"></Link>
							{userInfo ? (
								<div className="dropdown">
									<Link to="#">
										{userInfo.name} <i className="fa fa-caret-down"></i>{" "}
									</Link>
									<ul className="dropdown-content">
										<li>
											<Link to="/profile">User Profile</Link>
										</li>
										<li>
											<Link to="/orderhistory">Order History</Link>
										</li>
										<li>
											<Link to={`/chat?room=${userInfo?.id}`}>Join Chat</Link>
										</li>
										<li>
											<Link to="#signout" onClick={signoutHandler}>
												Sign Out
											</Link>
										</li>
									</ul>
								</div>
							) : (
								<Link to="/signin" className="dropdown-close">
									Sign In
								</Link>
							)}
						</div>
					</header>
					<aside className={sidebarIsOpen ? "open" : ""}>
						<ul className="categories">
							<li>
								<strong>Categories</strong>
								<button
									onClick={() => setSidebarIsOpen(false)}
									className="close-sidebar"
									type="button"
								>
									<i className="fa fa-close"></i>
								</button>
							</li>
							<li>
								{" "}
								<div className="search-container search-container-mobile">
									<Route
										render={({ history }) => (
											<SearchBox
												setSidebarIsOpen={setSidebarIsOpen}
												history={history}
											></SearchBox>
										)}
									></Route>
								</div>
							</li>
							{loadingCategories ? (
								<LoadingBox></LoadingBox>
							) : errorCategories ? (
								<MessageBox variant="danger">{errorCategories}</MessageBox>
							) : (
								categories.map((c) => (
									<li key={c.name}>
										<Link
											to={`/search/?category=${c.id}`}
											onClick={() => setSidebarIsOpen(false)}
										>
											{c.name}
										</Link>
									</li>
								))
							)}
						</ul>
					</aside>
					<main>
						<Route path="/cart" component={CartPage} exact></Route>
						<Route path="/product/:id" component={ProductPage} exact></Route>
						<Route path="/" component={HomePage} exact></Route>
						<Route path="/signin" component={SigninPage} exact></Route>
						<Route path="/register" component={RegisterPage} exact></Route>
						<Route
							path="/shipping"
							component={ShippingAdressPage}
							exact
						></Route>
						<Route path="/placeorder" component={PlaceOrderPage} exact></Route>
						<Route path="/payment" component={PaymentMethodPage} exact></Route>
						<Route path="/order/:id" component={OrderPage} exact></Route>
						<Route
							path="/orderhistory"
							component={OrderHistoryPage}
							exact
						></Route>
						<Route path="/chat" component={ChatPage} exact></Route>
						<PrivateRoute
							path="/profile"
							component={ProfilePage}
							exact
						></PrivateRoute>
						<Route path="/search" component={SearchPage} exact></Route>
					</main>
					<footer className="row">
						<label className="footer-label">All rights reserved</label>
					</footer>
				</div>
			</BrowserRouter>
		</React.Suspense>
	);
}

export default App;
