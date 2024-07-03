/* eslint-disable no-useless-escape */
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from './styles';
import AppButton from '../../app-button';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { navigate, register, errors } = props;
	const classes = useStyles();
	return (
		<>
			<Typography variant="h2" fontSize={32} textAlign="center">
				Sign in
			</Typography>
			<Typography variant="body1" textAlign="center" marginBottom={3}>
				Enter your email and password
			</Typography>
			<TextField
				error={!!errors.email}
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Enter email"
				helperText={errors.email ? `${errors.email.message}` : ''}
				{...register('email')}
			/>
			<TextField
				error={!!errors.password}
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Enter password"
				helperText={errors.password ? `${errors.password.message}` : ''}
				{...register('password')}
			/>
			<AppButton
				type="submit"
				variant="contained"
				sx={{
					fontFamily: 'Poppins',
					marginTop: 2,
					marginBottom: 2,
					width: '60%',
				}}
			>
				Sign in
			</AppButton>
			<Box margin={'20px 0'}>
				<Typography variant="body1">
					Don't have an account?
					<span
						className={classes.incitingText}
						onClick={() => navigate('/register')}
					>
						Sign up
					</span>
				</Typography>
			</Box>
		</>
	);
};

export default LoginPage;
