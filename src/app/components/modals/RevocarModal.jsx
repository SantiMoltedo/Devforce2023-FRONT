import React from 'react';




export const RevocarModal = ({ user = 'Unknown', tipoSolicitud = 'Unknown' }) => {
	return (
		<>
			<div className="modal fade" id="aprobSoli" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-md">
					<div className="modal-content modal-class1">
						<div className="modal-body modal-styles">
							<div className="container-fluid">
								<div className="row">
									<div className="col-12">
										<h1 className='text-center mt-3'>Revocar la solicitud</h1>
									</div>
								</div>
								<div className="row">
									<div className="col-12 mt-3 text-center"><h5>Usuario:</h5></div>
								</div>
								<div className="row">
									<div className="col-12 text-center"><p>{user}</p></div>
								</div>
								<div className="row">
									<div className="col-12 mt-3 text-center"><h5>Tipo de solicitud:</h5></div>
								</div>
								<div className="row">
									<div className="col-12 text-center"><p>{tipoSolicitud}</p></div>
								</div>
								<div className="row">
									<div className="col-12">
									</div>
								</div>
							</div>
							<div className="d-flex mt-3 justify-content-around">
								<div className="mt-3"><button type="button" className="btn btn-outline-dark w-100 mb-3 me-2" data-bs-dismiss="modal">Cancelar</button></div>
								<div className="mt-3"><button type="button" className="btn btn-dark w-100 mb-3 ms-2">Revocar</button></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}