import React from 'react'

export const Modal = ({ accion, titulo, usuario, tipoSoli, descripcion, mail, plataforma, fechaExpir, serialLic, mentorAsign, adminAsign }) => {
    return (
        <>
            {/* Boton para Porbar el modal!!!!!!! */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aprobSoli">
                Probar Modal
            </button>
            <div className="modal fade" id="aprobSoli" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content modal-class1">
                        <div className="modal-body modal-styles">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className='text-center mt-3'>{titulo}</h1>
                                    </div>
                                </div>
                                {
                                    usuario && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Usuario:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{usuario}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    tipoSoli && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Tipo de solicitud:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{tipoSoli}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    descripcion && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Descripcion:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{descripcion}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    mail && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Mail:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{mail}</p></div>
                                            </div>
                                        </>
                                    )

                                }
                                {
                                    plataforma && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Plataforma:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{plataforma}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    fechaExpir && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Fecha de expiración:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{fechaExpir}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    serialLic && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Serial:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{serialLic}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    mentorAsign && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Mentor asignado:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{mentorAsign}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    adminAsign && (
                                        <>
                                            <div className="row">
                                                <div className="col-12 mt-3 text-center"><h5>Admin asignado:</h5></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center"><p>{adminAsign}</p></div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            {
                                //En caso de que no haya accion 1 solo boton de volver (Modal solicitud de licencia)
                                accion ? (
                                    <div className="d-flex mt-3 justify-content-around">
                                        <div className="mt-3"><button type="button" className="btn btn-outline-dark w-100 mb-3 me-2" data-bs-dismiss="modal">Cancelar</button></div>
                                        <div className="mt-3"><button type="button" className="btn btn-dark w-100 mb-3 ms-2">{accion}</button></div>
                                    </div>
                                )
                                    : (
                                        <div className="row">
                                            <div className="col"></div>
                                            <div className="col-10"><button type="button" className="btn btn-outline-dark w-100 mb-3 me-2" data-bs-dismiss="modal">Volver</button></div>
                                            <div className="col"></div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
