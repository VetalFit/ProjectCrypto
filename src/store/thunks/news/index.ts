import { createAsyncThunk } from '@reduxjs/toolkit';
import { newsInstance } from '../../../utils/axios';

export const getNews = createAsyncThunk(
	'get-news',
	async (_, { rejectWithValue }) => {
		try {
			const news = await newsInstance('news/?lang=EN');
			return news.data.Data;
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);
