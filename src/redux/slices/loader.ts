import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
  },
});

export const {setLoading} = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;
