import TodoSpanValue from "./TodoSpanValue";

function TodoItem() {
  return (
    <div className="TodoItem" data-todo-id="123abc">
      <input type="checkbox" className="todosCompleted" checked={true} />
      <TodoSpanValue />
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
