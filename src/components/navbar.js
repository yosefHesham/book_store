import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = { display: 'flex' };

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },

  ];
  return (
    <nav className="navBar" style={navStyle}>
      <h1> Bookstore CMS </h1>
      <ul style={{ ...navStyle, listStyle: 'none', columnGap: '2px' }}>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>
              {link.text}
              {' '}
              {link === links[links.length - 1] ? '' : '|'}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
