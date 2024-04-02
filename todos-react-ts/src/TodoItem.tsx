import TodoInputValue from './TodoInputValue';
import TodoSpanValue from './TodoSpanValue';
import { Todo } from './types';

type Props = Readonly<{
  todo: Todo;
  isEditing?: boolean;
}>;

function TodoItem({ todo, isEditing = false }: Props) {
  return (
    <div className="TodoItem" data-todo-id={todo.id}>
      <input
        type="checkbox"
        className="todosCompleted"
        checked={todo.completed}
      />
      {isEditing ? (
        <TodoInputValue todo={todo} />
      ) : (
        <TodoSpanValue todo={todo} />
      )}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
