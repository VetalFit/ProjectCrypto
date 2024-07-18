import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			padding: '32px',
			'& a': {
				textDecoration: 'none',
				color: `${
					theme.palette.mode === 'light'
						? colors.black.DEFAULT
						: colors.white.DEFAULT
				}`,
			},
		},
		blockTitle: {
			textAlign: 'center',
			marginBottom: '32px',
		},
		newsBlock: {
			padding: '20px 16px',
			marginBottom: '32px',
			minHeight: 270,
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			'& .MuiPaper-root': {
				backgroundColor: 'transparent !important',
				boxShadow: 'none !important',
				backgroundImage: 'none !important',
			},
		},
		newsTitle: {
			marginBottom: '30px',
		},
		readMore: {
			textAlign: 'center',
		},
	};
});
