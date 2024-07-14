import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			flexGrow: 1,
			padding: '32px',
		},
		areaChart: {
			marginBottom: '32px',
		},
		topCardItem: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px',
			height: '185px',
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			// maxHeight: '200px',
		},
		assetName: {
			fontSize: '25px',
			fontWeight: 600,
			lineHeight: '30px',
			textTransform: 'capitalize',
			margin: '0',
		},
		itemDetails: {
			display: 'flex',
			height: '25%',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			// paddingBottom: '35px',
		},
		cardPrice: {
			fontSize: '32px',
			fontWeight: 700,
			lineHeight: '48px',
			margin: '0 0',
		},
		priseTrend: {
			width: '80px',
			display: 'flex',
			alignItems: 'center',
			padding: '2px',
			borderRadius: 4,
			// color: `${colors.secondary.DEFAULT}`,
			// fontWeight: 400,
			// fontSize: '18px',
			// lineHeight: '21px',
			marginBottom: '-75px',
		},
		trendUp: {
			backgroundColor: '#A9FFA7',
			color: '#037400',
		},
		trendDown: {
			backgroundColor: '#FFA7A7',
			color: '#740000',
		},
		lineChartBlock: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px',
			marginBottom: '32px',
			minHeight: '270px',
			border: `1px solid ${colors.borderColor}`,
			borderRadius: '12px',
		},
		topPriseRoot: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px',
			marginBottom: '32px',
			minHeight: '270px',
			border: `1px solid ${colors.borderColor}`,
			borderRadius: '12px',
			'& .MuiPaper-root': {
				backgroundColor: 'transparent !important',
				boxShadow: 'none !important',
				backgroundImage: 'none !important',
			},
		},
	};
});
