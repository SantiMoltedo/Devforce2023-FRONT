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
    if (valorSeleccionado == "UDEMY" || valorSeleccionado == "OTRA PLATAFORMA") {
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
        <h2 className="text-center pt-4"> Crear usuario</h2>
        <form onSubmit={(e) => { sendSolicitud(); e.preventDefault() }} className="p-3">

          <h5>Tipo de solicitud</h5>
          <select id='tipo-selector' className="form-select" onChange={() => hideOrShowInput()} defaultValue={0}>
            <option disabled value={0}>Elegí el tipo de solicitud</option>
            <option value={"ASESORAMIENTO"}>Asesoramiento</option>
            <option value={"COURSERA"}>Coursera</option>
            <option value={"OTROS"}>Otros</option>
            <option value={"UDEMY"}>Udemy</option>
            <option value={"OTRA PLATAFORMA"}>Otra Plataforma</option>
          </select>

          <div id='link-area' className="hide mt-4">
            <h5>Link al curso:</h5>
            <input id='link' type="text" className="form-control" placeholder="Ej: https://gire.udemy.com/course/master-completo-java-de-cero-a-experto" name="link" value={link} onChange={onInputChange} />
          </div>

          <h5 className='mt-4'>Área:</h5>
          <select id='area-selector' className="form-select" defaultValue={0}>
            <option disabled value={0}>Elegí un área a desarrollarte</option>
            <option value={"BACKEND"}>Back-End</option>
            <option value={"FRONTEND"}>Front-End</option>
            <option value={"BD"}>Base de Datos</option>
            <option value={"CRM"}>CRM</option>
            <option value={"SALESFORCE"}>Saleforce</option>
          </select>

          <h5 className='mt-4'>Detalle de la capacitación</h5>
          <textarea className="form-control" placeholder="Contanos a que tipo de capacitación te gustaría aplicar y cual es tu objetivo?" rows="10" name="descripcion" value={descripcion} onChange={onInputChange}></textarea>

          <div className="d-flex my-4">
            <button className='btn btn-outline-dark w-100 me-4' onClick={() => navigate(-1)}>Cancelar</button>
            <button className='btn btn-dark w-100 ms-4' type='submit' onClick={onClickBTN}>Crear</button>
          </div>
        </form>
      </div>
    </div>
  )
}