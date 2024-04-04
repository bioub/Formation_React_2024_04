import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { homeReducer, todosReducer } from './store/reducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
    todos: todosReducer,
  }
});

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
