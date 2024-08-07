import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi, instanceAuth } from '../../../utils/axios';

export const getFavoriteAssets = createAsyncThunk(
	'coins/markets',
	async (data: string, { rejectWithValue }) => {
		try {
			const asstes = await coinGeckoApi.get(
				`/coins/${data}/market_chart?vs_currency=usd&days=90`
			);
			const singleAsset = await coinGeckoApi.get(
				`coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
			);
			return {
				name: data,
				priceChartData: asstes.data.prices.slice(
					asstes.data.prices.length - 60,
					asstes.data.prices.length - 1
				),
				singleAsset: singleAsset.data,
			};
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);

export const getTopPriceData = createAsyncThunk(
	'coins/markets/topPrise',
	async (_, { rejectWithValue }) => {
		try {
			const assets = await coinGeckoApi.get(
				`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
			);
			return assets.data;
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);

export const createWatchList = createAsyncThunk(
	'watchlist/create',
	async (data: { name: string; assetId: string }, { rejectWithValue }) => {
		try {
			return instanceAuth.post('watchlist/create', data);
		} catch (e: any) {
			if (e.response && e.response.data.message) {
				return rejectWithValue(e.response.data.message);
			} else {
				return rejectWithValue(e.message);
			}
		}
	}
);
