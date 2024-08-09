import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getNews } from '../../store/thunks/news';
import { useStyles } from './styles';
import { Box, Grid, Link, Typography } from '@mui/material';

const NewsPage: FC = (): JSX.Element => {
	const [offset, setOffset] = useState(10);
	const [newsItem, setNewsItem] = useState([]);
	const dispatch = useAppDispatch();
	const news = useAppSelector((state) => state.news.news);
	const classes = useStyles();

	const addNewsItem = (newOffset: number) => {
		const newNews = news.slice(0, newOffset);
		setNewsItem(newNews);
		setOffset(newOffset);
	};

	useEffect(() => {
		addNewsItem(10);
	}, [news]);

	useEffect(() => {
		const handleScroll = (e: any) => {
			if (
				e.target.documentElement.scrollHeight -
					(e.target.documentElement.scrollTop + window.innerHeight) <
				100
			) {
				addNewsItem(offset + 10);
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [offset]);

	const renderNewsBlock = newsItem.map((el: any, i: number) => (
		<Grid container key={i} className={classes.newsBlock}>
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
