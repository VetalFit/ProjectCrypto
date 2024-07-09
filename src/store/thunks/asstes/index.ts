import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../../../utils/axios';

export const getFavoriteAssets = createAsyncThunk(
	'coins/markets',
	async (data: string, { rejectWithValue }) => {
		try {
			const asstes = await coinGeckoApi.get(
				`/coins/${data}/market_chart?vs_currency=usd&days=90`
			);
			return { name: data, data: asstes.data };
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);
