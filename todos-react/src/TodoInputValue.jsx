import { useEffect } from "react";

function TodoInputValue({ todo, onEditingIdChange, onTodoUpdate }) {

  useEffect(() => {
    function handleWindowClick(event) {
      if (!event.target.classList.contains('TodoInputValue')) {
        onEditingIdChange(0);
      }
    }

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    }
  }, [onEditingIdChange]);

  function handleChange(event) {
    onTodoUpdate({ ...todo, title: event.target.value });
  }

  function handleKeyDown(event) {
    if (event.code === 'Enter') {
      onEditingIdChange(0);
    }
  }

  return (
    <input className="TodoInputValue" value={todo.title} onChange={handleChange} onKeyDown={handleKeyDown} />
  );
}

export default TodoInputValue;
