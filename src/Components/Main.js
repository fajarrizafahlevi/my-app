import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Views/About';
import Items from '../Views/Items';
import Add from '../Views/Add';

function Main({ loading, items, addItem, deleteItem }) {
  return (
    <main className="flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <Items
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
          path="/items"
          element={
            <Items
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
