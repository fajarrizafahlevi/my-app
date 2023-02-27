import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandle = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuHandle = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <Header
        isMenuOpen={showMenu}
        toggleMenu={toggleMenuHandle}
      />
      <Main closeMenu={closeMenuHandle} />
      <Footer />
    </div>
  );
}

export default App;
