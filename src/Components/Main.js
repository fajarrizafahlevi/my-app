import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Views/About';
import Active from '../Views/Active';
import Add from '../Views/Add';
import Archive from '../Views/Archive';

function Main({ closeMenu, check, toggleCheck }) {
  const url = 'https://63fc7626859df29986bcfce0.mockapi.io/api/v1';

  return (
    <main
      className="flex justify-center items-center"
      onClick={closeMenu}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Active
              url={url}
              isChecked={check}
              toggleCheck={toggleCheck}
            />
          }
        ></Route>
        <Route
          path="/add"
          element={<Add />}
        ></Route>
        <Route
          path="/active"
          element={
            <Active
              url={url}
              isChecked={check}
              toggleCheck={toggleCheck}
            />
          }
        ></Route>
        <Route
          path="/archive"
          element={<Archive url={url} />}
        ></Route>
        <Route
          path="/about"
          element={<About url={url} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
