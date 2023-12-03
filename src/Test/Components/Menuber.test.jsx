import { fireEvent, render } from "@testing-library/react";
import Menubar from "../../Components/Menubar";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

test("renders Menubar and checks button click", async () => {
	const { getByText } = render(<Menubar />);

	// Check if the component renders correctly
	expect(getByText("Move to Todo")).toBeInTheDocument();
	expect(getByText("Move to pogress")).toBeInTheDocument();
	expect(getByText("Move To done")).toBeInTheDocument();
	expect(getByText("Dashboard")).toBeInTheDocument();
	expect(getByText("Delete")).toBeInTheDocument();

	// Simulate button click and check the result
	const todoButton = getByText("Move to Todo");
	await fireEvent.click(todoButton);
	// Add assertions here to check the result of button click
});
