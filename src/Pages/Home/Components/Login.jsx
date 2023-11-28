import useAuthcontext from "../../../Hooks/useAuthcontext";
import { FcGoogle } from "react-icons/fc";
import { RiLogoutCircleFill } from "react-icons/ri";
const LoginComp = () => {
	const { googleSignIn, user, logout } = useAuthcontext();

	const login = () => {
		googleSignIn();
	};

	return (
		<>
			{user ? (
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
			) : (
				<button
					className="btn btn-circle btn-outline btn-sm  flex flex-nowrap"
					onClick={login}
				>
					<FcGoogle className="text-xl " />
				</button>
			)}
		</>
	);
};

export default LoginComp;
