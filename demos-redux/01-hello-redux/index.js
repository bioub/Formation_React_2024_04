import { legacy_createStore } from 'redux';

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

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        home: {
          ...state.home,
          likes: state.home.likes + 1,
        },
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        home: {
          ...state.home,
          name: action.newName,
        },
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT_LIKES' });
store.dispatch({ type: 'INCREMENT_LIKES' });
store.dispatch({ type: 'INCREMENT_LIKES' });

store.dispatch({ type: 'UPDATE_NAME', newName: 'Toto' });


store.dispatch({ type: 'UPDATE_NEW_TODO', payload: 'ABCDE' });
store.dispatch({ type: 'ADD_TODO', payload: { id: Math.random(), title: 'ABCDE', completed: false } });