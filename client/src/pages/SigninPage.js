import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin, signInGoggle } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Googlelogin from "react-google-login";
import { Button } from "@material-ui/core";
import Icon from "../components/Icon.js";
import dotenv from "dotenv";
dotenv.config();

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
		dispatch(signInGoggle(res.tokenId));
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
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
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
