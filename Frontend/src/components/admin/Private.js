import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Private() {

    const adminToken = sessionStorage.getItem('adminToken');

  return adminToken ? <Outlet></Outlet> : <Navigate to={'/admin-login'}/>
}
