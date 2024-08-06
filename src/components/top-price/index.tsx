import { FC } from 'react';
import { ITablePriceData } from '../../common/types/assets';
import AssetsTableComponent from '../assets-table';

const TopPriseComponent: FC<ITablePriceData> = (
	props: ITablePriceData
): JSX.Element => {
	const { assets } = props;

	return <AssetsTableComponent assets={assets} />;
};

export default TopPriseComponent;
