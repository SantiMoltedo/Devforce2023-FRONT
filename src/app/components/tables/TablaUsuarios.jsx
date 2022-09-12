import React, { useEffect } from 'react'

export const TablaUsuarios = () => {
    //Para q el modal spawnee poner esto en los iconos/columnas q sean
    // data-bs-toggle="modal" data-bs-target="#aprobSoli"
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

    const sortTable = (n) => {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("tablaUsuarios");
        switching = true;
        dir = "asc";
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }


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
            <table className="table text-center align-middle table-sm" id='tablaUsuarios'>
                <thead className="text-white">
                    <tr>
                        <th onClick={() => sortTable(0)} scope="col">Tipo de solicitud</th>
                        <th onClick={() => sortTable(1)} scope="col">Descripcion</th>
                        <th onClick={() => sortTable(2)} scope="col">Estado</th>
                        <th onClick={() => sortTable(3)} scope="col"></th>
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
                    <tr id='s2-collapsed'>
                        <td>Udemy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                            <p className="text-muted m-0">Rechazada</p>
                        </td>
                        <td onClick={() => expandRow(2)/*EL 2 ES XQ ES LA FILA 2 (REAL ENTRE EXPANDIDA Y COLAPSADA)*/}><i className="fa-solid fa-angle-down me-2"></i></td>
                    </tr>
                    <tr id='s2-expanded'>
                        <td>Udemy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off..a ,kjshdasklajshdk asdkjhaskdh kajshdkashd klajshdkas.</td>
                        <td>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                            <p className="text-muted m-0">Rechazada</p>
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
            </table>
        </>
    )
}