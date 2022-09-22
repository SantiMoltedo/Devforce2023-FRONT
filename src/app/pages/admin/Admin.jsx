
import React, { useContext } from 'react'
import { UserContext } from '../../../UserContext'
export const Admin = () => {

  const msg=useContext(UserContext)
  return (
    <div >{msg}</div>
  
  )
}
