// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.uid = action.payload;
        },
        logoutSuccess: (state) => {
            state.uid = null;
        },
    },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
