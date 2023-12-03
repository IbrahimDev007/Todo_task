import { expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Alert from "../../Components/Alert";
import "@testing-library/jest-dom";

test("renders Alert component and checks button click", async () => {
	const { getByRole } = render(<Alert />);

	let alertElement = getByRole("alert");
	expect(alertElement).toBeInTheDocument();

	const buttonElement = getByRole("button");
	fireEvent.click(buttonElement);
});
