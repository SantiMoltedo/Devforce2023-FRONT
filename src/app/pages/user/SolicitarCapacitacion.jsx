import { useNavigate } from 'react-router-dom';

export const SolicitarCapacitacion = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='shadow rounded m-4'>
        <h2 className="text-center pt-4 mb-5"> Solicitud de capacitación</h2>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h5>Tipo de solicitud</h5>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-10">
            <select className="form-select">
              <option value={0}>Tipo de solicitud</option>
              <option value={1}>Asesoramiento</option>
              <option value={2}>Coursera</option>
              <option value={3}>Otros</option>
              <option value={4}>Udemy</option>
              <option value={5}>Otra Plataforma</option>
            </select>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-10">
            <h5 className='mt-4'>Area:</h5>
            <select className="form-select">
              <option value={0}>Area a desarrollar</option>
              <option value={1}>Back-End</option>
              <option value={2}>Front-End</option>
              <option value={3}>Base de Datos</option>
              <option value={4}>CRM</option>
              <option value={5}>Saleforce</option>
            </select>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-10">
            <h5 className='mt-4'>Detalle de la capacitación</h5>
            <textarea className="form-control" placeholder="Contanos a que tipo de capacitación te gustaría aplicar y cual es tu objetivo?
" rows="10"></textarea>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-lg-2 col-sm-4 col-10"><button className='btn btn-outline-dark w-100 mt-4 mb-4' onClick={() => navigate(-1)}>Cancelar</button></div>
          <div className="col-lg-3 col col-lg-2"></div>
          <div className="col-lg-3 col col-lg-2"></div>
          <div className="col-lg-2 col-sm-4 col-10"><button className='btn btn-dark  w-100  mt-4 mb-4 '>Crear</button></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  )
}
