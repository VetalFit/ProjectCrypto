import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceAuth } from '../../../utils/axios';

export const getWatchlistElements = createAsyncThunk(
	'wathclist/get-elements',
	async (_, { rejectWithValue }) => {
		try {
			const userAssets = await instanceAuth.get('watchlist/get-elements');
			return userAssets.data;
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);
