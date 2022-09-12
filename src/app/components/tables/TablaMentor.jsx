
import teams from "../assets/icons/teamsLogo.png"

export const TablaMentor = () => {
    return (
        <div className="table-responsive">
            <table className="table align-middle table-sm text-center">
                <thead className="text-white">
                    <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Tipo de solicitud</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Acciones</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="fs-7 table-light">
                    <tr>
                        <td className='text-start ps-5'>
                            <p className='mb-0 mt-2'>Nombre Apellido</p>
                            <p className='text-muted mt-0 mb-2'>nombre.apellido@gire.com</p>
                        </td>
                        <td>Tipo</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td className='text-nowrap'>
                            <span><i className="fa-solid fa-xmark fa-xl me-2"></i> <i class="fa-solid fa-pencil me-2"></i> <i className="fa-solid fa-check fa-lg"></i></span>
                        </td>
                        <td><i className="fa-solid fa-angle-down me-4 ms-3"></i></td>
                    </tr>
                    <tr>
                        <td className='text-start ps-5'>
                            <p className='mb-0 mt-2'>Nombre Apellido</p>
                            <p className='text-muted mt-0 mb-0'>nombre.apellido@gire.com</p>
                            <p className='text-muted mt-0 mb-0'>+54 0 110000000</p>
                            <img className='teams-logo mt-0 mb-2 ' src={teams} />
                        </td>
                        <td>Tipo</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td className='text-nowrap'>
                            <span><i className="fa-solid fa-xmark fa-xl me-2"></i> <i className="fa-solid fa-pencil me-2"></i> <i className="fa-solid fa-check fa-lg"></i></span>
                        </td>
                        <td><i className="fa-solid fa-angle-down me-4 ms-3 rotated"></i></td>
                    </tr>
                    <tr>
                        <td className='text-start ps-5'>
                            <p className='mb-0 mt-2'>Nombre Apellido</p>
                            <p className='text-muted mt-0 mb-0'>nombre.apellido@gire.com</p>
                            <p className='text-muted mt-0 mb-0'>+54 0 110000000</p>
                            <img className='teams-logo mt-0 mb-2' src={teams} />
                        </td>
                        <td>Tipo</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td className='text-nowrap'>
                            <span><i className="fa-solid fa-xmark fa-xl me-2"></i> <i className="fa-solid fa-pencil me-2"></i> <i className="fa-solid fa-check fa-lg"></i></span>
                        </td>
                        <td><i className="fa-solid fa-angle-down me-4 ms-3 rotated"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
