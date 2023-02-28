import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Active({ url }) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get(`${url}/todos`).then((response) => {
      setTodos(response.data);
    });
  }, [url]);

  const deleteHandler = (id) => {
    axios.delete(`${url}/todos/${id}`).then((response) => {
      setTodos(response.data);
    });
  };

  if (todos === null) {
    return <p className="p-3">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-center m-3">Active Task</h2>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="m-3 p-3 border rounded flex justify-between items-center"
          >
            <h2>{todo.title}</h2>
            <FontAwesomeIcon
              icon={faDeleteLeft}
              className="ml-3"
              onClick={() => deleteHandler(todo.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Active;
