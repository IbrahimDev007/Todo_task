const Card = () => {
	return (
		<div className="grid  pt-10 gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 bg-sky-400 shadow-inner-lg ">
			<div className="card w-96  shadow-xl bg-blue-600  min-h-screen ">
				<button className="btn btn-sm glass text-white">Todo</button>
				<form className="card-body mb-4">
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

				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md">
									<h3 className="text-xl font-bold">Title</h3>
									<p className="font-semibold">Description</p>
									<h2 className="text-sm font-mono">status</h2>
								</div>
							</tr>
						</tbody>
						{/* foot */}
					</table>
				</div>
			</div>
			<div className="card w-96 shadow-xl bg-sky-500">
				<button className="btn btn-sm glass text-primary">Pogress</button>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md min-h-[1.3rem]">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md min-h-[7rem]">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md min-h-[1.3rem]">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md min-h-[1.3rem]">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96  bg-sky-700 shadow-xl">
				<button className="btn btn-sm glass text-info">Done</button>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 border-blue-700  bg-sky-700 rounded-md">
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
