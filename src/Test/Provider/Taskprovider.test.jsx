import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import { test, expect } from "vitest";
import TaskProvider, { taskContext } from "../../Provider/TaskProvider";
import "@testing-library/jest-dom";

test("TaskProvider provides context values", () => {
	// Define a test component that will consume the context
	const TestComponent = () => {
		const context = useContext(taskContext);
		return (
			<div>
				<span>{context.selectedData.length}</span>
				<span>{context.pogress}</span>
			</div>
		);
	};

	// Render the test component within the TaskProvider
	render(
		<TaskProvider>
			<TestComponent />
		</TaskProvider>
	);

	// Check if the context values are correctly provided
	expect(screen.getByText("0")).toBeInTheDocument();
});
