import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  selectedLanguage: 'en',
};
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSelectedLanguage(state, action: PayloadAction<any>) {
      state.selectedLanguage = action.payload;
    },
  },
});

export const {setSelectedLanguage} = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
