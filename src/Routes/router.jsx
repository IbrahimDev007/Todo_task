import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: "/dashboard",
		element: <div>this is dashboard</div>,
		errorElement: <Error />,
		loader: async () => {
			return fetch("http://localhost:3000/");
		},
	},
]);
export default router;
