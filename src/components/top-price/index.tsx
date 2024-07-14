import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

const TopPriseComponent = (props: any) => {
	const { assets } = props;
	const classes = useStyles();

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Change (%)</TableCell>
							<TableCell>Change ($)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{assets.map((el: any) => (
							<TableRow
								key={el.name}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component="th" scope="row">
									{el.name}
								</TableCell>
								<TableCell align="left">
									{el.current_price}
								</TableCell>
								<TableCell
									align="left"
									className={
										el.price_change_24h > 0
											? `${classes.priceUp}`
											: `${classes.priceDown}`
									}
								>
									{el.price_change_24h.toFixed(2)}
								</TableCell>
								<TableCell
									align="left"
									className={
										el.price_change_percentage_24h > 0
											? `${classes.priceUp}`
											: `${classes.priceDown}`
									}
								>
									{el.price_change_percentage_24h.toFixed(2)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TopPriseComponent;