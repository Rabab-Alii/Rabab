import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="nav-bar">
        
        <NavLink to={"/"} style={{textDecoration : "none", color : "whitesmoke"}}>Accueil</NavLink>
        <NavLink to={"/movies"}style={{textDecoration : "none", color : "whitesmoke"}}>Movies</NavLink>
        <NavLink to={"/avis"}style={{textDecoration : "none", color : "whitesmoke"}}>Avis</NavLink>

      </header>
    </>
  );
}

export default Header;
