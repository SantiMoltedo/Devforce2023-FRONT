import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../customHooks/useForm';

export const CrearUsuario = () => {

  const navigate = useNavigate();

  const { formState, onInputChange } = useForm({
    descripcion: '', link: ''
  })
  const { descripcion, link } = formState

  const hideOrShowInput = () => {
    var valorSeleccionado = document.getElementById("tipo-selector").value;
    var linkArea = document.getElementById("link-area");
    if (valorSeleccionado == "UDEMY" || valorSeleccionado == "OTRA-PLATAFORMA") {
      linkArea.classList.remove("hide");
    }
    else {
      document.getElementById("link").required = false
      linkArea.classList.add("hide");
    }
  }

  const sendSolicitud = () => {
    const tipo = document.getElementById("tipo-selector").value;
    const area = document.getElementById("area-selector").value;

    const data = { tipo, descripcion, estado: 'PENDIENTE-MENTOR', area, ...(link != '' && { link }) }
    fetch('http://localhost:8080/api/nuevaSolicitud', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      // credentials: 'include',
    }).then(resp => resp.json())
    console.log(data);
  }

  const onClickBTN = () => {
    if (document.querySelector("input")) {
      if (link.length < 1) {
        document.getElementById("link").required = true
      }
    }
  }

  return (
    <div className='container-center'>
      <div className='card-form shadow rounded m-3'>
        <h2 className="text-center pt-4"> Crear Usuario</h2>
        <form onSubmit={(e) => { sendSolicitud(); e.preventDefault() }} className="p-3">

          <h5>Tipo de usuario:</h5>
          <select id='tipo-selector' className="form-select" onChange={() => hideOrShowInput()} defaultValue={0}>
            <option disabled value={0}>Tipo de usuario</option>
            <option value={"ASESORAMIENTO"}>USER</option>
            <option value={"COURSERA"}>MENTOR</option>
            <option value={"OTROS"}>ADMIN</option>
          </select>

          <div class="row">
            <div class="col-sm">
              <h5 className='mt-4'>Nombre:</h5>
              <input className="form-control" placeholder="Ej:Juan" rows="1" name="descripcion" value={descripcion} onChange={onInputChange}></input>
            </div>
            <div class="col-sm">
              <h5 className='mt-4'>Apellido:</h5>
              <input className="form-control" placeholder="Ej:Ramirez" rows="1" name="descripcion" value={descripcion} onChange={onInputChange}></input>
            </div>
          </div>

          <div class="row">
            <div class="col-sm">
              <h5 className='mt-4'>Nombre de usuario:</h5>
              <input className="form-control" placeholder="Ej:JPerez" rows="1" name="descripcion" value={descripcion} onChange={onInputChange}></input>
            </div>
            <div class="col-sm">
              <h5 className='mt-4'>Número de teléfono:</h5>
              <input className="form-control" placeholder="Ej:+54 9 1123867095" rows="1" name="descripcion" value={descripcion} onChange={onInputChange}></input>
            </div>
          </div>

          <h5 className='mt-4'>Mail</h5>
          <input className="form-control" placeholder="juan.perez@gire.com" rows="1" name="descripcion" value={descripcion} onChange={onInputChange}></input>

          <div class="row">
            <div class="col-sm">
              <h5 className='mt-4'>Contraseña</h5>
              <input type = "password" className="form-control" rows="1" name="descripcion" value={descripcion} onChange={onInputChange}></input>
            </div>
            <div class="col-sm">
              <h5 className='mt-4'>Repetir Contraseña:</h5>
              <input type = "password" className="form-control" rows="1"></input>
            </div>
          </div>
          
          <div class="form-check form-switch">
          <h5 className='mt-4'>Tiene teams?</h5>
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
          </div>

          <div className="d-flex my-4">
            <button className='btn btn-outline-dark w-100 me-4' onClick={() => navigate(-1)}>Cancelar</button>
            <button className='btn btn-dark w-100 ms-4' type='submit' onClick={onClickBTN}>Crear</button>
          </div>
        </form>
      </div>
    </div>
  )
}