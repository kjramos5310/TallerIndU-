import React from 'react';  
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

    return (
        <nav>
            <Link to={"/"}>
                Inicio 
            </Link>
            <Link to={"/usuarios"}>
                Usuarios
            </Link>
            <Link to={"/departamentos"}>
                Departamentos
            </Link>
            <Link to={"/empleado"}>
                Empleado
            </Link>
        </nav>
    )
}

export default NavBar;
