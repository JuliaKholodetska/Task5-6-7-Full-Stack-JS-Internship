import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "../components/Messages/Messages";
import InfoBar from "../components/InfoBar";
import Input from "../components/Input";
import { ENDPOINT } from "../constants/chatConstants";
import { useSelector } from "react-redux";
import Axios from "axios";

let socket;

export default function ChatPage({ location, history }) {
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const name = useSelector((state) => state.userSignin?.userInfo?.name);
	const userInfo = useSelector((state) => state.userSignin?.userInfo);

	useEffect(() => {
		const { room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setRoom(room);

		socket.emit("join", { token: userInfo?.token, roomId: room }, (error) => {
			if (error) {
				history.push("/");
				alert("Cannot connect to chat");
			}
		});
	}, [ENDPOINT, location.search, userInfo]);

	useEffect(() => {
		const { room } = queryString.parse(location.search);

		Axios.get(`/api/messages/${room}`, {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}).then(({ data }) => {
			setMessages(data);
		});

		socket.on("message", (message) => {
			setMessages((messages) => [...messages, message]);
		});
	}, []);

	const sendMessage = (event) => {
		const { room } = queryString.parse(location.search);
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", { message, roomId: room }, (err, message) => {
				if (err) {
					return alert("Message was not sent");
				}
			});
			setMessage("");
		}
	};

	return (
		<div className="outerContainer">
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
