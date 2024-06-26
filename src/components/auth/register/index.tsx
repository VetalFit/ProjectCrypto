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
				Регистрация
			</Typography>
			<Typography
				variant="body1"
				fontFamily="Poppins"
				textAlign="center"
				marginBottom={3}
			>
				Введите данные для регистрации
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Имя"
				variant="outlined"
				placeholder="Введите ваш имя"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Username"
				variant="outlined"
				placeholder="Введите ваш username"
				onChange={(e) => setUserName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Введите ваш email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Введите ваш пароль"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Повторите ваш пароль"
				onChange={(e) => setRepeatPassword(e.target.value)}
			/>
			<Button
				variant="contained"
				type="submit"
				sx={{
					fontFamily: 'Popins',
					marginTop: 2,
					width: '60%',
					marginBottom: 2,
				}}
			>
				Регистрация
			</Button>
			<Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
				У вас есть аккаунта?
				<span
					className="incitingText"
					onClick={() => navigate('/login')}
				>
					Авторизация
				</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
