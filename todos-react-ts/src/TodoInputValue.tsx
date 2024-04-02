import { Todo } from './types';

type Props = Readonly<{
  todo: Todo;
}>;

function TodoInputValue({ todo }: Props) {
  return <input className="TodoInputValue" value={todo.title} />;
}

export default TodoInputValue;
