import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { setPassword, setEmail, navigate } = props;
	return (
		<>
			<Typography variant="h2" fontFamily="Poppins" textAlign="center">
				Авторизация
			</Typography>
			<Typography
				variant="body1"
				fontFamily="Poppins"
				textAlign="center"
				marginBottom={3}
			>
				Введите ваш логин и пароль
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Введите ваш email "
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Введите ваш пароль "
				onChange={(e) => setPassword(e.target.value)}
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
				Войти
			</Button>
			<Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
				У вас нет аккаунта?
				<span
					className="incitingText"
					onClick={() => navigate('/register')}
				>
					Регистрация
				</span>
			</Typography>
		</>
	);
};

export default LoginPage;
