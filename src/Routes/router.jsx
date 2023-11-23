import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		loader: async () => {
			return fetch("http://localhost:3000/");
		},
	},
]);
export default router;
