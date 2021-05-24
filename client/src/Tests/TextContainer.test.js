import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextContainer from "../components/TextContainer";

afterEach(cleanup);

it("It will render container for text", () => {
	render(<TextContainer />);
});
