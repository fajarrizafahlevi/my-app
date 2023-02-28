import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function Item({ id, title, deleteItem }) {
  return (
    <div className="m-3 p-3 border rounded flex justify-between items-center">
      <h2 className="ml-2">{title}</h2>
      <div>
        <FontAwesomeIcon
          icon={faDeleteLeft}
          className="ml-3"
          onClick={() => deleteItem(id)}
        />
      </div>
    </div>
  );
}

export default Item;
