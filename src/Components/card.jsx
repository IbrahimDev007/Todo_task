import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
import AddTodo from "../Pages/Home/Components/AddTodo";
import CardItem from "./CardItem";
const Card = ({ Tasks }) => {
	console.log(Tasks);
	return (
		<div className="grid  pt-10 gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 text-white bg-sky-400 shadow-inner-lg ">
			<div className="card w-96  shadow-xl bg-blue-600  min-h-screen ">
				<button className="btn btn-sm glass text-white">
					<SiTodoist className="text-xl  text-white" />
					Todo
				</button>
				<AddTodo />
				<div className="divider   divider-primary"></div>

				{Tasks.map((task) => (
					<CardItem key={task._id} task={task} />
				))}
			</div>
			<div className="card w-96 shadow-xl bg-sky-500">
				<button className="btn btn-sm glass text-primary">
					<FaSpinner className="text-2xl text-white" />
					Pogress
				</button>
				{Tasks.map((task) => (
					<CardItem key={task._id} task={task} />
				))}
			</div>
			<div className="card w-96  bg-sky-700 shadow-xl">
				<button className="btn btn-sm glass text-info">
					<IoCheckmarkDoneCircleOutline className="text-2xl text-white" />
					Done
				</button>
				{Tasks.map((task) => (
					<CardItem key={task._id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Card;
