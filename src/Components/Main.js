import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Notes from '../Pages/Notes';
import Todos from '../Pages/Todos';

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
          element={<Home />}
        ></Route>
        <Route
          path="/todos"
          element={<Todos url={url} />}
        ></Route>
        <Route
          path="/notes"
          element={<Notes url={url} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
