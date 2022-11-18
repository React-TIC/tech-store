import React from "react";
import robot from '../images/Robot.png';

//Hacer cambios en las páginas y cambiar <a> por <Link>
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">

        <div className="container-fluid">

          <Link to="/">
            <img src= {robot} width="50" alt=""/>
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/productos">
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/reportes">
                  Reportes
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
