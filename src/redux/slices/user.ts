import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<any>) {
      state.isLogin = action.payload;
    },
  },
});

export const {setLogin} = userSlice.actions;
export default userSlice.reducer;
