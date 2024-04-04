import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Romain',
  likes: 10,
};

const homeSlice = createSlice({
  initialState,
  name: 'home',
  reducers: {
    incrementLikes(state, action) {
      state.likes++;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
  selectors: {
    likesSelector(state) {
      return state.likes;
    },
    nameSelector(state) {
      return state.name;
    },
  },
});

export const homeReducer = homeSlice.reducer;
export const { incrementLikes, updateName } = homeSlice.actions;
export const { likesSelector, nameSelector } = homeSlice.selectors;
