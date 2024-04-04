import {
  addTodo,
  incrementLikes,
  updateName,
  updateNewTodo,
} from './actions.js';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  home: {
    name: 'Romain',
    likes: 10,
  },
  todos: {
    items: [
      { id: 123, title: 'ABC', completed: false },
      { id: 456, title: 'DEF', completed: true },
      { id: 789, title: 'XYZ', completed: false },
    ],
    newTodo: 'ABC',
  },
};

export const homeReducer = createReducer(initialState.home, (builder) => {
  builder
    .addCase(incrementLikes, (state, action) => {
      // pour utiliser immer on ne retourne rien
      state.likes++;

      // pour ne pas utiliser immer (plus performant mais moins lisible) on retourne le
      // prochain state
      // return {
      //   ...state,
      //   likes: state.likes + 1,
      // };
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(updateNewTodo, (state, action) => {
      state.newTodo = action.payload;
    })
    .addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
    });
});
