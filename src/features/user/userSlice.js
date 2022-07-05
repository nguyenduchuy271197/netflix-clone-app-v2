import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = initialState.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
