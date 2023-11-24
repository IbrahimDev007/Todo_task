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
		<div className="card-body  shadow-lg p-4 mb-4 relative  bg-sky-900 rounded-md  max-h-[12rem] m-4">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleCheck}
				className="checkbox mr-2 mt-2 absolute z-10 top-0 right-0 border-3 border-cyan-500"
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
