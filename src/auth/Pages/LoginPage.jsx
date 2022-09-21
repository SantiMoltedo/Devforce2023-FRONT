import signIn from "../../services/services";
import loginIllustration from '../../assets/loginIlustration.png'

export const LoginPage = () => {
	const showPassword = () => {
		var input = document.getElementById("pass")
		if (input.type === "password") {
			input.type = "text";
		} else {
			input.type = "password";
		}
	}

	return (
		<div className="contenedor">
			<div className="container">
				<div className="row  align-items-center">
					<div className="col-1"></div>
					<div className="col-5">
						<img className="login-ilustration" src={loginIllustration} alt="Login Ilustration" />
					</div>
					<div className="col-lg-5 col-sm-12">
						<div className="card rounded-3 form-card d-flex justify-content-around">
							<div>
								<h1 className="text-center">Bienvenido</h1>
							</div>
							<div>
								<form action={() => signIn()}>
									<div className="row">
										<div className="col-2">
										</div>
										<div className="col-8">
											<p className="mb-0">Usuario</p>
											<label className="input-icon username w-100">
												<input className="input with-icon w-100" type="text" placeholder="Search" />
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
											<label className="input-icon password w-100">
												<input className="input with-icon w-100" type="password" placeholder="Search" id="pass" />
												<i className="fa-solid fa-eye btn" id="eye" onClick={showPassword}></i>
											</label>
										</div>
										<div className="col-2">
										</div>
									</div>
								</form>
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
