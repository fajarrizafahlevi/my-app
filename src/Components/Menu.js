import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ closeMenu }) {
  return (
    <div className="bg-black shadow fixed top-0 right-0 p-5 h-full text-white flex-col text-right">
      <FontAwesomeIcon
        icon={faXmark}
        size="2xl"
        className="cursor-pointer"
        onClick={closeMenu}
      />
      <ul className="flex-column p-3">
        <li className="mt-3 text-xl">
          <Link
            to="/items"
            onClick={closeMenu}
          >
            Items
          </Link>
        </li>
        <li className="mt-3 text-xl">
          <Link
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
