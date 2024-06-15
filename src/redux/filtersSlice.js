import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: { name: '' },
  reducers: {
    valueFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { valueFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
