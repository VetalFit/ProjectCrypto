import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = ({
	navigate,
	register,
	errors,
}): JSX.Element => {
	return (
		<>
			<Typography variant="h2" fontFamily="Poppins" textAlign="center">
				Sign up
			</Typography>
			<Typography
				variant="body1"
				fontFamily="Poppins"
				textAlign="center"
				marginBottom={3}
			>
				Enter registration details
			</Typography>
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
				helperText={errors.username ? `${errors.username.message}` : ''}
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
				helperText={errors.password ? `${errors.password.message}` : ''}
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
			<Button
				variant="contained"
				type="submit"
				sx={{
					fontFamily: 'Poppins',
					marginTop: 2,
					width: '60%',
					marginBottom: 2,
				}}
			>
				Create account
			</Button>
			<Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
				Do you have an account?
				<span
					className="incitingText"
					onClick={() => navigate('/login')}
				>
					Sign in
				</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
