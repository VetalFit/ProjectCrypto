import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			position: 'static',
			background: colors.primary.DEFAULT,
			borderBottom: `1px solid ${colors.borderColor}`,
			boxShadow: 'none',
		},
		toolbar: {
			justifyContent: 'space-between',
			padding: '20px',
		},
		searchIcon: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
		menuIcon: {
			marginRight: '10px',
			cursor: 'pointer',
		},
		iconBlock: {
			paddingRight: '37px',
			borderRight: `1px solid ${colors.borderColor}`,
			display: 'flex',
		},
		themeIcon: {
			marginRight: '20px',
		},
		searchBlock: {
			display: 'flex',
			maxHeight: '45px',
			borderRadius: '8px',
			backgroundColor: `${colors.primary[600]}`,
			marginLeft: '28px',
		},
		searchInput: {
			padding: '8px',
		},
	};
});
