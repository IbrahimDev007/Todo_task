import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Hero from "../../Components/Hero";
import "@testing-library/jest-dom";

test("renders Hero component", () => {
	const { getByText } = render(<Hero />);
	const linkElement = getByText(/Hi Todo/i);
	expect(linkElement).toBeInTheDocument();
});
