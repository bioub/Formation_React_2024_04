import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ],
  newTodo: 'ABC',
};

const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    updateNewTodo(state, action) {
      state.newTodo = action.payload;
    },
  },
  selectors: {
    itemsSelector(state) {
      return state.items;
    },
    newTodoSelector(state) {
      return state.newTodo;
    },
    todosCompletedSelector(state) {
      return state.items.filter((item) => item.completed);
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, updateNewTodo } = todosSlice.actions;
export const { itemsSelector, newTodoSelector, todosCompletedSelector } =
  todosSlice.selectors;
