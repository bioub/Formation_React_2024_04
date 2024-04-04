import { combineReducers } from "redux";
import { ADD_TODO, INCREMENT_LIKES, UPDATE_NAME, UPDATE_NEW_TODO } from "./constants.js";

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

function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

function todosReducer(state = initialState.todos, action) {
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

export const reducer = combineReducers({
  home: homeReducer,
  todos: todosReducer
});

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