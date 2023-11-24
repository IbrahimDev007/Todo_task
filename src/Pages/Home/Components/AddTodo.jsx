import axios from "axios";
import { useForm } from "react-hook-form";
import { SiTodoist } from "react-icons/si";
import useTaskDataHook from "../../../Hooks/useTaskDataHook";
import Swal from "sweetalert2";

const AddTodo = () => {
	const { register, handleSubmit, reset } = useForm();
	const [, refetch] = useTaskDataHook();

	const onSubmit = async (data) => {
		data.status = "todo";
		console.log(data);
		try {
			const response = await axios.post("http://localhost:3000/task", data);

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your task has been added",
				showConfirmButton: false,
				timer: 1500,
			});
			reset();
			refetch();
			console.log("Post request successful:", response.data);
		} catch (error) {
			console.error("Error making post request:", error);
		}
	};
	return (
		<form className="card-body mb-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-control">
				<label className="label">
					<span className="label-text text-white font-bold">Title</span>
				</label>
				<input
					type="text"
					placeholder="Title"
					{...register("title", { required: true, maxLength: 50 })}
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
					{...register("discription", { required: true })}
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
	);
};

export default AddTodo;
