import React from 'react'
import { TablaUsuarios } from "../../components/tables/TablaUsuarios"

export const User = () => {
    return (
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
        </div>
    )
}
