import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		brand: {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: '30px 15px',
			cursor: 'pointer',
		},
		brandTitle: {
			color: `${
				theme.palette.mode === 'dark'
					? colors.white.DEFAULT
					: colors.black.DEFAULT
			}`,
		},
		navBlock: {
			borderBottom: `1px solid ${colors.borderColor}`,
			width: '100%',
		},
		navList: {
			marginBottom: '55px',
		},
		navItem: {
			margit: '10px',
			'&:hover': {
				backgroundColor: '#1900D5 !important',
				borderRadius: '4px !important',
				color: '#fff !important',
				'& .MuiSvgIcon-root': {
					color: `${colors.white.DEFAULT} !important`,
				},
			},
		},
		navBottom: {
			width: '100%',
		},
		active: {
			backgroundColor: '#1900D5 !important',
			color: '#fff !important',
			borderRadius: '4px !important',
		},
	};
});
