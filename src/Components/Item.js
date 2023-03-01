import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Item({ id, title, body, deleteItem }) {
  return (
    <div className="m-3 p-3 border rounded flex justify-between items-end">
      <div className="flex-col">
        <h2 className="font-bold">{title}</h2>
        <p className="text-slate-500">{body}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className="ml-3 cursor-pointer"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
}

export default Item;
