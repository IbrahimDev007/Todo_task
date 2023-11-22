import Hero from "./Component/Hero";
import Card from "./Component/card";

const App = () => {
	return (
		<div>
			<Hero />
			<ul className="menu bg-base-200 lg:menu-horizontal rounded-box ">
				<li>
					<a>
						Move to Todo
						<span className="badge badge-sm">99+</span>
					</a>
				</li>
				<li>
					<a>
						Move to pogress
						<span className="badge badge-sm badge-warning">NEW</span>
					</a>
				</li>
				<li>
					<a>
						Move To done
						<span className="badge badge-xs badge-info"></span>
					</a>
				</li>
			</ul>
			<Card />
		</div>
	);
};

export default App;
