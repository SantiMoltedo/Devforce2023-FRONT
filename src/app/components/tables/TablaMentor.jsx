import { useEffect, useState } from 'react'
import { sortTable, expandRow } from './functions/auxFunctions'
import { Modal } from '../Modal'

export const TablaMentor = () => {
    //Para q el modal spawnee poner esto en los iconos/columnas q sean
    // data-bs-toggle="modal" data-bs-target="#aprobSoli"

    const [dirSort0, setDirSort0] = useState("asc")
    const [dirSort2, setDirSort2] = useState("asc")
    const [solicitudes, setSolicitudes] = useState([])

    var  accion = "No funciona maestro";
    var  titulo = "No funciona maestro";
    var  usuario = "No funciona maestro";
    var  tiposoli = "No funciona maestro";
    var  descripcion = "No funciona maestro";

    useEffect(() => {
        getSolicitudes(setSolicitudes)
    }, [])

    const getSolicitudes = async (setSolicitudes) => {
        try {
            const data = await
                //     axios.get('http://localhost:8080/api/solicitudesusuario')
                // const { data } = resp
                // console.log(data);
                fetch('http://localhost:8080/api/solicitudesusuario', {
                    mode: 'cors',
                    method: "GET",
                    headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Cache': 'no-cache',
						'Access-Control-Allow-Origin': 'http://localhost:8080',
					},
					credentials: 'include',
                })
                    .then(resp => resp.json())
            setSolicitudes(data)
        } catch (error) {
            console.log({ error });
        }
    }


    const xmark = () => {
        accion = "ok";
        titulo = "probando";
        usuario = "gireboys";
        tiposoli = "nose";
        descripcion = "funciona";
    }

    const pencil = () => {
        accion = "ok";
        titulo = "PENCILLLLL" ;
        usuario = "pepedelav";
        tiposoli = "UDEMY";
        descripcion = "";
    }
    
    const checkmark = () => {
        accion = "Aprobar"; 
        titulo = "Aprobar solicitud"; 
        usuario = "";
        tiposoli = "";
        descripcion = "LOREM ipsum";
        
        
    }
    
    

    return (
        <>
            <table className="table shadow text-center align-middle table-sm" id='tablaUsuarios'>
                <thead className="text-white">
                    <tr>
                         <th scope="col">
                            <div className="d-flex justify-content-center align-items-center">Usuario
                                <div className="ms-2">
                                    <i onClick={() => { sortTable(0, dirSort0, setDirSort0) }} className="fa-solid fa-arrow-up text-secondary" id='col0'></i>
                                </div>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="d-flex justify-content-center align-items-center">Tipo de solicitud
                                <div className="ms-2">
                                    <i onClick={() => { sortTable(0, dirSort0, setDirSort0) }} className="fa-solid fa-arrow-up text-secondary" id='col2'></i>
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
                                Acciones
                            </div>
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="fs-7">
                    {
                        solicitudes.map(soli => (
                            <tr>
                                <td>
                                    {soli.usuario.nombre + " " + soli.usuario.apellido} <br/>
                                    <sub>{soli.usuario.mail}</sub>
                                </td>
                                <td>
                                    {soli.tipo}
                                </td>
                                <td>
                                    <p id={`s${soli.id}-description`} className='collapsed w-100'>
                                        {soli.descripcion}
                                    </p>
                                </td>
                                <td>
                                    {/*<i data-bs-toggle="modal" data-bs-target="#Modal" className="ms-2 fa-solid fa-xmark fa-xl me-2"></i>*/}
                                    {/*<button class = "btn" data-bs-toggle="modal" data-bs-target="#aprobSoli" ><i className="ms-2 fa-solid fa-pencil me-2"></i></button>*/}
                                    <i onClick={() => xmark()} data-bs-toggle="modal" data-bs-target="#aprobSoli" className="ms-2 fa-solid fa-xmark fa-xl me-2"></i>
                                    <i onClick={() => pencil()} data-bs-toggle="modal" data-bs-target="#aprobSoli" className="ms-2 fa-solid fa-pencil me-2"></i>
                                    <i onClick={() => checkmark()} data-bs-toggle="modal" data-bs-target="#aprobSoli" className="ms-2 fa-solid fa-check me-2"></i>
                                    
                                    {
                                        console.log(accion)
                                    }
                                </td>
                                <td>
                                    <i onClick={() => expandRow(soli.id)} id={`s${soli.id}-expandIcon`} className="fa-solid fa-angle-down me-2"></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table >
            <Modal  accion = {accion} titulo = {titulo} usuario = {usuario} tiposoli = {tiposoli} descripcion = {descripcion}/>
        </>
    )
}