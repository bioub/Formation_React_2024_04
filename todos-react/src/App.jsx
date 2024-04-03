import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import { fetchTodos } from './api';

function App() {
  const [todos, setTodos] = useState([
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');

  const [editingId, setEditingId] = useState(789);

  useEffect(() => {
    fetchTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random(), title: newTodo, completed: false },
    ]);
    setNewTodo('');
  }

  function handleToggleClick(event) {
    // peut être utiliser use-immer pour simplifier :
    // setTodos((draft) => {
    //   for (const todo of draft) {
    //     draft.completed = event.target.checked
    //   }
    // });

    setTodos(
      todos.map((todo) => {
        if (todo.completed === event.target.checked) {
          return todo;
        } else {
          return {
            ...todo,
            completed: event.target.checked,
          };
        }
      }),
    );
  }

  function handleTodoDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function handleTodoUpdate(newTodo) {
    setTodos(todos.map((t) => t.id === newTodo.id ? newTodo : t));
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          className="todos-toggle-checked"
          onClick={handleToggleClick}
        />
        <input
          type="text"
          className="todos-new-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={todo.id === editingId}
            onTodoDelete={handleTodoDelete}
            onEditingIdChange={setEditingId}
            onTodoUpdate={handleTodoUpdate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
