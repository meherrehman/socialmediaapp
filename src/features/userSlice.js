import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },

    reducers: {
        signUp: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { signUp } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;