import { createAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { TodoItem, UserItem } from '../react-app-env';
import { ActionTypes } from './ActionTypes';

export const setTodos = createAction<TodoItem[]>(ActionTypes.SET_TODOS);
export const setUsers = createAction<UserItem[]>(ActionTypes.SET_USERS);
