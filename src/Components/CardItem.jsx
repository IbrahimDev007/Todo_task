import { useEffect, useState } from "react";

const CardItem = ({ task, onCheck }) => {
	const { title, discription, status, _id } = task;
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		onCheck(_id, isChecked);
	}, [isChecked]);

	const handleCheck = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="card-body border-4 shadow-lg solid p-4 mb-4 relative border-blue-700  bg-sky-700 rounded-md  max-h-[12rem] m-4">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleCheck}
				className="checkbox  absolute z-10 top-0 right-0 border-3 border-cyan-500"
			/>
			<h3 className="text-xl font-bold">Title:{title}</h3>
			<p className="font-semibold">
				Description:<span>{discription}</span>
			</p>
			<h2 className="text-sm font-mono">
				status:<span>{status}</span>
			</h2>
		</div>
	);
};

export default CardItem;
