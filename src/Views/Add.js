import React, { useState } from 'react';

function Add({ addItem }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const item = {
    title: title,
    body: body,
  };

  function addItemHandler(event) {
    event.preventDefault();
    addItem(item);
  }

  return (
    <div className="flex-col border rounded m-3 p-3 gap-3">
      <h2 className="text-center text-xl font-bold">Add New Item</h2>
      <form
        className="flex-col"
        onSubmit={addItemHandler}
      >
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Name your item here..."
          className="flex border rounded mt-3 p-3"
        ></input>
        <input
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Type the detail here..."
          className="flex border rounded mt-3 p-3"
        ></input>
        <button
          type="submit"
          className="flex bg-black rounded mt-3 p-3 w-full text-white justify-center cursor pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
