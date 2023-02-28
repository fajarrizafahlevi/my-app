import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [check, setCheck] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const toggleCheckHandler = () => {
    setCheck(!check);
  };

  return (
    <div>
      <Header
        isMenuOpen={showMenu}
        toggleMenu={toggleMenuHandler}
      />
      <Main
        closeMenu={closeMenuHandler}
        isChecked={check}
        toggleCheck={toggleCheckHandler}
      />
    </div>
  );
}

export default App;
