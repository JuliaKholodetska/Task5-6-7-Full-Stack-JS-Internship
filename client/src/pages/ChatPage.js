import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import { ENDPOINT } from "../constants/chatConstants";

let socket;

export default function ChatPage({ location }) {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setRoom(room);
		setName(name);
		console.log(socket);
	});

	return <div className="outerContainer"></div>;
}
