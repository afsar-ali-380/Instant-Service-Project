import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SignUp from './components/user/SignUp'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Service from './components/Service'
import SignIn from './components/user/SignIn'
import AdminRegister from './components/admin/AdminRegister'
import NotFound from './components/NotFound'
import AdminLogin from './components/admin/AdminLogin'
import ServiceForm from './components/user/ServiceForm'
import ServiceData from './components/admin/ServiceData'
import Private from './components/admin/Private'
import PrivateUser from './components/user/PrivateUser'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Private/>}>
          <Route path='/service-data' element={<ServiceData/>}></Route>
      </Route>
      <Route element={<PrivateUser/>}>
          <Route path='/service-form' element={<ServiceForm/>}></Route>
      </Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/contact-us' element={<ContactUs/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/admin-register' element={<AdminRegister/>}></Route>
      <Route path='/admin-login' element={<AdminLogin/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
