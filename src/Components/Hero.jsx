import LoginComp from "../Pages/Home/Components/Login";

const Hero = () => {
	return (
		<div
			className="hero min-h-[200px]  sticky top-0
			"
			style={{
				backgroundImage: 'url("/Todo.jpeg")',
			}}
		>
			<div className="fixed top-0 right-0 ">
				<LoginComp />
			</div>
			<div className="hero-overlay bg-opacity-30"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Hi Todo</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
