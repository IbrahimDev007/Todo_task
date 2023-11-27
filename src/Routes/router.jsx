import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		errorElement: <Error />,
		loader: async () => {
			return fetch("https://todo-backend-navy-kappa.vercel.app/");
		},
	},
]);
export default router;
