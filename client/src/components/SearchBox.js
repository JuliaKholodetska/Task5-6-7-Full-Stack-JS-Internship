import React, { useState } from "react";

export default function SearchBox(props) {
	const [name, setName] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		props.history.push(`/search?name=${name}`);
		setName("");
	};
	return (
		<form className="search" onSubmit={submitHandler}>
			<div className="row">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>
				<button
					onClick={() => props.setSidebarIsOpen(false)}
					className="primary"
					type="submit"
				>
					<i className="fa fa-search"></i>
				</button>
			</div>
		</form>
	);
}
