import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import TaskProvider from "./Provider/TaskProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Provider/Authprovider";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<TaskProvider>
				<QueryClientProvider client={queryClient}>
					<div className="max-w-screen-2xl mx-auto ">
						<RouterProvider router={router} />
					</div>
				</QueryClientProvider>
			</TaskProvider>
		</AuthProvider>
	</React.StrictMode>
);
