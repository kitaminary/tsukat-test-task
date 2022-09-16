/// <reference types="react-scripts" />

export interface State {
  todos: TodoItem[],
  users: UserItem[],
}

export type TodoItem = {
  id: number,
  userId: number,
  completed: boolean,
  title: string,
  date: string,
};

export interface UserItem {
  id: number,
  name: string;
}
