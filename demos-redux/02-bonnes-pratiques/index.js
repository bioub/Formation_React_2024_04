import { legacy_createStore } from 'redux';
import { reducer } from './reducer.js';
import { addTodo, incrementLikes, updateName } from './actions.js';
import { likesSelector, nameSelector, todosCompletedSelector } from './selectors.js';

const store = legacy_createStore(reducer);

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

store.dispatch(updateName('ABCDE'));


// store.dispatch(addTodo({ id: Math.random(), title: 'ABCDE', completed: false }));
store.dispatch(addTodo('ABCDE'));