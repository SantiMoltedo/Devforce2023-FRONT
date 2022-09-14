
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg">
                <Link className="navbar-brand text-light ms-3" to="">LOGO NOMBRE DEL PROYECTO</Link>
                <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navbar'>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light ms-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user"></i> Nombre de Usuario
                            </a>
                            <ul className="dropdown-menu w-100">
                                <li><Link className="dropdown-item text-light" to="/ver-perfil">Ver Perfil</Link></li>
                                <li className='ps-3 pe-3'><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item text-light" to="/logout">Cerrar Sesión</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
