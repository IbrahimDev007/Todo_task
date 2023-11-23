const Error = () => {
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
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
