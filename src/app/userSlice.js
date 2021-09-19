import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const getMe = createAsyncThunk('user/getMe', async(params, thunkApi) => {
  // ThunkApi.dispatch(...);
  const current = await userApi.getMe();
  return current;
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current : {},
    loading : false,
    error : ''
  },
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state) => {
      state.loading = true;
    },
    [getMe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
  }
});

const {reducer: userReducer} = userSlice;
export default userReducer;
