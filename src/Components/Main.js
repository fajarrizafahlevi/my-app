import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Main({ closeMenu }) {
  return (
    <main
      className="flex justify-center items-center"
      onClick={closeMenu}
    >
      <Routes>
        <Route
          path="/"
          element={<p className="">Hello World!</p>}
        ></Route>
        <Route
          path="/about"
          element={<p className="">About us</p>}
        ></Route>
        <Route
          path="/contact"
          element={<p className="">Contact us</p>}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
