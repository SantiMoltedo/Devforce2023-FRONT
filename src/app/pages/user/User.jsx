import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { TablaUsuarios } from "../../components/tables/TablaUsuarios"

export const User = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <h2 className='text-center mt-5 mb-5'>Historial de Solicitudes</h2>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10">
                        <TablaUsuarios />
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col-5 col-sm-8 col-lg-9"></div>
                    <div className="col-6 col-sm-3 col-lg-2"><Link to="/crear-soli"><button className='btn btn-dark w-100' >Generar solicitud</button></Link></div>
                    <div className="col"></div>
                </div>
            </div>

            {/* Ejemplo modal (revisar si se importa el modal)*/}
            {/* <Modal titulo="Titulo" accion="Aprobar" usuario="Nombre Apellido" tipoSoli="Udemy" descripcion="Lorem ipsum dolor asodjh asoudhkasbd oaqijwdh" /> */}
        </>
    )
}
