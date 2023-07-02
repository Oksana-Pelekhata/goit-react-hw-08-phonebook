import { createAsyncThunk } from "@reduxjs/toolkit";
import {getProfile, login, logout, register } from "api/users";

// export const getProfileThunk = createAsyncThunk('auth/profile', () => getProfile())

export const registerThunk = createAsyncThunk(
    'auth/register', 
   async (body, {rejectWithValue}) => {
    try {
        const data = await register(body)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
}
)

export const loginThunk = createAsyncThunk('auth/login', async (body, {rejectWithValue }) => {
    try {
        const data = await login(body)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
     try {
        const data = await logout()
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const getProfileThunk = createAsyncThunk('auth/profile', () =>
	getProfile()
)