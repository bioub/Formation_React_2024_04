import TodoInputValue from "./TodoInputValue";
import TodoSpanValue from "./TodoSpanValue";

function TodoItem({ todo, isEditing, onTodoDelete, onEditingIdChange, onTodoUpdate }) {
  function handleChange(event) {
    onTodoUpdate({ ...todo, completed: event.target.checked });
  }

  return (
    <div className="TodoItem" data-todo-id={todo.id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} onChange={handleChange} />
      {isEditing ?  <TodoInputValue todo={todo} onTodoUpdate={onTodoUpdate} onEditingIdChange={onEditingIdChange} /> : <TodoSpanValue todo={todo} onEditingIdChange={onEditingIdChange} />}
      <button className="todosDeleteBtn" onClick={() => onTodoDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
