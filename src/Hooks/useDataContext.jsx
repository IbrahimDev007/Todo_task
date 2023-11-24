import { useContext } from "react";
import { taskContext } from "../Provider/TaskProvider";

const useDataContext = () => {
	const TaskData = useContext(taskContext);
	return TaskData;
};

export default useDataContext;
