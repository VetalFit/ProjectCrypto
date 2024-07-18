import { createSlice } from '@reduxjs/toolkit';
import { getNews } from '../../thunks/news';

const initialState: any = {
	news: [],
};

export const newsListSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNews.fulfilled, (state, action) => {
			state.news = action.payload;
		});
	},
});

export default newsListSlice.reducer;
