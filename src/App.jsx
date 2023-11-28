// import { useLoaderData } from "react-router-dom";
import Alert from "./Components/Alert";
import Hero from "./Components/Hero";
import Menubar from "./Components/Menubar";
import Card from "./Components/card";

const App = () => {
	//when use react roter dom
	// const Tasks = useLoaderData();

	return (
		<div>
			<Hero />
			<Menubar />
			<Alert />
			{/* when use reac router dom  */}
			<Card />
		</div>
	);
};

export default App;
