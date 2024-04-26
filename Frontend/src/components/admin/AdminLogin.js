import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const redirect = useNavigate();

    const [state, setState] = useState({
        email:'',
        password:''
    });

    const handler = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const login = () => {
        const {email, password} = state;

        if(!(email==='' || password==='')){
            fetch('http://localhost:4000/admin/login',{
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                alert(json.msg);
                if(json.msg === 'Admin logged in successfully'){
                    sessionStorage.setItem('adminName', json.adminData.name);
                    sessionStorage.setItem('adminEmail', json.adminData.email);
                    sessionStorage.setItem('adminToken', json.token);
                    redirect('/service-data');
                }
            })
            .catch(err => console.log(err))
        }
        else {
            alert('Please fill up all fields correctly');
        }
    }

    const register = () => {
        redirect('/admin-register');
    }

  return (
    <>
    <h1 className='admin-head'>
        Admin Login
    </h1>

    <div className='admin-login'>

        <form>
            <div className='admin-login-div'>
                <div><label className='admin-login-lb'>Email Id</label></div>
                <input type='email' name='email' placeholder='Email address' value={state.email} onChange={handler} className='admin-login-inp' style={{marginLeft:50}}/>
            </div>

            <div className='admin-login-div'>
                <div><label className='admin-login-lb'>Password</label></div>
                <input type='password' name='password' placeholder='Email password' value={state.password} onChange={handler} className='admin-login-inp' style={{}}/>
            </div>

            <div className='admin-login-div'>
                <button type='button' className='admin-login-btn' onClick={login}>login</button>
                <button type='button' className='admin-login-btn' style={{marginLeft:30}} onClick={register}>Register</button>
            </div>
        </form>


        </div>

    </>
  )
}
