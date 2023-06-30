import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from "./thunks";

const initialState = {
    access_token: '',
    isLoading: false,
    error: '',
    profile: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const handleFulfilledRegister = (state, { payload }) => {
    state.isLoggedIn = true;
    state.access_token = payload.access_token;
    state.profile = payload.user;
    state.isLoading = false;
}

const handleFulfilledLogin = (state, {payload}) => {
    state.isLoading = false;
    state.access_token = payload.access_token;
    state.profile = payload.user;
    state.isLoggedIn = true;
}

// const handleFulfilledProfile = (state, { payload }) => {
//     state.isLoading = false;
//     state.profile = payload
        
// }

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    state.isLoading = false;
    state.error = payload ?? error.message;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerThunk.fulfilled, handleFulfilledRegister )
            .addCase(loginThunk.fulfilled, handleFulfilledLogin)
            // .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
        .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }
})

export const authReducer = authSlice.reducer