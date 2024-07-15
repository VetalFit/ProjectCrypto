import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		searchIcon: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
		searchBlock: {
			display: 'flex',
			maxHeight: '45px',
			borderRadius: '8px',
			backgroundColor: `${colors.primary[600]}`,
			// marginLeft: '28px',
		},
		searchInput: {
			padding: '8px',
		},
	};
});
