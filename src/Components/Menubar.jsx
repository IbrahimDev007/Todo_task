import { FcTodoList } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";
import axios from "axios";
import useTaskDataHook from "../Hooks/useTaskDataHook";
import useDataContext from "../Hooks/useDataContext";
import Swal from "sweetalert2";

const Menubar = () => {
	const { selectedData } = useDataContext();
	const [, refetch] = useTaskDataHook();
	const handleclick = async (todo) => {
		try {
			const response = await axios.patch(`http://localhost:3000/move/${todo}`, {
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
						<span className="badge badge-sm">99+</span>
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
			</ul>
		</div>
	);
};

export default Menubar;
