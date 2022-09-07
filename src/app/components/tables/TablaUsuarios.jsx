import React, { useEffect } from 'react'

export const TablaUsuarios = () => {


    useEffect(() => {
        for (let i = 1; i <= 2 /* numero de filas  / 2 */; i++) {
            let collapsed = document.getElementById(`s${i}-collapsed`)
            let expanded = document.getElementById(`s${i}-expanded`)
            if (collapsed.style.display == '' || collapsed.style.display == 'table-row') {
                collapsed.style.display = 'none'
                expanded.style.display = 'table-row'
            }
            else {
                collapsed.style.display = 'table-row'
                expanded.style.display = 'none'
            }
        }
    }, [])


    const expandRow = (i) => {
        console.log(i);
        let collapsed = document.getElementById(`s${i}-collapsed`)
        let expanded = document.getElementById(`s${i}-expanded`)
        if (collapsed.style.display == '' || collapsed.style.display == 'table-row') {
            collapsed.style.display = 'none'
            expanded.style.display = 'table-row'
        }
        else {
            collapsed.style.display = 'table-row'
            expanded.style.display = 'none'
        }
    }

    return (
        <>
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
                    <tr id='s1-collapsed'>
                        <td>Asesoramiento</td>
                        <td className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <i className="fa-solid fa-clock"></i>
                            <p className="text-muted m-0">En espera</p>
                        </td>
                        <td onClick={() => expandRow(1)}><i className="fa-solid fa-angle-down me-2"></i></td>
                    </tr>
                    <tr id="s1-expanded">
                        <td>Asesoramiento</td>
                        <td className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ut! Molestias deserunt, quod architecto officia nihil eligendi exercitationem quidem esse eius quia ipsum optio ex reiciendis amet, impedit natus. Inventore?</td>
                        <td>
                            <i className="fa-solid fa-clock"></i>
                            <p className="text-muted m-0">En espera</p>
                        </td>
                        <td onClick={() => expandRow(1)} ><i className="fa-solid fa-angle-down rotated me-2"></i></td>
                    </tr>
                    <tr id='s2-collapsed' onClick={() => expandRow(2) /*EL 2 ES XQ ES LA FILA 2 (REAL ENTRE EXPANDIDA Y COLAPSADA)*/}>
                        <td>Udemy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                            <p className="text-muted m-0">Rechazada</p>
                        </td>
                        <td><i className="fa-solid fa-angle-down me-2"></i></td>
                    </tr>
                    <tr id='s2-expanded' onClick={() => expandRow(2)}>
                        <td>Coursera</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <i className="fa-solid fa-check fa-lg"></i>
                            <p className="text-muted m-0">Aceptado</p>
                        </td>
                        <td><i className="fa-solid fa-angle-down me-2"></i></td>
                    </tr>
                    {/* <tr>
                    <td>Udemy</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                    <td>
                        <i className="fa-solid fa-pencil "></i>
                        <p className="text-muted m-0">Devuelto</p>
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
                </tr> */}
                </tbody>
            </table>
        </>
    )
}
