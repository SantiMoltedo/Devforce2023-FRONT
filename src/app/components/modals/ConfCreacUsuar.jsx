
import React from 'react';
export const ConfCreacUsuar = () => {
	//data-bs-toggle="modal" data-bs-target="#exampleModal"
	return (
		<>
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-md">
					<div className="modal-content modal-class1  ">
						<div className="modal-body  modal-styles ">
							<div className="container-fluid ">
								<div className="row">
									<div className="col-12">
										<h3 className='text-center mt-3'>Confirmar creación de usuario</h3>
									</div>
								</div>
								<div className="row">
									<div className="col-12 mt-3 text-center"><h5><b>Usuario:</b></h5></div>
								</div>
								<div className="row">
									<div className="col-12 text-center"><h5>Santiago Moltedo</h5></div>
								</div>
							</div>
							<div className="d-flex mt-3">
								<div className="col-3 mt-3"><button type="button" className="btn btn-outline-dark w-100 mb-3 me-2" data-bs-dismiss="modal">Cancelar</button></div>
								<div className="col-3 mt-3"><button type="button" className="btn btn-dark w-100 mb-3 ms-2">Devolver</button></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}