import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Views/About';
import Active from '../Views/Active';
import Add from '../Views/Add';

function Main({ closeMenu, loading, items, addItem, deleteItem }) {
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
              loading={loading}
              items={items}
              deleteItem={deleteItem}
            />
          }
        ></Route>
        <Route
          path="/add"
          element={<Add addItem={addItem} />}
        ></Route>
        <Route
          path="/active"
          element={
            <Active
              loading={loading}
              items={items}
              deleteItem={deleteItem}
            />
          }
        ></Route>
        <Route
          path="/about"
          element={<About />}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
