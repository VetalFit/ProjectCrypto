/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavoritAssets } from '../../store/thunks/asstes';
import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';

const Home = () => {
	const dispatch = useAppDispatch();
	const favoriteAssets: any[] = useAppSelector(
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
				dispatch(getFavoritAssets(name));
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
		const currentPrise = el.data.prices[0];
		const currentCap = el.data.market_caps[0];
		return (
			<Grid item xs={12} sm={6} lg={6}>
				<Grid container className={classes.topCardItem}>
					<Grid item xs={12} sm={6} lg={6}>
						<h3 className={classes.assetName}>{el.name}</h3>
						<div className={classes.itemDetails}>
							<h3 className={classes.cardPrice}>
								${currentPrise[1].toFixed(2)}
							</h3>
							<p className={classes.cardCapitalize}>
								${currentCap[1].toFixed(0)}
							</p>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} lg={6}>
						<h5>Chart</h5>
					</Grid>
				</Grid>
			</Grid>
		);
	});

	return (
		<Box className={classes.root}>
			<Grid container spacing={2}>
				{renderFavoriteBlock}
			</Grid>
		</Box>
	);
};

export default Home;
