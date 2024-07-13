/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavoriteAssets } from '../../store/thunks/asstes';
import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';
import AreaChart from '../../components/charts/area-chart';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import LineChart from '../../components/charts/line-chart';
import { IChartData } from '../../common/types/assets';

const Home: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const favoriteAssets: IChartData[] = useAppSelector(
		(state) => state.assets.favoriteAssets
	);
	const classes = useStyles();
	const fetchDataRef = useRef(false);

	const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
	const filteredArray = favoriteAssets.filter(
		(value, i: number, self: any[]) =>
			i === self.findIndex((t) => t.name === value.name)
	);

	const fetchdata = useCallback(
		(data: string[]) => {
			data.forEach((name: string) => {
				dispatch(getFavoriteAssets(name));
			});
		},
		[dispatch]
	);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchdata(favoriteAssetName);
	}, []);

	const renderFavoriteBlock = filteredArray.map((el: any) => {
		// const currentPrise = el.data[0];
		// const currentCap = el.data.market_caps[0];

		const currentPrise = el.singleAsset.map((el: any) => el.current_price);
		// const currentCap = el.singleAsset.map((el: any) => el.market_cap);
		const changePrice = el.singleAsset.map(
			(el: any) => el.market_cap_change_percentage_24h
		);

		return (
			<Grid item xs={12} sm={6} lg={6} key={el.name}>
				<Grid container className={classes.topCardItem}>
					<Grid item xs={12} sm={6} lg={6}>
						<h3 className={classes.assetName}>{el.name}</h3>
						<div className={classes.itemDetails}>
							<h3 className={classes.cardPrice}>
								${currentPrise}
							</h3>

							<Box
								className={
									changePrice > 0
										? `${classes.priseTrend} ${classes.trendUp}`
										: `${classes.priseTrend} ${classes.trendDown}`
								}
							>
								{changePrice > 0 ? (
									<img src={TrendUp} alt="TrendUp" />
								) : (
									<img src={TrendDown} alt="TrendDown" />
								)}
								<span>{Number(changePrice).toFixed(2)}%</span>
							</Box>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} lg={6}>
						<AreaChart data={el.priceChartData} />
					</Grid>
				</Grid>
			</Grid>
		);
	});

	return (
		<Box className={classes.root}>
			<Grid container spacing={2} className={classes.areaChart}>
				{renderFavoriteBlock}
			</Grid>
			<Grid container className={classes.lineChartBlock}>
				<Grid item xs={12} sm={12} lg={12}>
					{filteredArray.length && <LineChart data={filteredArray} />}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
