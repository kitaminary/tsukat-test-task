/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './Todo.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { TodoItem, UserItem } from '../../react-app-env';
import { getTodos, getUsers } from '../../store/selectors';
import { setTodos } from '../../store/actions';

interface Props {
  todo: TodoItem;
}

const Todo: React.FC<Props> = ({ todo }) => {
  const users: UserItem[] = useSelector(getUsers);
  const todos: TodoItem[] = useSelector(getTodos);
  const dispatch = useDispatch();
  const [formEditToggler, setFormEditToggler] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const [checked, setCheked] = useState<boolean>(todo.completed);
  const date = new Date().toUTCString().toString();

  const editFormSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    todoitem: TodoItem
  ) => {
    event.preventDefault();

    dispatch(
      setTodos(
        todos.map((todoItem: TodoItem) => {
          if (todoItem.id === todoitem.id) {
            return {
              ...todo,
              title: todoTitle,
              date,
            };
          }

          return todoItem;
        })
      )
    );

    setFormEditToggler(false);
  };

  const deleteTodo = (id: number) => {
    dispatch(
      setTodos(todos.filter((todoitem: TodoItem) => todoitem.id !== id))
    );
  };

  const completedTodo = (id: number) => {
    dispatch(
      setTodos(
        todos.map((todoitem: TodoItem) => {
          if (todoitem.id === id) {
            return {
              ...todo,
              completed: checked,
              date,
            };
          }

          return todoitem;
        })
      )
    );
  };

  useEffect(() => {}, []);

  return (
    <li className="todos__item column card-content m-2 box is-one-quarter">
      <form
        className={classNames('todos__form-edit', {
          'todos__form-edit--unactive': formEditToggler === false,
        })}
        onSubmit={(event) => editFormSubmit(event, todo)}
      >
        <div>
          <label htmlFor="title">
            <p className="p-2">Change the title</p>
            <input
              className="input is-primary"
              id="title"
              type="text"
              value={todoTitle}
              onChange={(event) => setTodoTitle(event.target.value)}
            />
          </label>
          <button
            className="todos__form-edit__submit button is-success is-light"
            type="submit"
          >
            Submit
          </button>
        </div>
        <button
          onClick={() => setFormEditToggler(!formEditToggler)}
          className="todos__form-edit__close"
          type="button"
        >
          Close
        </button>
      </form>
      <div className="is-flex is-flex-direction-column is-justify-content-space-between">
        <p>
          <b>{users.find((user) => user.id === todo.userId)?.name}</b>
        </p>
        <p className="todos__title pb-4">{todo.title}</p>
        <div>
          {' '}
          <input
            className="checkbox"
            type="checkbox"
            name="completed"
            defaultChecked={checked}
            id={`${todo.id}`}
            onClick={() => {
              setCheked(!checked);
              completedTodo(todo.id);
            }}
          />
          <label htmlFor={`${todo.id}`}> Completed</label>
        </div>
        <p className="subtitle is-7">
          <i>{todo.date}</i>
        </p>
      </div>

      <div className="todos__button-box">
        <button
          className="todos__edit"
          type="button"
          onClick={() => {
            setFormEditToggler(true);
          }}
        >
          Edit
        </button>
        <button
          className="todos__delete"
          type="button"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
