import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, IRegisterData } from '../../../common/types/auth';
import { instance } from '../../../utils/axios';

export const loginUser = createAsyncThunk(
	'auth/login',
	async (data: ILoginData, { rejectWithValue }) => {
		try {
			const user = await instance.post('auth/login', data);
			sessionStorage.setItem('token', user.data.token);
			sessionStorage.setItem('name', user.data.user.firstName);
			return user.data;
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);

export const registerUser = createAsyncThunk(
	'auth/register',
	async (data: IRegisterData, { rejectWithValue }) => {
		try {
			const user = await instance.post('auth/register', data);
			sessionStorage.setItem('token', user.data.token);
			sessionStorage.setItem('name', user.data.user.firstName);
			return user.data;
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);
