import { Line } from 'react-chartjs-2';
import moment from 'moment';
import {
	CategoryScale,
	Chart,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	ScriptableContext,
	Title,
	Tooltip,
	Filler,
} from 'chart.js';
import { IAreaChartProps } from '../../../common/types/assets';
import { FC } from 'react';

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const AreaChart: FC<IAreaChartProps> = (props: IAreaChartProps) => {
	const { data } = props;

	const options = {
		responsive: true,
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
				},
			},
			y: {
				display: false,
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const value = {
		labels: data.map((el: number[]) => moment(el[0]).format('DD.MM.YY')),
		datasets: [
			{
				fill: 'start',
				label: 'Price',
				data: data.map((el: number[]) => el[1]),
				backgroundColor: (context: ScriptableContext<'line'>) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 180);
					gradient.addColorStop(0, '#C1EF00');
					gradient.addColorStop(1, '#232323');
					return gradient;
				},
			},
		],
	};
	return <Line options={options} data={value} width={300} height={100} />;
};

export default AreaChart;
