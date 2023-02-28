import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ isMenuOpen, toggleMenu }) {
  let menu;

  if (isMenuOpen) {
    menu = (
      <div className="bg-black shadow fixed top-0 right-0 p-5 h-full text-white flex-col text-right">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          className="cursor-pointer"
          onClick={toggleMenu}
        />
        <ul className="flex-column p-3">
          <li className="mt-3 text-xl">
            <Link
              to="/active"
              onClick={toggleMenu}
            >
              Active
            </Link>
          </li>
          <li className="mt-3 text-xl">
            <Link
              to="/about"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav>
      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        className="cursor-pointer"
        onClick={toggleMenu}
      />

      {menu}
    </nav>
  );
}

export default Navigation;
