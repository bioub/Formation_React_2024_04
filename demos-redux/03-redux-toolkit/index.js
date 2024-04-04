import { configureStore } from '@reduxjs/toolkit';
import { homeReducer, todosReducer } from './reducer.js';
import { addTodo, incrementLikes, updateName, updateNewTodo } from './actions.js';
import { likesSelector, nameSelector, todosCompletedSelector } from './selectors.js';

const store = configureStore({
  reducer: {
    home: homeReducer,
    todos: todosReducer,
  }
});

// Dans un composant qui s'abonne au store
store.subscribe(() => {
  console.log('name', nameSelector(store.getState()));
  console.log('likes', likesSelector(store.getState()));
  console.log('todos completed', todosCompletedSelector(store.getState()));
});


// Dans un composant qui écrit dans le store
store.dispatch(incrementLikes());
store.dispatch(incrementLikes());
store.dispatch(incrementLikes());

store.dispatch(updateName('Toto'));

store.dispatch(updateNewTodo('ABCDE'));


// store.dispatch(addTodo({ id: Math.random(), title: 'ABCDE', completed: false }));
store.dispatch(addTodo('ABCDE'));