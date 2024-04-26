import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateUser() {

    const userToken = sessionStorage.getItem('userToken');

  return userToken ? <Outlet></Outlet> : <Navigate to='/sign-in'/>
}
