import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({ messages, currentUserId }) => (
	<ScrollToBottom className="messages">
		{messages.map((message, i) => (
			<div key={i}>
				<Message
					message={message.message}
					name={message.user?.name}
					isSentByCurrentUser={message.user.id === currentUserId}
					createdAt={new Date(message.createdAt)}
				/>
			</div>
		))}
	</ScrollToBottom>
);

export default Messages;
