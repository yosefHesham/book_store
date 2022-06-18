import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
};

library.add(fas);

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
      color: '#121212',
      opacity: '1',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
      color: '#121212',
      opacity: '.5',
    },
  ];
  return (
    <nav className="nav-bar" style={navStyle}>
      <ul
        className="nav-list"
        style={{
          ...navStyle, listStyle: 'none', columnGap: '2px', width: '40%',
        }}
      >
        <h1> Bookstore CMS </h1>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              style={{
                textDecoration: 'none',
                color: link.color,
                letterSpacing: '1.9px',
                opacity: link.opacity,
              }}
              to={link.path}
            >
              {link.text}
              {link === links[links.length - 1]}
            </Link>
          </li>
        ))}
      </ul>
      <div />
      <FontAwesomeIcon
        style={{
          color: 'blue',
          border: 'gray solid 1px',
          borderRadius: '50px',
          padding: '5px',
          backgroundColor: 'white',
          boxShadow: '10px rgba(0,0,0,.5)',
          marginRight: '10%',
        }}
        icon="fas fa-user-circle"
        size="2x"
      />
    </nav>
  );
};
export default Navbar;
