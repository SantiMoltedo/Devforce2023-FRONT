
export const LoginPage = () => {
	return (
		<div className="contenedor">
			<div className="container">
				<div className="row  align-items-center">
					<div className="col-1"></div>
					<div className="col-5">
						<img className="login-ilustration" src='../../../assets/loginIlustration.png' alt="texto" />
					</div>
					<div className="col-lg-5 col-sm-12">
						<div className="card rounded-3 form-card d-flex justify-content-around">
							<div>
								<h1 className="text-center">Bienvenido</h1>
							</div>
							<div>
								<div className="row">
									<div className="col-2">
									</div>
									<div className="col-8">
										<p className="mb-0">Usuario</p>
										<label className="input-icon username w-100">
											<input className="with-icon w-100" type="text" placeholder="Search" />
										</label>
									</div>
									<div className="col-2">
									</div>
								</div>
								<div className="row mt-4">
									<div className="col-2">
									</div>
									<div className="col-8">
										<p className="mb-0">Contraseña</p>
										<div class="input">
											<span class="prefix"><i>YOUR</i></span>
											<input />
											<span class="suffix"><i class="fa-solid fa-eye"></i></span>
										</div>
									</div>
									<div className="col-2">
									</div>
								</div>
							</div>
							<div>
								<div className="row">
									<div className="col-3">
									</div>
									<div className="col-6 ">
										<button className="w-100 btn btn-dark">Iniciar</button>
									</div>
									<div className="col-3">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1"></div>
				</div>
			</div>
		</div>
	)
}
