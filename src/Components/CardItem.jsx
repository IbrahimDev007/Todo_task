const CardItem = ({ task }) => {
	const { title, discription, status } = task;
	return (
		<div className="card-body border-4 shadow-lg solid p-4 mb-4 relative border-blue-700  bg-sky-700 rounded-md  max-h-40 m-4">
			<input
				type="checkbox"
				checked="checked"
				className="checkbox  absolute z-10 top-0 right-0"
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
