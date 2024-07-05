import React from 'react';
import { Typography, TextField, Box } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';
import { useStyles } from './styles';
import AppLoadingButton from '../../loading-button';

const RegisterPage: React.FC<IPropsRegister> = ({
	navigate,
	register,
	errors,
	loading,
}): JSX.Element => {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h2" textAlign="center" fontSize={32}>
				Sign up
			</Typography>
			<Typography variant="body1" textAlign="center" marginBottom={3}>
				Enter registration details
			</Typography>
			<Box marginBottom={2}>
				<TextField
					error={!!errors.name}
					fullWidth={true}
					margin="normal"
					label="Name"
					variant="outlined"
					placeholder="Enter name"
					helperText={errors.name ? `${errors.name.message}` : ''}
					{...register('name')}
				/>
				<TextField
					error={!!errors.username}
					fullWidth={true}
					margin="normal"
					label="Username"
					variant="outlined"
					placeholder="Enter username"
					helperText={
						errors.username ? `${errors.username.message}` : ''
					}
					{...register('username')}
				/>
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
					helperText={
						errors.password ? `${errors.password.message}` : ''
					}
					{...register('password')}
				/>
				<TextField
					error={!!errors.confirmPassword}
					fullWidth={true}
					type="password"
					margin="normal"
					label="Password"
					variant="outlined"
					placeholder="Repeat confirm password"
					helperText={
						errors.confirmPassword
							? `${errors.confirmPassword.message}`
							: ''
					}
					{...register('confirmPassword')}
				/>
			</Box>
			<AppLoadingButton
				loading={loading}
				variant="contained"
				type="submit"
			>
				Create account
			</AppLoadingButton>
			<Box margin={'20px 0'}>
				<Typography variant="body1">
					Do you have an account?
					<span
						className={classes.incitingText}
						onClick={() => navigate('/login')}
					>
						Sign in
					</span>
				</Typography>
			</Box>
		</>
	);
};

export default RegisterPage;
