import React, { useState } from "react";

export default function SearchBox(props) {
	const [searchName, setName] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		// props.history.push(`/search/name/${name}`);
		props.history.push(`/search/?name=${searchName}`);
	};
	return (
		<form className="search" onSubmit={submitHandler}>
			<div className="row">
				<input type="text" onChange={(e) => setName(e.target.value)}></input>
				<button className="primary" type="submit">
					<i className="fa fa-search"></i>
				</button>
			</div>
		</form>
	);
}
