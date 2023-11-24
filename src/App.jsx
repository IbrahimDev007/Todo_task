// import { useLoaderData } from "react-router-dom";
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
			{/* when use reac router dom  */}
			<Card />
		</div>
	);
};

export default App;
