import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { Box, Grid, TextField } from '@mui/material';
import { useStyles } from './styles';
import AppLoadingButton from '../loading-button';
import { updateUserInfo } from '../../store/thunks/auth';

const PersonalInfoComponent: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const [name, setName] = useState('');
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const { user } = useAppSelector((state) => state.auth.user);
	const classes = useStyles();

	useEffect(() => {
		if (user) {
			setName(user.firstName);
			setUserName(user.userName);
			setEmail(user.email);
		}
	}, [user]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const data = {
			firstName: name,
			userName: username,
			email: email,
		};
		dispatch(updateUserInfo(data));
	};

	return (
		<Grid
			component="form"
			noValidate
			autoComplete="off"
			className={classes.root}
			onSubmit={handleSubmit}
		>
			<Box className={classes.formWrapper}>
				<TextField
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Name"
					variant="outlined"
					className={classes.inputField}
				/>
				<TextField
					type="text"
					value={username}
					onChange={(e) => setUserName(e.target.value)}
					label="Username"
					variant="outlined"
					className={classes.inputField}
				/>
				<TextField
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					variant="outlined"
					className={classes.inputField}
				/>
				<Box className={classes.buttonBlock}>
					<AppLoadingButton type="submit">Save</AppLoadingButton>
				</Box>
			</Box>
		</Grid>
	);
};

export default PersonalInfoComponent;
