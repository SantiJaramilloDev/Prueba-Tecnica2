import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    user: ''
  },
  reducers: {
    loginUserRedux: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.user = action.payload.user;
    },
    logoutUserRedux: (state) => {
      state.isLogin = false;
      state.user = '';
    }
  }
})

export const { loginUserRedux, logoutUserRedux } = loginSlice.actions;
export default loginSlice.reducer;