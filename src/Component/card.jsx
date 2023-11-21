const Card = () => {
	return (
		<div className="grid  pt-10 gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 bg-violet-700 shadow-inner-lg ">
			<div className="card w-96  shadow-xl bg-blue-600">
				<button className="btn btn-sm glass">Todo</button>
				<form className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text text-whit font-bold">Title</span>
						</label>
						<input
							type="text"
							placeholder="Title"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-white">Description</span>
						</label>
						<textarea
							className="textarea textarea-success"
							placeholder="Description"
							required
						></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn  btn-sm btn-success text-white font-bold">
							Add Todo
						</button>
					</div>
				</form>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid border-blue-700 bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid border-blue-700 bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid border-blue-700 bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body border-2 solid border-blue-700">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semiBold">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body border-2 solid border-blue-700">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semiBold">description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
