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
  const [archive, setArchive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getItems(url);
  }, [url]);

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const getItems = async (url) => {
    await axios.get(`${url}/items`).then((response) => setItems(response.data));

    setLoading(false);
  };

  const toggleArchiveHandler = () => {
    setArchive(!archive);
  };

  const deleteItemHandler = async (id) => {
    await axios.delete(`${url}/items/${id}`);
    getItems(url);
    navigate('/');
  };

  return (
    <div>
      <Header
        isMenuOpen={showMenu}
        toggleMenu={toggleMenuHandler}
      />
      <Main
        closeMenu={closeMenuHandler}
        loading={loading}
        items={items}
        isArchived={archive}
        toggleArchive={toggleArchiveHandler}
        deleteItem={deleteItemHandler}
      />
    </div>
  );
}

export default App;
