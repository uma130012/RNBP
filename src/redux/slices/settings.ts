import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  selectedLanguage: 'bu',
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
export default settingsSlice.reducer;
