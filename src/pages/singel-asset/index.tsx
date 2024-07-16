import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { ISingleAsset } from '../../common/types/assets';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import FlexBetween from '../../components/flex-between';
import { useStyles } from './styles';
import { createWatchList } from '../../store/thunks/asstes';

const SingleAssetPage: FC = (): JSX.Element => {
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const assetArray: ISingleAsset[] = useAppSelector(
		(state) => state.assets.assets
	);
	const asset = assetArray.find((el) => el.name === (id as string));
	const classes = useStyles();

	const handleCreateWatchlist = () => {
		const data = {
			name: '',
			assetId: '',
		};
		if (asset) {
			data.name = asset.name;
			data.assetId = asset.id;
		}
		dispatch(createWatchList(data));
	};

	return (
		<>
			{asset && (
				<Grid container className={classes.root}>
					<Grid item xs={12} className={classes.assetName}>
						<Typography variant="h1">{asset.name}</Typography>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<FlexBetween>
								<Avatar
									src={asset.image}
									className={classes.assetIcon}
								/>
								<Typography
									variant="h2"
									className={classes.assetSymbol}
								>
									{asset.symbol.toUpperCase()}
								</Typography>
							</FlexBetween>
						</Grid>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<FlexBetween>
								<Typography
									variant="h2"
									className={classes.cardTitle}
								>
									Price:&nbsp;
								</Typography>
								<Typography
									variant="h2"
									className={classes.assetPrice}
								>
									$ {asset.current_price}
								</Typography>
							</FlexBetween>
						</Grid>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid container className={classes.cardItem}>
							<Typography
								variant="h2"
								className={classes.cardTitle}
							>
								Change price:&nbsp;
							</Typography>
							<Typography
								variant="h2"
								className={
									asset.price_change_percentage_24h >= 0
										? `${classes.assetPriceDetail} ${classes.trendUp}`
										: `${classes.assetPriceDetail} ${classes.trendDown}`
								}
							>
								$ {asset.price_change_24h.toFixed(3)}
							</Typography>
						</Grid>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<Typography
								variant="h2"
								className={classes.cardTitle}
							>
								Change price in %:&nbsp;
							</Typography>
							<Typography
								variant="h2"
								className={
									asset.price_change_percentage_24h >= 0
										? `${classes.assetPriceDetail} ${classes.trendUp}`
										: `${classes.assetPriceDetail} ${classes.trendDown}`
								}
							>
								$ {asset.price_change_percentage_24h.toFixed(2)}
							</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						justifyContent="center"
						className={classes.cardButtonBlock}
					>
						<Button
							color="success"
							variant="outlined"
							className={classes.cardButton}
							onClick={() => navigate(-1)}
						>
							Back
						</Button>
						<Button
							color="success"
							variant="outlined"
							className={classes.cardButton}
							onClick={handleCreateWatchlist}
						>
							Add to favorites
						</Button>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default SingleAssetPage;
