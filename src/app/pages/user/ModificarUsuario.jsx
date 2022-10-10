import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext'

export const ModificarUsuario = () => {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        getUsuario(setUsuario)
    }, [])

    const getUsuario = async (setUsuario) => {
        try {
            const data = await
                fetch('http://localhost:8080/api/usuario/obtenerUsuario', {
                    mode: 'cors',
                    method: "GET",
                    headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Cache': 'no-cache',
						'Access-Control-Allow-Origin': 'http://localhost:8080',
					},
					credentials: 'include',
                })
                    .then(resp => resp.json())

                    setUsuario(data)
                    console.log(usuario)
        } catch (error) {
            console.log({ error });
        }
    }

    var errores = 0;

    const verificaciones = () =>{
        if(document.getElementById("phone").value == "")
        {
            document.getElementById("phone").required = true
            errores = errores +1;
        }
        if(document.getElementById("mail").value == "")
        {
            document.getElementById("mail").required = true
            errores = errores +1;
        }
        if(document.getElementById("password").value == "")
        {
            document.getElementById("password").required = true
            errores = errores +1;
        }
        if(document.getElementById("password2").value == "")
        {
            document.getElementById("password2").required = true
            errores = errores +1;
        }
        if(document.getElementById("password2").value != document.getElementById("password").value)
        {
            console.log("las contrase;as son distintas") /*TODO REEMPLAZAR POR UNA NOTIFICACION*/
            errores = errores +1;
        }
        if(errores == 0)
        {
            if(document.getElementById("mail").value.search("@") > 0)
            {
              if((document.getElementById("mail").value.substr(document.getElementById("mail").value.search("@")+1) >= 'A' && document.getElementById("mail").value.substr(document.getElementById("mail").value.search("@")+1) <= 'Z') || (document.getElementById("mail").value.substr(document.getElementById("mail").value.search("@")+1) >= 'a' && document.getElementById("mail").value.substr(document.getElementById("mail").value.search("@")+1) <= 'z'))
              {
                sendUsuario()
                navigate(-1)
              }
            }
        }      
    }

    
    const sendUsuario = async () =>{
        try{
            const nombre = usuario.nombre;
            const apellido = usuario.apellido;
            const username = usuario.username;
            var email = document.getElementById("mail").value;
            var password = document.getElementById("password").value;
            var phone = document.getElementById("phone").value;
            if(document.getElementById("flexSwitchCheckDefault").checked == true)
            {
                var hasTeams = true;
            }
            else{
                var hasTeams = false;
            }

            var datos = { nombre, apellido, username, email, password, phone, hasTeams}
      
            fetch('http://localhost:8080/api/usuario/updatedatos', {
              mode:'cors',
              method: 'PUT',
              body: JSON.stringify(datos),
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Cache': 'no-cache',
                  'Access-Control-Allow-Origin': 'http://localhost:8080',
              },
              credentials: 'include',
            }).then(resp => resp.json())
            console.log(datos);
          }catch (error) {
            console.log( {error} );
          }
    }

    return (
      <div className='container-center'>
        <div className='card-form shadow rounded m-3'>
          <h2 className="text-center pt-4">Modificar usuario</h2>
          <form className="p-3" onSubmit={(e) =>  e.preventDefault() }>
            <div class="row">
              <div class="col-sm">
                <h5 className='mt-4'>Nombre:</h5>
                <input className="form-control input" placeholder={usuario.nombre} rows="1" name="nombre" disabled></input>
              </div>
              <div class="col-sm">
                <h5 className='mt-4'>Apellido:</h5>
                <input className="form-control input" placeholder={usuario.apellido} rows="1" name="apellido" disabled></input>
              </div>
            </div>
  
            <div class="row">
              <div class="col-sm">
                <h5 className='mt-4'>Nombre de usuario:</h5>
                <input className="form-control input" placeholder={usuario.username} rows="1" name="username" disabled></input>
              </div>
              <div class="col-sm">
                <h5 className='mt-4'>Número de teléfono:</h5>
                <input className="form-control input" rows="1" name="phone" placeholder={usuario.phone} id="phone"></input>
              </div>
            </div>
  
            <h5 className='mt-4'>Mail</h5>
            <input className="form-control input" type="email" rows="1" name="mail" id="mail" placeholder={usuario.mail} ></input>
  
            <div class="row">
              <div class="col-sm">
                <h5 className='mt-4'>Contraseña</h5>
                <input type = "password" className="form-control input" rows="1" name="password" id="password"></input>
              </div>
              <div class="col-sm">
                <h5 className='mt-4'>Repetir Contraseña:</h5>
                <input type = "password" className="form-control input" id="password2" rows="1"></input>
              </div>
            </div>
            
            <div class="form-check form-switch">
            <h5 className='mt-4'>Tiene teams?</h5>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                {
                    usuario.hasTeams==1?(
                    <>
                        {document.getElementById("flexSwitchCheckDefault").checked = true}
                    </>
                    ):null
                }
            </div>
  
            <div className="d-flex my-4">
              <button className='btn btn-outline-dark w-100 me-4'onClick={() => navigate(-1)}>Cancelar</button>
              <button className='btn btn-dark w-100 ms-4' type='submit' onClick = {()=>{verificaciones();errores=0}}>Confirmar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }