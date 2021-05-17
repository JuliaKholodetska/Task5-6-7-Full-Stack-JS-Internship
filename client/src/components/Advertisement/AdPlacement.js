import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AdPlacement extends Component {
	componentDidMount() {
		const { id } = this.props;
		const { refresh } = this.context;
		console.log("refreshing");
		refresh(id);
	}

	render() {
		const { id } = this.props;
		return <div id={id} />;
	}
}

AdPlacement.contextTypes = {
	refresh: PropTypes.func,
};
