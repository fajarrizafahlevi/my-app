import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const url = 'https://63fc7626859df29986bcfce0.mockapi.io/api/v1';

  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);

  const navigate = useNavigate();

  function toggleMenuHandler() {
    setShowMenu(!showMenu);
  }

  function closeMenuHandler() {
    setShowMenu(false);
  }

  useEffect(() => {
    getItems(url);
  }, [url]);

  async function getItems(url) {
    await axios.get(`${url}/items`).then((response) => setItems(response.data));

    setLoading(false);
  }

  async function addItemHandler(item) {
    await axios.post(`${url}/items`, item);

    navigate('/');
    getItems(url);
  }

  async function deleteItemHandler(id) {
    await axios.delete(`${url}/items/${id}`);

    navigate('/');
    getItems(url);
  }

  return (
    <div>
      <Header
        isMenuOpen={showMenu}
        toggleMenu={toggleMenuHandler}
        closeMenu={closeMenuHandler}
      />
      <Main
        closeMenu={closeMenuHandler}
        loading={loading}
        items={items}
        addItem={addItemHandler}
        deleteItem={deleteItemHandler}
      />
    </div>
  );
}

export default App;
