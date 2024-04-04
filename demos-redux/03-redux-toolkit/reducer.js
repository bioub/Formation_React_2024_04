import { combineReducers } from 'redux';
import {
  ADD_TODO,
  INCREMENT_LIKES,
  UPDATE_NAME,
  UPDATE_NEW_TODO,
} from './constants.js';
import { incrementLikes, updateName, updateNewTodo } from './actions.js';
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

// export function homeReducer(state = initialState.home, action) {
//   switch (action.type) {
//     case incrementLikes.type:
//       return {
//         ...state,
//         likes: state.likes + 1,
//       };
//     case updateName.type:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// }
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

export function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case UPDATE_NEW_TODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT_LIKES:
//       return {
//         ...state,
//         home: homeReducer(state.home, action),
//       };
//     case UPDATE_NAME:
//       return {
//         ...state,
//         home: homeReducer(state.home, action),
//       };
//     default:
//       return state;
//   }
// }
