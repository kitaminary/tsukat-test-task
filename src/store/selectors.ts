/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { State } from '../react-app-env';

export const getTodos = (initialState: State) => initialState.todos;
export const getUsers = (initialState: State) => initialState.users;
