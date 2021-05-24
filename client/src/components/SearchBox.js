import React, { useState } from "react";

export default function SearchBox(props) {
	const [name, setName] = useState("");
	const submitHandler = (e) => {
		if (name) {
			e.preventDefault();
			props.history.push(`/search?name=${name}`);
			setName("");
		}
	};
	return (
		<form className="search" onSubmit={submitHandler}>
			<div className="row">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Search"
				></input>
				<button className="primary" type="submit" data-testid="search-button">
					<i className="fa fa-search"></i>
				</button>
			</div>
		</form>
	);
}
