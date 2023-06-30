import { createAsyncThunk } from "@reduxjs/toolkit";
import {login, register } from "api/users";

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

export const loginThunk = createAsyncThunk('auth/login', async (body, {rejectWithValue, dispatch }) => {
    try {
        const data = await login(body)
        // dispatch(getProfileThunk())
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})