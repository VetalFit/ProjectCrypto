import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '32px 24px',
			backgroundColor: colors.primary.DEFAULT,
			maxHeight: '95px',
			borderBottom: `1px solid ${colors.borderColor}`,
		},
		searchIcon: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
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
			borderRadius: '8px',
			backgroundColor: `${colors.primary[600]}`,
			marginLeft: '28px',
		},
		searchInput: {
			padding: '8px',
		},
	};
});
