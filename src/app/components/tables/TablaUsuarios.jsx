import React from 'react'

export const TablaUsuarios = () => {
    return (
        <table className="table text-center align-middle table-sm">
            <thead className="text-white">
                <tr>
                    <th scope="col">Tipo de solicitud</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="fs-7 table-light">
                <tr>
                    <td>Asesoramiento</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                    <td>
                        <i className="fa-solid fa-clock"></i>
                        <p className="text-muted m-0">En espera</p>
                    </td>
                    <td><i className="fa-solid fa-angle-down me-2"></i></td>
                </tr>
                <tr>
                    <td>Udemy</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                    <td>
                        <i className="fa-solid fa-xmark fa-xl"></i>
                        <p className="text-muted m-0">Rechazada</p>
                    </td>
                    <td><i className="fa-solid fa-angle-down me-2"></i></td>
                </tr>
                <tr>
                    <td>Coursera</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                    <td>
                        <i className="fa-solid fa-check fa-lg"></i>
                        <p className="text-muted m-0">Aceptado</p>
                    </td>
                    <td><i className="fa-solid fa-angle-down me-2"></i></td>
                </tr>
                <tr>
                    <td>Udemy</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                    <td>
                        <i className="fa-solid fa-pencil "></i>
                        <p className="text-muted m-0">Devuelto</p>
                    </td>
                    <td><i className="fa-solid fa-angle-down me-2"></i></td>
                </tr>
            </tbody>
        </table>
    )
}
