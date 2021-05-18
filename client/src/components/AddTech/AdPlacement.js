import React, { Component } from "react";

export default class AdPlacement extends Component {
	componentDidMount() {
		const { id } = this.props;
		window.googletag.cmd.push(function () {
			window.googletag.display(id);
		});
	}
	render() {
		const { id } = this.props;
		return <div id={id}></div>;
	}
}
