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
		<div className="messageContainer justifyEnd">
			<p className="sentText pl-10">{createdAt.toLocaleString()}</p>
			<ul className="justifyEnd">
				<p className="sentText pr-10 justifyEnd">Me</p>
				<div className="messageBox backgroundBlue justifyEnd">
					<p className="messageText colorWhite">
						{ReactEmoji.emojify(message)}
					</p>
				</div>
			</ul>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<ul>
				<p className="sentText pl-10 ">{trimmedName}</p>
				<div className="messageBox backgroundLight ">
					<p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
				</div>
			</ul>
			<p className="sentText pl-10">{createdAt.toLocaleString()}</p>
		</div>
	);
};

export default Message;
