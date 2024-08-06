import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getNews } from '../../store/thunks/news';
import { useStyles } from './styles';
import { Box, Grid, Link, Typography } from '@mui/material';

const NewsPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const news = useAppSelector((state) => state.news.news);
	const classes = useStyles();

	const renderNewsBlock = news.map((el: any) => (
		<Grid container className={classes.newsBlock}>
			<Grid item xs={12} md={3}>
				<img src={el.imageurl} alt={el.category} />
			</Grid>
			<Grid item xs={12} md={9}>
				<Box className={classes.newsTitle}>
					<Typography variant="h3">{el.title}</Typography>
				</Box>
				<Box>
					<Typography variant="body1">{el.body}</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} md={12} className={classes.readMore}>
				<Typography variant="h4">
					<Link href={el.url}>Read more</Link>
				</Typography>
			</Grid>
		</Grid>
	));

	useEffect(() => {
		dispatch(getNews());
	}, [dispatch]);

	return (
		<Grid className={classes.root}>
			<Grid className={classes.blockTitle}>
				<Typography variant="h2">News</Typography>
			</Grid>
			<Grid>{renderNewsBlock}</Grid>
		</Grid>
	);
};

export default NewsPage;
