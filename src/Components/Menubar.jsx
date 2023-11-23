import { FcTodoList } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";
import { taskContext } from "../Provider/TaskProvider";
import { useContext } from "react";
import axios from "axios";

const Menubar = () => {
	const { selectedData } = useContext(taskContext);
	// const [moveTodo, setMoveTodo] = useState([]);

	const handleclick = async (todo) => {
		try {
			const response = await axios.post(
				`http://localhost:3000/${todo}`,
				selectedData
			);
			console.log(" request successful:", response.data);
		} catch (error) {
			console.error("Error making post request:", error);
		}
	};
	g;

	return (
		<div className="flex justify-center items-center">
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
