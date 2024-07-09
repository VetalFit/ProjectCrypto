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
		},
		itemDetails: {
			display: 'flex',
			height: '25%',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			paddingBottom: '20px',
		},
		cardPrice: {
			fontSize: '32px',
			fontWeight: 700,
			lineHeight: '48px',
			margin: '-40px 0',
		},
		cardCapitalize: {
			color: `${colors.secondary.DEFAULT}`,
			fontWeight: 400,
			fontSize: '18px',
			lineHeight: '21px',
			// marginBottom: '50px',
		},
	};
});
