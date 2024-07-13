import React from 'react';
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ILineChartProps } from '../../../common/types/assets';
import moment from 'moment';

Chart.register(
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = (props: ILineChartProps) => {
	const { data } = props;

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const values = {
		labels: data[0].priceChartData.map((el: any) =>
			moment(el[0]).format('DD.MM.YY')
		),
		datasets: [
			{
				label: 'Prise',
				data: data[0].priceChartData.map((el: any) => el[1]),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	return <Line options={options} data={values} width="100%" height="20%" />;
};

export default LineChart;
