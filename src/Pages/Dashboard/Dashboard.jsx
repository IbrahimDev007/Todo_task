import { useNavigate } from "react-router-dom";
import useTaskDataHook from "../../Hooks/useTaskDataHook";
import useAuthcontext from "../../Hooks/useAuthcontext";
import Pie_Chart from "./Chart/PieChart";

const Dashboard = () => {
	const navigate = useNavigate();
	const [task] = useTaskDataHook();
	const { user } = useAuthcontext();
	const workload = 100 - (task.length / 7) * 100; //here 7 uses as workload stable standard
	const Pogress = task.filter((task) => task.status === "pogress");
	const todo = task.filter((task) => task.status === "todo");
	const Complete = task.filter((task) => task.status === "done");
	const pogressPrct =
		100 - (Pogress.length / (task.length + Complete.length)) * 100;
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage:
					"url(https://img.freepik.com/free-photo/digital-tablet-online-learning_53876-97299.jpg?size=626&ext=jpg)",
			}}
		>
			<div className="hero-overlay   bg-opacity-60"></div>
			<div className="hero-content  text-center text-neutral-content">
				<div className="max-w-full mx-auto">
					<div className="card  w-full h-fit shadow-2xl bg-base-100">
						<div className="stats shadow flex   flex-wrap">
							<div className="stat flex  items-center justify-items-center flex-col text-start">
								<div className="stat-title">Total Tasks</div>
								<div className="stat-value text-primary ">
									{task.length} Task
									<span className="stat-figure text-primary mx-4 my-2 ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											className="inline-block w-8 h-8 stroke-current"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											></path>
										</svg>
									</span>
								</div>
								<div className="stat-desc py-2">
									{Math.abs(workload).toFixed(2)}%
									{(workload > 0 && (
										<span className="text-error mx-2">increase</span>
									)) ||
										(workload < 0 && (
											<span className="text-success mx-2">Decrease</span>
										)) ||
										workload === 0 ||
										(null && <span className="text-info mx-2">Decrease</span>)}
									more than last month
								</div>
							</div>

							<div className="stat  flex  text-start items-center justify-items-center flex-col">
								<div className="stat-title">Pogress Tasks</div>
								<div className="stat-value text-secondary ">
									{Pogress.length} Tasks
									<span className="stat-figure mx-4 my-2 text-secondary">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											className="inline-block w-8 h-8 stroke-current"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											></path>
										</svg>
									</span>
								</div>
								<div className="stat-desc py-2">
									{Math.abs(pogressPrct).toFixed(2)}%
									{(pogressPrct > 0 && (
										<span className="text-error mx-2">increase</span>
									)) ||
										(pogressPrct < 0 && (
											<span className="text-success mx-2">Decrease</span>
										)) ||
										pogressPrct === 0 ||
										(null && <span className="text-info mx-2">Decrease</span>)}
									more than last month
								</div>
							</div>

							<div
								className="stat flex items-start flex-row justify-center 
                            "
							>
								<div className="flex items-center  justify-items-center">
									<Pie_Chart
										todo={todo.length}
										pogress={Pogress.length}
										complete={Complete.length}
									/>

									<div>
										<div className="stat-figure text-secondary">
											<div className="avatar online">
												<div className="w-16 rounded-full">
													<img src={user?.photoURL} />
												</div>
											</div>
										</div>
										<div className="stat-value">
											{Math.abs((Complete.length / 7) * 100).toFixed(2)}%
										</div>
										<div className="stat-title">Tasks done</div>
										<div className="stat-desc text-secondary">
											{todo.length + Pogress.length} tasks remaining
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button
						onClick={() => navigate("/")}
						className="btn btn-primary text-end my-10"
					>
						Back to Home
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
