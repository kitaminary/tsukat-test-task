const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getTodosFromServer = async () => {
  const todosFromServer = await fetch(`${BASE_URL}/todos`);

  return todosFromServer.json();
};

export const getUsersFromServer = async () => {
  const usersFromServer = await fetch(`${BASE_URL}/users`);

  return usersFromServer.json();
};
