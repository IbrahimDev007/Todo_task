import { FcTodoList } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import useTaskDataHook from "../Hooks/useTaskDataHook";
import useDataContext from "../Hooks/useDataContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useInterceptor from "../Hooks/useInterceptor";

const Menubar = () => {
	const { selectedData } = useDataContext();
	// console.log(selectedData);
	const [task, refetch] = useTaskDataHook();
	const navigate = useNavigate();
	const Todo = task.filter((task) => task.status === "todo");
	const [axiosSecure] = useInterceptor();
	const handleDelete = async () => {
		console.log(selectedData);
		try {
			const response = await axiosSecure.delete(`/delete`, {
				data: { selectedData },
			});
			refetch();
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `you delete succesfully`,
				showConfirmButton: false,
				timer: 1500,
			});
			console.log(" request successful:", response.data);
		} catch (error) {
			console.error("Error making post request:", error);
		}
	};

	const handleclick = async (todo) => {
		try {
			const response = await axiosSecure.patch(`/move/${todo}`, {
				selectedData,
			});
			refetch();
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `you move succesfully`,
				showConfirmButton: false,
				timer: 1500,
			});
			console.log(" request successful:", response.data);
		} catch (error) {
			console.error("Error making post request:", error);
		}
	};

	return (
		<div className="flex justify-center items-center sticky top-0 z-20">
			<ul className="menu bg-base-200 lg:menu-horizontal rounded-box ">
				<li>
					<button onClick={() => handleclick("todo")}>
						<FcTodoList className="mx-1" />
						Move to Todo
						<span className="badge badge-sm">{Todo.length}</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleclick("pogress")}>
						Move to pogress
						<span className="badge badge-sm badge-warning">
							<ImSpinner9 className="mx-1" />
						</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleclick("done")}>
						Move To done
						<span className="badge badge-xs badge-info"></span>
					</button>
				</li>
				<li>
					<button onClick={() => navigate("/dashboard")}>
						Dashboard
						<MdOutlineSpaceDashboard className="mx-1 text-xl bold text-info" />
					</button>
				</li>
				<li>
					<button onClick={() => handleDelete()}>
						Delete
						<BsTrash className="mx-1 text-xl bold text-error" />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Menubar;
