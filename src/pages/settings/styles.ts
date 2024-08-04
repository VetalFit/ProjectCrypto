import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			padding: '32px',
		},
		tabsWrapper: {
			borderBottom: `1px solid ${colors.borderColor}`,
		},
	};
});
