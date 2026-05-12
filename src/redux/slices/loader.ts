import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface LoaderState {
  isLoading: boolean;
  loadingCount: number;
}
const initialState: LoaderState = {
  isLoading: false,
  loadingCount: 0,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
    incrementLoading: state => {
      state.loadingCount += 1;
    },
    decrementLoading: state => {
      state.loadingCount = Math.max(0, state.loadingCount - 1); // Avoid negative
    },
  },
});

export const {setLoading, incrementLoading, decrementLoading} =
  loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;
