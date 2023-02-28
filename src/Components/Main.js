import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Active from '../Views/Active';
import Finished from '../Views/Finished';

function Main({ closeMenu }) {
  const url = 'https://63fc7626859df29986bcfce0.mockapi.io/api/v1/';

  return (
    <main
      className="flex justify-center items-center"
      onClick={closeMenu}
    >
      <Routes>
        <Route
          path="/"
          element={<Active />}
        ></Route>
        <Route
          path="/active"
          element={<Active url={url} />}
        ></Route>
        <Route
          path="/finished"
          element={<Finished url={url} />}
        ></Route>
        <Route
          path="/about"
          element={<Finished url={url} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
