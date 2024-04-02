import { Todo } from './types';

type Props = Readonly<{
  todo: Todo;
}>;

function TodoSpanValue({ todo }: Props) {
  return <span className="TodoSpanValue">{todo.title}</span>;
}

export default TodoSpanValue;
