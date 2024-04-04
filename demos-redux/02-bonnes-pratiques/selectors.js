export function likesSelector(state) {
  return state.home.likes;
}

export function nameSelector(state) {
  return state.home.name;
}

export function newTodoSelector(state) {
  return state.todos.newTodo;
}

export function itemsSelector(state) {
  return state.todos.items;
}

export function todosCompletedSelector(state) {
  const items = itemsSelector(state);

  return items.filter((item) => item.completed);
}