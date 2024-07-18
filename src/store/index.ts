import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slice/auth';
import assetsSlice from './slice/assets';
import watchlistSlice from './slice/watchlist';
import newsListSlice from './slice/news';

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		assets: assetsSlice,
		watchlist: watchlistSlice,
		news: newsListSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
