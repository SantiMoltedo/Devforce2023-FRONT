import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Admin, User, Mentor } from '../Pages'
import { SolicitarCapacitacion } from '../Pages'

export const DevForceRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/asigner' element={<Mentor />} />
        <Route path='/user' element={<SolicitarCapacitacion />} />
        <Route path='/*' element={<Navigate to="/user" />} />
      </Routes>
    </>
  )
}
