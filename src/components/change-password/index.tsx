import { Box, Grid, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { useStyles } from './styles';
import AppLoadingButton from '../loading-button';
import { useAppDispatch } from '../../utils/hook';
import { updatePassword } from '../../store/thunks/auth';

const ChangePasswordComponent: FC = (): JSX.Element => {
	const [newPassword, setNewPassword] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const classes = useStyles();
	const dispatch = useAppDispatch();

	const handleChangePassword = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const data = {
			oldPassword,
			newPassword,
		};

		dispatch(updatePassword(data));
	};

	return (
		<Grid
			component="form"
			noValidate
			autoComplete="off"
			className={classes.root}
			onSubmit={handleChangePassword}
		>
			<Box className={classes.formWrapper}>
				<TextField
					type="text"
					className={classes.inputField}
					value={oldPassword}
					onChange={(e) => setOldPassword(e.target.value)}
					variant="outlined"
					label="Old password"
				/>
				<TextField
					type="text"
					className={classes.inputField}
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					variant="outlined"
					label="New password"
				/>
				<Box className={classes.buttonBlock}>
					<AppLoadingButton type="submit">
						Change Password
					</AppLoadingButton>
				</Box>
			</Box>
		</Grid>
	);
};

export default ChangePasswordComponent;
