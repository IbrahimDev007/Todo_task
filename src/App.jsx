import { useLoaderData } from "react-router-dom";
import Hero from "./Components/Hero";
import Menubar from "./Components/Menubar";
import Card from "./Components/card";

const App = () => {
	const Tasks = useLoaderData();

	return (
		<div>
			<Hero />
			<Menubar />
			<Card Tasks={Tasks} />
		</div>
	);
};

export default App;
