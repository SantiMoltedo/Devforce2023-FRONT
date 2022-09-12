
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg">
            <a className="navbar-brand text-light ms-3" href="">LOGO NOMBRE DEL PROYECTO</a>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown me-4">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-user"></i> Nombre de Usuario
                    </a>
                    <ul className="dropdown-menu w-100">
                        <li><Link className="dropdown-item text-light" to="/ver-perfil">Ver Perfil</Link></li>
                        <li className='ps-3 pe-3'><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-light" to="/logout">Cerrar Sesión</Link></li>
                    </ul>
                </li>
            </ul>

        </nav>
    )
}
