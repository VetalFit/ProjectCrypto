/* eslint-disable no-useless-escape */
import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { /*  setPassword, setEmail, */ navigate, register, errors } = props;
	return (
		<>
			<Typography variant="h2" fontFamily="Poppins" textAlign="center">
				Sign in
			</Typography>
			<Typography
				variant="body1"
				fontFamily="Poppins"
				textAlign="center"
				marginBottom={3}
			>
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
				// onChange={(e) => setEmail(e.target.value)}
				{...register('email', {
					required: `This is required field`,
					pattern:
						/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				})}
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
				// onChange={(e) => setPassword(e.target.value)}
				{...register('password', {
					required: `This is required field`,
					minLength: 6,
				})}
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
				Sign in
			</Button>
			<Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
				Don't have an account?
				<span
					className="incitingText"
					onClick={() => navigate('/register')}
				>
					Sign up
				</span>
			</Typography>
		</>
	);
};

export default LoginPage;
