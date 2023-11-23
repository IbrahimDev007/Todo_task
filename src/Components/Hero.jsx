const Hero = () => {
	return (
		<div
			className="hero min-h-[200px]"
			style={{
				backgroundImage: 'url("/Todo.jpeg")',
			}}
		>
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
