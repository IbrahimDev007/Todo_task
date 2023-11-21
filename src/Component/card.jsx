const Card = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body border-2 solid border-red-900 ">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semiBold">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body border-2 solid border-red-900 ">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semiBold">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body border-2 solid border-red-900 ">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semiBold">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
