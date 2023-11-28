import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
export default function Pie_Chart(props) {
	const { todo, pogress, complete } = props;
	console.log(todo, "---", pogress, complete);

	const data = [
		{ name: "Todo", value: todo },
		{ name: "Pogress", value: pogress },
		{ name: "Done", value: complete },
	];

	return (
		<PieChart width={400} height={400}>
			<Pie
				data={data}
				cx={200}
				cy={200}
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
		</PieChart>
	);
}
