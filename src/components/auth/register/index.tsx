import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (
	props: IPropsRegister
): JSX.Element => {
	const {
		setEmail,
		setPassword,
		setRepeatPassword,
		setFirstName,
		setUserName,
		navigate,
	} = props;
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
				fullWidth={true}
				margin="normal"
				label="Name"
				variant="outlined"
				placeholder="Enter name"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Username"
				variant="outlined"
				placeholder="Enter username"
				onChange={(e) => setUserName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Enter email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Enter password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Repeat password"
				onChange={(e) => setRepeatPassword(e.target.value)}
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
