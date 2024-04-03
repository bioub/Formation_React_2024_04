function TodoSpanValue({ todo, onEditingIdChange }) {
  return (
    <span className="TodoSpanValue" onDoubleClick={() => onEditingIdChange(todo.id)}> {/* <-- traiter le double-clic ici */}
      {todo.title}
    </span>
  );
}

export default TodoSpanValue;
