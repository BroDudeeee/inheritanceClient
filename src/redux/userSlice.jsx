import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart: (state) => {
      state.loading = true;
    },

    getUser: (state, action) => {
      state.user = action.payload;
    },
    getError: (state, action) => {
      state.error = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserStart, getUser, removeUser, getError } =
  userSlice.actions;

export default userSlice.reducer;
