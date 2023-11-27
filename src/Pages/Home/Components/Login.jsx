import useAuthcontext from "../../../Hooks/useAuthcontext";

const LoginComp = () => {
	const { googleSignIn, user, logout } = useAuthcontext();

	const login = () => {
		googleSignIn();
	};

	return (
		<div>
			<div className="card w-96 glass">
				<figure>
					<div className="avatar">
						<div className="w-24 mask mask-hexagon">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
				</figure>
				<div className="card-body">
					{user ? (
						<div className="card-actions justify-center">
							<button className="btn btn-primary" onClick={login}>
								Login
							</button>
						</div>
					) : (
						<div className="card-actions justify-center">
							<button className="btn btn-primary" onClick={() => logout}>
								Login
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LoginComp;
