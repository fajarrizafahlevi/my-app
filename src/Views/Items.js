import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Components/Item';

function Items({ loading, items, deleteItem }) {
  if (loading) {
    return <p className="flex w-full p-3 justify-center items-center">Loading...</p>;
  }

  if (items) {
    return (
      <div className="w-full">
        <h2 className="text-xl font-bold text-center">Items List</h2>
        <div className="border rounded bg-white shadow m-3 p-3 h-96 overflow-auto">
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>
        <Link
          to="/add"
          className="fixed bottom-10 right-10 text-black text-5xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      </div>
    );
  }

  return <p className="p-3">No items here</p>;
}

export default Items;
