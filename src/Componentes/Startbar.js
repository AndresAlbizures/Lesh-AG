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
        <li ><a to="/"  className="link-bar2">Inicio</a></li>
        <li ><a to="/info" className="link-bar2" >Acerca de</a></li>
        <li ><a to="/servicios" className="link-bar2">Servicios</a></li>
        <li ><a to="/media" className="link-bar2" >Media</a></li>
        <li ><a to="/redes" className="link-bar2">Redes Sociales</a></li>
        <li ><a to="/contacto" className="link-bar2">Contacto</a></li>
      </ul>

     

    </nav>

      <div className="div-out">
        <Outlet></Outlet>
      </div></>

  )



}
export default Startbar;