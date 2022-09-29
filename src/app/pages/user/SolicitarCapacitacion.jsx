import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../customHooks/useForm';

export const SolicitarCapacitacion = () => {

  const navigate = useNavigate();

  const { formState, onInputChange } = useForm({
    tipo: '', descripcion: '', estado: '', area: ''
  })
  const { tipo, descripcion, estado, area } = formState

  const hideOrShowInput = () => {
    var valorSeleccionado = document.querySelector(".form-select").value;
    var linkArea = document.getElementById("link");
    if (valorSeleccionado == 4 || valorSeleccionado == 5) {
      linkArea.classList.remove("hide");
    }
    else {
      linkArea.classList.add("hide");
    }
  }

  const sendSolicitud = (tipo, descripcion, estado, area) => {
    fetch('http://localhost:8080/api/nuevaSolicitud', {
      method: 'POST',
      body: JSON.stringify({ tipo, descripcion, estado, area }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'include',
    }).then(resp => resp.json())
  }

  return (
    <>
      <div className='shadow rounded m-3'>
        <h2 className="text-center pt-4"> Solicitud de capacitación</h2>
        <form /*onSubmit={}*/ className="p-3">

          <h5>Tipo de solicitud</h5>
          <select className="form-select" onChange={() => hideOrShowInput()} defaultValue={0}>
            <option disabled value={0}>Elegí el tipo de solicitud</option>
            <option value={1}>Asesoramiento</option>
            <option value={2}>Coursera</option>
            <option value={3}>Otros</option>
            <option value={4}>Udemy</option>
            <option value={5}>Otra Plataforma</option>
          </select>

          <div id='link' className="hide">
            <h5>Link al curso:</h5>
            <input type="text" className="form-control" placeholder="Ej: https://gire.udemy.com/course/master-completo-java-de-cero-a-experto" />
          </div>

          <h5 className='mt-4'>Área:</h5>
          <select className="form-select" defaultValue={0}>
            <option disabled value={0}>Elegí un área a desarrollarte</option>
            <option value={1}>Back-End</option>
            <option value={2}>Front-End</option>
            <option value={3}>Base de Datos</option>
            <option value={4}>CRM</option>
            <option value={5}>Saleforce</option>
          </select>

          <h5 className='mt-4'>Detalle de la capacitación</h5>
          <textarea className="form-control" placeholder="Contanos a que tipo de capacitación te gustaría aplicar y cual es tu objetivo?" rows="10" name="descripcion" value={descripcion} onChange={onInputChange}></textarea>

          <div className="d-flex my-4">
            <button className='btn btn-outline-dark w-100 me-4' onClick={() => navigate(-1)}>Cancelar</button>
            <button className='btn btn-dark w-100 ms-4'>Crear</button>
          </div>
        </form>
      </div>
    </>
  )
}