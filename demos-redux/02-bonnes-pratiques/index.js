import { legacy_createStore } from 'redux';
import { reducer } from './reducer.js';
import { incrementLikes, updateName } from './actions.js';
import { likesSelector, nameSelector } from './selectors.js';

const store = legacy_createStore(reducer);

// Dans un composant qui s'abonne au store
store.subscribe(() => {
  console.log('name', nameSelector(store.getState()));
  console.log('likes', likesSelector(store.getState()));
});


// Dans un composant qui écrit dans le store
store.dispatch(incrementLikes());
store.dispatch(incrementLikes());
store.dispatch(incrementLikes());

store.dispatch(updateName('Toto'));

store.dispatch({ type: 'UPDATE_NEW_TODO', payload: 'ABCDE' });
store.dispatch({ type: 'ADD_TODO', payload: { id: Math.random(), title: 'ABCDE', completed: false } });