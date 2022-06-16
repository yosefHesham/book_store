import React from "react";
import { Link } from "react-router-dom";


const navStyle = { display: "flex" };

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "BOOKS",
      color: "#121212",
    },
    {
      id: 2,
      path: "/categories",
      text: "CATEGORIES",
      color: "#121212",
    },
  ];
  return (
    <nav className="navBar" style={navStyle}>
      <ul
        className="navList"
        style={{ ...navStyle, listStyle: "none", columnGap: "2px" }}
      >
        <h1> Bookstore CMS </h1>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              style={{ textDecoration: "none", color: link.color, letterSpacing:"1.9px"}}
              to={link.path}
            >
              {link.text}
              {link === links[links.length - 1]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
