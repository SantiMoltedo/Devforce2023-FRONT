import React from 'react'

import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from '../Auth/Routes/AuthRoutes';
import { DevForceRoutes } from '../app/Routes/DevForceRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { UserContext } from '../UserContext';


export const AppRouter = () => {
  return (
    <>
    <UserContext.Provider value='hola lopret'>
    
      <Routes>
        {/* Login */}
        <Route path='/Auth/*' element={
          <PublicRoutes>
            <AuthRoutes />
          </PublicRoutes>
        }
        />
        {/* DevForceApp */}
        <Route path='/*' element={
          <PrivateRoutes>
            <DevForceRoutes />
          </PrivateRoutes>
        }
        />
      </Routes>

      </UserContext.Provider>
    </>
  )
}
