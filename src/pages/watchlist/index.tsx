import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getWatchlistElements } from '../../store/thunks/watchlist';
import { getTopPriceData } from '../../store/thunks/asstes';
import AssetsTableComponent from '../../components/assets-table';
import { Grid, Typography } from '@mui/material';
import { useStyles } from './styles';

const WatchlistPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const watchlist = useAppSelector((state) => state.watchlist.watchlist);
	const assets = useAppSelector((state) => state.assets.assets);
	const classes = useStyles();

	useEffect(() => {
		dispatch(getTopPriceData());
		dispatch(getWatchlistElements());
	}, [dispatch]);

	const filteredArray = assets.filter((el: any) => {
		return watchlist.some((otherElement: any) => {
			return otherElement.assetId === el.id;
		});
	});

	return (
		<Grid className={classes.root}>
			<Grid className={classes.watchlistHeading}>
				<Typography variant="h2" className={classes.heading}>
					Favorites
				</Typography>
			</Grid>
			<Grid className={classes.assetsTableBlock}>
				<AssetsTableComponent assets={filteredArray} />
			</Grid>
		</Grid>
	);
};

export default WatchlistPage;
