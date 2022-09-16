import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../store/selectors';
import Todo from '../Todo/Todo';

const TodoList: React.FC = () => {
  const todos = useSelector(getTodos);

  useEffect(() => {
  }, [todos]);

  return (
    <ul className="todos__list is-flex is-flex-wrap-wrap is-justify-content-center">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
