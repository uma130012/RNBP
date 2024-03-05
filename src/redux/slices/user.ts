/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-04 18:24:10
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 10:24:20
 * @ Description:
 */

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
