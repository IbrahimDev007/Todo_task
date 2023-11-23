import { createContext, useState } from "react";

export const taskContext = createContext(null);

const TaskProvider = ({ children }) => {
	const [selectedData, setSelectedData] = useState([]);

	const dataInfo = {
		selectedData,
		setSelectedData,
	};

	return (
		<taskContext.Provider value={dataInfo}>{children}</taskContext.Provider>
	);
};

export default TaskProvider;
