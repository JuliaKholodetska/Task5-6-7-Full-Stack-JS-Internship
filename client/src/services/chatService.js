import { io } from "socket.io-client";
import { ENDPOINT } from "../constants/chatConstants";
import Axios from "axios";

class ChatService {
	constructor(token, roomId, messageReceiver, history) {
		this.token = token;
		this.roomId = roomId;
		this.messageReceiver = messageReceiver;
		this.history = history;
		this.socket = io(ENDPOINT);
	}

	async joinChat() {
		if (!this) {
			throw new Error("Chat was not initialized");
		}

		const { data: messages } = await Axios.get(`/api/messages/${this.roomId}`, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});

		this._sendJoinChat();
		this.socket.on("message", this.messageReceiver);

		return { messages };
	}

	sendMessage(message) {
		return new Promise((resolve, reject) => {
			if (!this) {
				reject(new Error("Chat was not initialized"));
			}

			this.socket.emit(
				"sendMessage",
				{ message, roomId: this.roomId },
				(err) => {
					if (err) {
						return reject(err);
					}

					resolve();
				}
			);
		});
	}

	disconnect() {
		if (!this) {
			return;
		}

		this.socket.disconnect();
	}

	_sendJoinChat() {
		this.socket.emit(
			"join",
			{ token: this.token, roomId: this.roomId },
			(error) => {
				if (error) {
					this.history.push("/");
					alert("Cannot connect to chat");
				}
			}
		);
	}
}

export default ChatService;
