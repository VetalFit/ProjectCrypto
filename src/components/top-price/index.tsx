import AssetsTableComponent from '../assets-table';

const TopPriseComponent = (props: any) => {
	const { assets } = props;

	return <AssetsTableComponent assets={assets} />;
};

export default TopPriseComponent;
