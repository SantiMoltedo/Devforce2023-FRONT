import React from 'react'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg">
            <a className="navbar-brand text-light ms-3" href="">LOGO NOMBRE DEL PROYECTO</a>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown me-4">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-user"></i> Nombre de Usuario
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Ver Perfil</a></li>
                        <li><a className="dropdown-item" href="#">nombre apellidpo</a></li>
                    </ul>
                </li>
            </ul>

        </nav>
    )
}
