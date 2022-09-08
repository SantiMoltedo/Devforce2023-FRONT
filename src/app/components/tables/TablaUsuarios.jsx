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

    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable2");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
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
            <table className="table text-center align-middle table-sm" id='myTable2'>
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
                        <td>Coursera</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Off...</td>
                        <td>
                            <i className="fa-solid fa-check fa-lg"></i>
                            <p className="text-muted m-0">Aceptado</p>
                        </td>
                        <td onClick={() => expandRow(2)}><i className="fa-solid fa-angle-down me-2"></i></td>
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