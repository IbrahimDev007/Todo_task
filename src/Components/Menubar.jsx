import { FcTodoList } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";
const Menubar = () => {
	return (
		<div className="flex justify-center items-center">
			<ul className="menu bg-base-200 lg:menu-horizontal rounded-box ">
				<li>
					<h1>
						<FcTodoList className="mx-1" />
						Move to Todo
						<span className="badge badge-sm">99+</span>
					</h1>
				</li>
				<li>
					<h1>
						Move to pogress
						<span className="badge badge-sm badge-warning">
							<ImSpinner9 className="mx-1" />
						</span>
					</h1>
				</li>
				<li>
					<h1>
						Move To done
						<span className="badge badge-xs badge-info"></span>
					</h1>
				</li>
			</ul>
		</div>
	);
};

export default Menubar;
