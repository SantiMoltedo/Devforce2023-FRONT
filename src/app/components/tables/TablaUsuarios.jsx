import axios from 'axios'
import { useEffect, useState } from 'react'

import { sortTable, expandRow } from './functions/auxFunctions'

export const TablaUsuarios = () => {
    //Para q el modal spawnee poner esto en los iconos/columnas q sean
    // data-bs-toggle="modal" data-bs-target="#aprobSoli"

    const [dirSort0, setDirSort0] = useState("asc")
    const [dirSort2, setDirSort2] = useState("asc")
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
        getSolicitudes()
    }, [])

    const getSolicitudes = async () => {
        try {
            const resp = await axios.get('http://localhost:8080/api/solicitudesusuario')
            const { data } = resp
            console.log(data);
        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <>
            <table className="table shadow text-center align-middle table-sm" id='tablaUsuarios'>
                <thead className="text-white">
                    <tr>
                        <th scope="col">
                            <div className="d-flex justify-content-center align-items-center">Tipo de solicitud
                                <div className="ms-2">
                                    <i onClick={() => { sortTable(0, dirSort0, setDirSort0) }} className="fa-solid fa-arrow-up text-secondary" id='col0'></i>
                                </div>
                            </div>
                        </th>
                        <th scope="col" className="align-middle">
                            <div>
                                Descripción
                            </div>
                        </th>
                        <th scope="col">
                            <div className="d-flex justify-content-center align-items-center">
                                Estado
                                <div className="ms-2">
                                    <i onClick={() => { sortTable(2, dirSort0, setDirSort0) }} className="fa-solid fa-arrow-up text-secondary" id='col2'></i>
                                </div>
                            </div>
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="fs-7">
                    <tr id='s1-collapsed'>
                        <td>Asesoramiento</td>
                        <td className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className="text-muted m-0">En espera</p>
                                <i className="ms-2 fa-solid fa-clock"></i>
                            </div>
                        </td>
                        <td onClick={() => expandRow(1)}><i className="fa-solid fa-angle-down me-2"></i></td>
                    </tr>
                    <tr id="s1-expanded">
                        <td>Asesoramiento</td>
                        <td className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ut! Molestias deserunt, quod architecto officia nihil eligendi exercitationem quidem esse eius quia ipsum optio ex reiciendis amet, impedit natus. Inventore?</td>
                        <td>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className="text-muted m-0">En espera</p>
                                <i className="ms-2 fa-solid fa-clock"></i>
                            </div>
                        </td>
                        <td onClick={() => expandRow(1)} ><i className="fa-solid fa-angle-down rotated me-2"></i></td>
                    </tr>
                    <tr id='s2-collapsed'>
                        <td>Udemy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className="text-muted m-0">Rechazada</p>
                                <i className="ms-2 fa-solid fa-xmark fa-xl"></i>
                            </div>
                        </td>
                        <td onClick={() => expandRow(2)/*EL 2 ES XQ ES LA FILA 2 (REAL ENTRE EXPANDIDA Y COLAPSADA)*/}><i className="fa-solid fa-angle-down me-2"></i></td>
                    </tr>
                    <tr id='s2-expanded'>
                        <td>Udemy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off..a ,kjshdasklajshdk asdkjhaskdh kajshdkashd klajshdkas.</td>
                        <td>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className="text-muted m-0">Rechazada</p>
                                <i className="ms-2 fa-solid fa-xmark fa-xl"></i>
                            </div>
                        </td>
                        <td onClick={() => expandRow(2)}><i className="fa-solid fa-angle-down rotated me-2"></i></td>
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
            </table >
        </>
    )
}