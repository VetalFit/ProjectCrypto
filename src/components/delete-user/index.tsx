import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import { useStyles } from './styles';
import { tokens } from '../../theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hook';
import { deleteUser } from '../../store/thunks/auth';

const DeleteUserComponent = () => {
	const [checked, setChecked] = useState(false);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleDelete = () => {
		dispatch(deleteUser());
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('name');
		navigate('/login');
	};

	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.tabHeading}>
				<Typography variant="h2">Delete account</Typography>
			</Grid>
			<Grid className={classes.alertMessage} item>
				<Typography variant="body1">
					Dear user, delete your account, you deleted full personal
					information. After deleted all your information will be
					unavaliable
				</Typography>
			</Grid>
			<Grid item className={classes.checkBoxLabel}>
				<FormGroup>
					<FormControlLabel
						sx={{
							justifyContent: 'center',
						}}
						control={
							<Checkbox
								checked={checked}
								onChange={() => setChecked(!checked)}
								sx={{
									color: colors.blue,
									'&.Mui-checked': {
										color: colors.blue,
									},
								}}
							/>
						}
						label="I agree"
					/>
				</FormGroup>
			</Grid>
			<Grid item className={classes.buttonBlock}>
				<Button
					onClick={handleDelete}
					color="warning"
					variant="outlined"
					disabled={!checked}
				>
					Delete account
				</Button>
			</Grid>
		</Grid>
	);
};

export default DeleteUserComponent;
