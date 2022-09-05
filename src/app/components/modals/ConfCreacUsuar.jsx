
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '.././../styles/estilosLogin.css'
import ModalDialog from 'react-bootstrap/ModalDialog'
export const ConfCreacUsuar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-md   ">
    <div class="modal-content modal-class1  ">
      
      <div class="modal-body  modal-styles ">

      
      <div class="container-fluid ">
    <div class="row">
      <div class="col-12"> 
      <h3 className='text-center mt-3'>Confirmar creación de usuario</h3>
      
      </div>
      
    </div>
    <div class="row">
      <div class="col-12 mt-3  text-center"><h5><b>Usuario:</b></h5></div>
      
    </div>
    <div class="row">
      <div class="col-12  text-center"><h5>Santiago Moltedo</h5></div>
      
      </div>
    
    
   

{/*  */}

   

    {/* next row */}

    </div>
  
<div className="row">
<div className="col-2"></div>
<div class="col-3 mt-3  "><button type="button" class=" btn-secundario w-100 " data-bs-dismiss="modal">Cancelar</button></div>
      <div class="col-2 mt-3 "></div>
      <div class="col-3 mt-3 "><button type="button" class=" btn-primario w-100 mb-3">Crear</button></div>
      <div className="col-2"></div>
  
</div>
        


     
        
        
      </div>
      
    </div>
  </div>
</div>
    </>
  );
}