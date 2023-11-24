import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
import AddTodo from "../Pages/Home/Components/AddTodo";
import CardItem from "./CardItem";
import useTaskDataHook from "../Hooks/useTaskDataHook";
import useDataContext from "../Hooks/useDataContext";
const Card = () => {
	// const [checkedIds, setCheckedIds] = useState([]);
	const { selectedData, setSelectedData } = useDataContext();
	const [task, , isLoading] = useTaskDataHook();
	const Tasks = task || [];

	const handleCheck = (taskId, isChecked) => {
		if (isChecked) {
			setSelectedData([...selectedData, taskId]);
		} else {
			setSelectedData(selectedData.filter((id) => id !== taskId));
		}
	};
	const Todo = Tasks.filter((task) => task.status === "todo");
	const Pogress = Tasks.filter((task) => task.status === "pogress");
	const Complete = Tasks.filter((task) => task.status === "done");
	if (isLoading) {
		return (
			<div className="flex justify-center">
				<span className="loading loading-infinity loading-lg "></span>
			</div>
		);
	}
	return (
		<div className="grid  pt-10 gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 text-white bg-indigo-300 shadow-inner-lg ">
			<div className="card w-96  shadow-xl bg-sky-400  min-h-screen ">
				<button className="btn btn-sm glass text-white">
					<SiTodoist className="text-xl  text-white" />
					Todo
				</button>
				<AddTodo />
				<div className="divider   divider-primary"></div>

				{Todo.map((task) => (
					<CardItem key={task._id} task={task} onCheck={handleCheck} />
				))}
			</div>
			<div className="card w-96 shadow-xl bg-cyan-400">
				<button className="btn btn-sm glass text-primary">
					<FaSpinner className="text-2xl text-white" />
					Pogress
				</button>
				{Pogress.map((task) => (
					<CardItem key={task._id} task={task} onCheck={handleCheck} />
				))}
			</div>
			<div className="card w-96  bg-green-400 shadow-xl">
				<button className="btn btn-sm glass text-info">
					<IoCheckmarkDoneCircleOutline className="text-2xl text-white" />
					Done
				</button>
				{Complete.map((task) => (
					<CardItem key={task._id} task={task} onCheck={handleCheck} />
				))}
			</div>
		</div>
	);
};

export default Card;
