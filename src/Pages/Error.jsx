import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<div className="container mx-auto flex justify-center items-center h-screen">
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
				<div className="mb-4">
					<span className="block text-gray-700 text-sm font-bold mb-2">
						Oops! Something went wrong.
					</span>
					<p className="text-gray-600 text-base">
						We're sorry, but we can't process your request right now. Please try
						again later.
					</p>
				</div>
				<div className="flex items-center justify-between">
					<button
						onClick={() => navigate("/")}
						className="btn btn-primary text-end"
					>
						back to Home
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
