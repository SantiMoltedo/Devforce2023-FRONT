import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Admin } from '../pages/admin/Admin'
import { Mentor } from '../pages/mentor/Mentor'
import { User } from '../pages/user/User'
import { SolicitarCapacitacion } from '../pages/user/SolicitarCapacitacion'
import {CrearUsuario } from '../pages/admin/CrearUsuario'
import { Modal } from '../../app/components/Modal'

export const DevForceRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/mentor' element={<Mentor />} />
        <Route path='/user' element={<User />} />"
        <Route path='/crear-soli' element={<SolicitarCapacitacion />} />"
        <Route path='/*' element={<Navigate to="/user" />} />
        <Route path='/Modal' element={<Modal/>} />
        <Route path='/Crear-usuario' element={<CrearUsuario/>} />
      </Routes>
    </>
  )
}
