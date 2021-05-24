import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SearchBox from "../components/SearchBox";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Rendering", () => {
	it("It will render correctly", () => {
		const { queryByTestId, queryByPlaceholderText } = render(<SearchBox />);
		expect(queryByTestId("search-button")).toBeTruthy();
		expect(queryByPlaceholderText("Search")).toBeTruthy();
	});
});

describe("Input value", () => {
	it("updates on change", () => {
		const { queryByPlaceholderText } = render(<SearchBox />);
		const searchInput = queryByPlaceholderText("Search");
		fireEvent.change(searchInput, { target: { value: "test" } });
		expect(searchInput.value).toBe("test");
	});
});

describe("Search button", () => {
	describe("with empty name", () => {
		it("does not trigger submitHandler function", () => {
			const requestSearch = jest.fn();
			const { queryByTestId } = render(
				<SearchBox requestSearch={requestSearch} />
			);
			fireEvent.click(queryByTestId("search-button"));
			expect(requestSearch).not.toHaveBeenCalled();
		});
	});
});
