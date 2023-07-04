// import { createSlice } from '@reduxjs/toolkit';
// import { getProfileThunk, loginThunk, logoutThunk, registerThunk } from "./thunks";

// const initialState = {
//     access_token: '',
//     isLoading: false,
//     error: '',
//     profile: null,
//     isLoggedIn: false,
//     isRefreshing: false,
// }

// const handleFulfilledRegister = (state, { payload }) => {
//     state.isLoggedIn = true;
//     state.access_token = payload.token;
//     state.profile = payload.user;
//     state.isLoading = false;
// }

// const handleFulfilledLogin = (state, {payload}) => {
//     state.isLoading = false;
//     console.log('payload', payload)
//     state.access_token = payload.token;
//     state.profile = payload.user;
//     state.isLoggedIn = true;
// }

// const handleFulfilledProfile = (state, { payload }) => {
//     state.isLoading = false;
//     state.profile = payload
//     state.isLoggedIn = true;
// }

// const handleFulfilledLogout = (state) => {
//     state.isLoading = false;
//     state.profile = null;
//     state.isLoggedIn = false;
//     state.access_token = null;
// }

// const handlePending = (state) => {
//     state.isLoading = true;
//     state.error = '';
// }

// const handleRejected = (state, { error, payload }) => {
//     state.isLoading = false;
//     state.error = payload ?? error.message;
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(registerThunk.fulfilled, handleFulfilledRegister )
//             .addCase(loginThunk.fulfilled, handleFulfilledLogin)
//             .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
//             .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
//             .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
//         .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
//     }
// })

// export const authReducer = authSlice.reducer

import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
