import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Admin } from '../pages/admin/Admin'
import { Mentor } from '../pages/mentor/Mentor'
import { User } from '../pages/user/User'
import { SolicitarCapacitacion } from '../pages/user/SolicitarCapacitacion'
import { VerLicencias } from '../pages/admin/VerLicencias'

export const DevForceRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/licencias' element={<VerLicencias />} />
        <Route path='/mentor' element={<Mentor />} />
        <Route path='/user' element={<User />} />"
        <Route path='/crear-soli' element={<SolicitarCapacitacion />} />"
        <Route path='/*' element={<Navigate to="/user" />} />
      </Routes>
    </>
  )
}
