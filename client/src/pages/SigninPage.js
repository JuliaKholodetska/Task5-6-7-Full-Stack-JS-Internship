import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Googlelogin from "react-google-login";
import { Button } from "@material-ui/core";
import Icon from "../components/Icon.js";

export default function SigninPadge(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo, loading, error } = userSignin;
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(signin(email, password));
	};
	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);
	const googleSuccess = async (res) => {
		console.log(res);
		// const result = res?.profileObj;
		// const token = res?.tokenId;
		// try {
		// 	dispatch({ type: "AUTH", data: { result, token } });
		// 	//	props.history.push("/");
		// } catch (error) {
		// 	console.log(error);
		// }
	};
	const googleError = () =>
		alert("Google Sign In was unsuccessful. Try again later");
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Sign In</h1>
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}
				<div>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						id="email"
						placeholder="Enter email"
						required
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						placeholder="Enter password"
						required
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Sign In
					</button>
					<label />

					<Googlelogin
						clientId="565759498706-9bu6o9jqq50uspku8e9hjj3utptlng7t.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className="googleSignIn"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant="contained"
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleError}
						// cookiePolicy="single_host_origin"
					/>
				</div>
				<div>
					<label />
					<div>
						New customer?{" "}
						<Link
							to={`/register?redirect=${redirect}`}
							className="underline-link"
						>
							Create your account
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
