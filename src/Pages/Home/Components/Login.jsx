import useAuthcontext from "../../../Hooks/useAuthcontext";
import { FcGoogle } from "react-icons/fc";
import { RiLogoutCircleFill } from "react-icons/ri";
const LoginComp = () => {
	const { googleSignIn, user, logout } = useAuthcontext();

	const login = () => {
		googleSignIn();
	};

	return (
		<div>
			<div className=" rounded-full z-70 ">
				<div className="card-body">
					{user ? (
						<div className="card-actions justify-center">
							<div className="dropdown">
								<div
									tabIndex={0}
									role="button"
									className="btn btn-circle btn-outline"
								>
									<div className="avatar">
										<div className="w-24 mask mask-hexagon">
											<img src={user?.photoURL} />
										</div>
									</div>
								</div>
								<ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li onClick={() => logout}>
										<RiLogoutCircleFill className="text-2xl text-red-700 font-bold" />
										Logout
									</li>
								</ul>
							</div>
						</div>
					) : (
						<div className="card-actions justify-center">
							<button className="btn btn-circle btn-outline" onClick={login}>
								<FcGoogle className="text-3xl" />
							</button>
							<button className="btn btn-error" onClick={login}>
								login
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LoginComp;
