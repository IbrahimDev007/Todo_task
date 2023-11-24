import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useInterceptor = () => {
	const axiosSecure = axios.create({
		baseURL: "https://todo-backend-navy-kappa.vercel.app",
	});
	const navigate = useNavigate();
	useEffect(() => {
		axiosSecure.interceptors.request.use((config) => {
			return config;
		});
		axiosSecure.interceptors.response.use(
			(response) => {
				return response;
			},
			async (error) => {
				if (error.response.status === 401 || error.response.status === 404) {
					navigate("/404");
				}
				// Handle 404 Not Found error
				return Promise.reject(error);
			}
		);

		// Use the Axios instance for making requests
		// Example: await axiosSecure.get('/api/data') or await instance.post('/api/data', requestData)
	}, [navigate]);

	return [axiosSecure];
};

export default useInterceptor;
