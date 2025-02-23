import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        userName: null,
        isLoggedIn: false,
    },
    reducers: {
        setUser: (state, action) => {
            const newUser = action.payload;
            if (newUser) {
                state.user = newUser;
                state.isLoggedIn = true;
            } else {
                state.user = null;
                state.isLoggedIn = false;
            }
        },
    },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
