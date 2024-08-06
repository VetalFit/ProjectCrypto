import { createSlice } from '@reduxjs/toolkit';
// import { IAuthState } from '../../../common/types/auth';
import { getPublicUser, loginUser, registerUser } from '../../thunks/auth';
import { IAuthState } from '../../../common/types/auth';

const initialState: IAuthState = {
	user: [],
	isLogged: false,
	isLoading: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.isLogged = false;
			state.isLoading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
			state.isLoading = false;
		});
		builder.addCase(loginUser.rejected, (state) => {
			state.isLoading = false;
			state.isLogged = false;
		});
		builder.addCase(registerUser.pending, (state) => {
			state.isLoading = true;
			state.isLogged = false;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
			state.isLoading = false;
		});
		builder.addCase(registerUser.rejected, (state) => {
			state.isLoading = false;
			state.isLogged = false;
		});
		builder.addCase(getPublicUser.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export default authSlice.reducer;
