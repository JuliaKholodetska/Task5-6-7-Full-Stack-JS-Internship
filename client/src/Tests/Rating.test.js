import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Rating from "../components/Rating";

afterEach(cleanup);

describe("Rendering", () => {
	it("It will render correctly", () => {
		render(<Rating />);
	});
});
