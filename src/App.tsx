/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import classNames from 'classnames';
import { setTodos, setUsers } from './store/actions';
import TodoList from './components/TodoList/TodoList';
import { getTodosFromServer, getUsersFromServer } from './api/api';
import { getTodos, getUsers } from './store/selectors';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { TodoItem } from './react-app-env';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const users = useSelector(getUsers);
  const [name, setName] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [formAddToggler, setFormAddToggler] = useState(false);

  const date = new Date().toUTCString().toString();

  const getAllTodos = async () => {
    const todosFromServer = await getTodosFromServer();

    dispatch(
      setTodos(
        todosFromServer.map((todoitem: TodoItem) => {
          return { ...todoitem, date };
        })
      )
    );
  };

  const getAllUsers = async () => {
    const usersFromServer = await getUsersFromServer();

    dispatch(setUsers(usersFromServer));
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const datetime = new Date().toUTCString().toString();
    const userInside = users.find((user) => user.name === name);
    const newUser = { name, id: users.length + 1 };

    if (userInside !== undefined) {
      dispatch(
        setTodos([
          ...todos,
          {
            title,
            userId: userInside.id,
            id: todos.length + 1,
            date: datetime,
            completed,
          },
        ])
      );
    } else {
      dispatch(setUsers([...users, newUser]));
      dispatch(
        setTodos([
          ...todos,
          {
            title,
            userId: newUser.id,
            id: todos.length + 1,
            date: datetime,
            completed,
          },
        ])
      );
    }

    setCompleted(false);
    setTitle('');
    setName('');
    setFormAddToggler(false);
  };

  useEffect(() => {
    getAllTodos();
    getAllUsers();
  }, []);

  return (
    <main className="todos">
      <div className="is-flex is-four-fifths column is-justify-content-space-between is-align-content-space-between">
        <h1 className="title is-3 m-3">Tsukat test task(todolist)</h1>{' '}
        <form
          onSubmit={(event) => addTodo(event)}
          className={classNames('todos__form-add', {
            'todos__form-add--unactive': formAddToggler === false,
          })}
        >
          <div className="is-flex is-justify-content-space-between">
            <h2>Create new todo</h2>{' '}
            <button
              className="todos__form-add__close"
              type="button"
              onClick={() => setFormAddToggler(false)}
            >
              Close
            </button>
          </div>
          <label>
            {' '}
            Enter the name
            <input
              className="input is-info"
              type="text"
              placeholder="Enter the name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label>
            {' '}
            Enter the todo
            <input
              className="input is-info"
              type="text"
              placeholder="Enter the todo"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />{' '}
            Completed
          </label>
          <button
            className="todos__form-add__submit button is-success is-light"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="todos__add-button__box m-3">
          <p>
            <b>Add todo &#8658; </b>
          </p>
          <button
            className="todos__add m-1"
            type="button"
            onClick={() => setFormAddToggler(!formAddToggler)}
          >
            add
          </button>
        </div>
      </div>
      <TodoList />
    </main>
  );
};

export default App;
