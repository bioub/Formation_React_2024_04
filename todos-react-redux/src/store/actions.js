import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos } from '../api';

export const incrementLikes = createAction('INCREMENT_LIKES');
export const updateName = createAction('UPDATE_NAME');
export const updateNewTodo = createAction('UPDATE_NEW_TODO');

export const addTodo = createAction('ADD_TODO', (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});

// en interne utilisera redux-thunk
export const getTodos = createAsyncThunk('GET_TODOS', () => {
  return fetchTodos();
});
