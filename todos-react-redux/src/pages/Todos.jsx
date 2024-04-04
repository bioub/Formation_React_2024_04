import { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';
import { fetchTodos } from '../api';

function Todos() {
  /*
  Exercice react-redux
  Utiliser newTodoSelector et itemsSelector pour recréer les variables newTodo et todos
  Utitiser dispatch pour écrire dans le store à la saisie dans le champs (updateNewTodo)
  et au submit du form (addTodo)
  */

  const [todos, setTodos] = useState([
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');

  const [editingId, setEditingId] = useState(789);

  // useEffect(() => {
  //   fetchTodos().then((todos) => {
  //     setTodos(todos);
  //   });
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random(), title: newTodo, completed: false },
    ]);
    setNewTodo('');
  }

  // function handleToggleClick(event) {
  //   // peut être utiliser use-immer pour simplifier :
  //   // setTodos((draft) => {
  //   //   for (const todo of draft) {
  //   //     draft.completed = event.target.checked
  //   //   }
  //   // });

  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.completed === event.target.checked) {
  //         return todo;
  //       } else {
  //         return {
  //           ...todo,
  //           completed: event.target.checked,
  //         };
  //       }
  //     }),
  //   );
  // }

  // function handleTodoDelete(todo) {
  //   // .filter pour garder tous les éléments sauf celui reçu en param
  //   setTodos(todos.filter((t) => t.id !== todo.id));
  // }

  // function handleTodoUpdate(newTodo) {
  //   setTodos(todos.map((t) => t.id === newTodo.id ? newTodo : t));
  // }

  return (
    <div className="Todos">
      <form className="todos-form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          className="todos-toggle-checked"
          
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
            onEditingIdChange={setEditingId}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
