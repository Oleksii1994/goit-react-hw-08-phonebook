import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import * as handlersForRegisterLogin from './handlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(logOut.fulfilled, handlersForRegisterLogin.handleLogOutFulfilled)

      .addCase(
        refreshUser.fulfilled,
        handlersForRegisterLogin.handleRefreshUserFullfilled
      )
      .addMatcher(
        isAnyOf(refreshUser.pending, refreshUser.rejected),
        handlersForRegisterLogin.toggleIsRefreshing
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handlersForRegisterLogin.handleRegisterLoginFulfilled
      );
  },
  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logOut.fulfilled](state) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  //   [refreshUser.pending](state) {
  //     state.isRefreshing = true;
  //   },
  //   [refreshUser.fulfilled](state, action) {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //     state.isRefreshing = false;
  //   },
  //   [refreshUser.rejected](state) {
  //     state.isRefreshing = false;
  //   },
  // },
});

export const authReducer = authSlice.reducer;
