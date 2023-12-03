import { test } from "vitest";
import useInterceptor from "../../Hooks/useInterceptor";

// Create a mock function for navigate
const mockNavigate = (path) => {
	console.log(`Navigating to ${path}`);
};

test("useInterceptor", ({ expect }) => {
	const [axiosSecure] = useInterceptor(mockNavigate);

	// Add your assertions here
	expect(axiosSecure).toBeDefined();
});
