import { createSlice } from '@reduxjs/toolkit';
import { getFavoritAssets } from '../../thunks/asstes';

const initialState: any = {
	assets: [],
	favoriteAssets: [],
};

export const assetsSlice = createSlice({
	name: 'assets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFavoritAssets.fulfilled, (state, action) => {
			state.favoriteAssets.push(action.payload);
		});
	},
});

export default assetsSlice.reducer;
