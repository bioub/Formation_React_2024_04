function TodoSpanValue({ todo }) {
  return (
    <span className="TodoSpanValue"> {/* <-- traiter le double-clic ici */}
      {todo.title}
    </span>
  );
}

export default TodoSpanValue;
