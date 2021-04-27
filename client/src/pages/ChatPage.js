import React, { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Messages from "../components/Messages/Messages";
import InfoBar from "../components/InfoBar";
import Input from "../components/Input";
import { ENDPOINT } from "../constants/chatConstants";
import { useSelector } from "react-redux";
import ChatService from "../services/chatService";

export default function ChatPage({ location, history }) {
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const name = useSelector((state) => state.userSignin?.userInfo?.name);
	const userInfo = useSelector((state) => state.userSignin?.userInfo);
	const chatServiceRef = useRef();

	const messageReceiver = (message) =>
		setMessages((messages) => [...messages, message]);

	useEffect(() => {
		const { room } = queryString.parse(location.search);

		setRoom(room);
		chatServiceRef.current = new ChatService(
			userInfo?.token,
			room,
			messageReceiver,
			history
		);
	}, [ENDPOINT, location.search, userInfo]);

	useEffect(() => {
		chatServiceRef.current
			.joinChat()
			.then(({ messages }) => setMessages(messages));

		return chatServiceRef.current.disconnect;
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			chatServiceRef.current
				.sendMessage(message)
				.then(() => setMessage(""))
				.catch((error) => {
					alert("Message was not sent");
				});
		}
	};

	if (!userInfo) {
		history.push("/signin");
		return null;
	}

	return (
		<div className="outer-container">
			<div className="container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} currentUserId={userInfo.id} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
}
