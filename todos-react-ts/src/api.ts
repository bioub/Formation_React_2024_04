import { Todo } from "./types";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data
    .slice(0, 20);
}