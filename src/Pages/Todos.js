import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Todos({ url }) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get(`${url}/todos`).then((response) => {
      setTodos(response.data);
    });
  }, [url]);

  if (todos === null) {
    return <div></div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-center m-3">Todo-list</h2>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="m-3 p-3 border rounded"
          >
            <h className="font-bold">{todo.title}</h>
            <p>{todo.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
