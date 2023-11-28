import { useState } from "react";

const Alert = () => {
	const [alert, setAlert] = useState(true);

	return (
		<div
			role="alert"
			className={
				alert
					? "flex justify-center items-center  alert-error p-4 bg-error"
					: "hidden"
			}
		>
			<button
				className="btn btn-circle btn-outline btn-xs mx-2"
				onClick={() => setAlert(!alert)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<span>Login To see Dashboard</span>
		</div>
	);
};

export default Alert;
