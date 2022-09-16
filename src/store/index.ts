/* eslint-disable import/extensions */
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { setTodos, setUsers } from './actions';
// eslint-disable-next-line import/no-unresolved
import { State } from '../react-app-env';

const initialState: State = {
  todos: [],
  users: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setTodos, (state, action) => {
    state.todos = action.payload;
  });
  builder.addCase(setUsers, (state, action) => {
    state.users = action.payload;
  });
});

export const store = configureStore({ reducer });
