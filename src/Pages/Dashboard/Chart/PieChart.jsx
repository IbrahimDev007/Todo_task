import { PieChart, Pie, Tooltip } from "recharts";

const Piechart = ({ todo, pogress, complete }) => {
	const data01 = [
		{ name: "Todo", value: todo },
		{ name: "Pogress", value: pogress },
		{ name: "Done", value: complete },
	];
	return (
		<PieChart width={400} height={400} className="pr-28 ">
			<Pie
				dataKey="value"
				isAnimationActive={false}
				data={data01}
				cx={200}
				cy={200}
				outerRadius={80}
				fill="#8884d8"
				label
			/>

			<Tooltip />
		</PieChart>
	);
};

export default Piechart;
