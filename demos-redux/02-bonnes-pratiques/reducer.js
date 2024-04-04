import { combineReducers } from "redux";
import { INCREMENT_LIKES, UPDATE_NAME } from "./constants.js";

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

export const reducer = combineReducers({
  home: homeReducer,
//  todos: todosReducer
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