import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({
	message,
	name = "",
	isSentByCurrentUser = false,
	createdAt,
}) => {
	const trimmedName = name.trim().toLowerCase();

	return isSentByCurrentUser ? (
		<div className="message-container justify-end">
			<p className="sent-text pl-10">{createdAt.toLocaleString()}</p>
			<ul className="justify-end">
				<p className="sent-text pr-10 justify-end">Me</p>
				<div className="message-box background-blue justify-end">
					<p className="message-text color-white">
						{ReactEmoji.emojify(message)}
					</p>
				</div>
			</ul>
		</div>
	) : (
		<div className="message-container justify-start">
			<ul>
				<p className="sent-text pl-10 ">{trimmedName}</p>
				<div className="message-box background-light ">
					<p className="message-text color-dark">
						{ReactEmoji.emojify(message)}
					</p>
				</div>
			</ul>
			<p className="sent-text pl-10">{createdAt.toLocaleString()}</p>
		</div>
	);
};

export default Message;
