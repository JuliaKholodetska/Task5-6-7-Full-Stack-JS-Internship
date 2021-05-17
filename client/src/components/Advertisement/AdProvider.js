/* global googletag */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Advertising from "./Advertising";

export default class AdProvider extends Component {
	constructor(props) {
		super(props);
		const { adUnits } = props;
		this.advertising = new Advertising(adUnits);
		this.advertising.init();
	}

	getChildContext() {
		const { advertising } = this;
		return {
			refresh() {
				advertising.refresh();
			},
		};
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}

AdProvider.childContextTypes = {
	refresh: PropTypes.func,
};
