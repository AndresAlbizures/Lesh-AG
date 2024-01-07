import React from "react"
import '../Hojas-de-estilos/Startbar.css';
import '../App.css'
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Startbar = () => {
  return (

    <><nav className="navbar-start fixed-top">
      <a href="/" class="enlace">
        <img
          src={require('../Imagenes/brand-logo-cian.png')}
          width="100px"
          height="100px"
          className="brand-blur"
          alt="" />
      </a>
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} style={{ color: "#e8e8e8", }} />
      </label>
      <ul className="hor">
        <li ><NavLink to="/"  className="link-bar2">Inicio</NavLink></li>
        <li ><NavLink to="/info" className="link-bar2" >Acerca de</NavLink></li>
        <li ><NavLink to="/servicios" className="link-bar2">Servicios</NavLink></li>
        <li ><NavLink to="/media" className="link-bar2" >Media</NavLink></li>
        <li ><NavLink to="/redes" className="link-bar2">Redes Sociales</NavLink></li>
        <li ><NavLink to="/contacto" className="link-bar2">Contacto</NavLink></li>
      </ul>

     

    </nav>

      <div className="div-out">
        <Outlet></Outlet>
      </div></>

  )



}
export default Startbar;