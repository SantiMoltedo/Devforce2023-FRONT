import React from 'react'
import { Navigate } from 'react-router-dom';
export const PrivateRoutes = ({ children }) => {

  const logged = true

  // CONDICION PARA EL LOGIN CAMBIA EL LOGGED

  return (
    (logged)
      ?
      children : <Navigate to='/Auth/login' />
  )
}
