import { useForm } from "react-hook-form";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
const Card = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className="grid  pt-10 gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 text-white bg-sky-400 shadow-inner-lg ">
			<div className="card w-96  shadow-xl bg-blue-600  min-h-screen ">
				<button className="btn btn-sm glass text-white">
					<SiTodoist className="text-xl  text-white" />
					Todo
				</button>
				<form className="card-body mb-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-white font-bold">Title</span>
						</label>
						<input
							type="text"
							placeholder="Title"
							{...register("title", { required: true, maxLength: 10 })}
							className="input input-bordered text-black"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-white">Description</span>
						</label>
						<textarea
							className="textarea textarea-success  text-black"
							placeholder="Description"
							{...register("discription", { required: true, maxLength: 30 })}
						></textarea>
					</div>
					<div className="form-control mt-6">
						<button
							type="submit"
							className="btn  btn-sm btn-success text-white font-bold"
						>
							<SiTodoist className="text-2xl text-white mx-2" />
							Add Todo
						</button>
					</div>
				</form>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 relative border-blue-700  bg-sky-700 rounded-md  max-h-40 m-4">
					<input
						type="checkbox"
						checked="checked"
						className="checkbox  absolute z-10 top-0 right-0"
					/>
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96 shadow-xl bg-sky-500">
				<button className="btn btn-sm glass text-primary">
					<FaSpinner className="text-2xl text-white" />
					Pogress
				</button>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 relative border-blue-700  bg-sky-700 rounded-md  max-h-40 m-4">
					<input
						type="checkbox"
						checked="checked"
						className="checkbox  absolute z-10 top-0 right-0"
					/>
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
			<div className="card w-96  bg-sky-700 shadow-xl">
				<button className="btn btn-sm glass text-info">
					<IoCheckmarkDoneCircleOutline className="text-2xl text-white" />
					Done
				</button>
				<div className="card-body border-4 shadow-lg solid p-4 mb-4 relative border-blue-700  bg-sky-700 rounded-md max-h-40 m-4">
					<input
						type="checkbox"
						checked="checked"
						className="checkbox  absolute z-10 top-0 right-0"
					/>
					<h3 className="text-xl font-bold">Title</h3>
					<p className="font-semibold">Description</p>
					<h2 className="text-sm font-mono">status</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
