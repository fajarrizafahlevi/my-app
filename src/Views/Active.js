import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Active({ url, check, toggleCheck }) {
  const [items, setItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${url}/items`).then((response) => {
      setItems(response.data);
    });
  }, [url]);

  const deleteHandler = (id) => {
    axios.delete(`${url}/items/${id}`);
    navigate('/');
  };

  if (items === null) {
    return <p className="p-3">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-center m-3">Active Item</h2>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="m-3 p-3 border rounded flex justify-between items-center"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                check={check}
                onChange={toggleCheck}
              />
              <h2 className="ml-2">{item.name}</h2>
            </div>
            <FontAwesomeIcon
              icon={faDeleteLeft}
              className="ml-3"
              onClick={() => deleteHandler(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Active;
