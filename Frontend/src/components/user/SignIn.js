import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
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
            fetch('http://localhost:4000/user/login',{
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
                sessionStorage.setItem('userToken', json.token);
                sessionStorage.setItem('userEmail', json.userData.email);
                redirect('/service')
            })
            .catch(err => console.log(err))
        }
        else {
            alert('Please fill up all fields correctly');
        }
    }

    const register = () => {
        redirect('/sign-up');
    }

  return (
    <>
    <h1 className='sign-in-head'>
        Sign in
    </h1>

    <div className='sign-in'>

        <form>
            <div className='sign-in-div'>
                <div><label className='sign-in-lb'>Email Id </label></div>
                <input type='email' name='email' placeholder='Email address' value={state.email} onChange={handler} className='sign-in-inp'/>
            </div>

            <div className='sign-in-div'>
                <div><label className='sign-in-lb'>Password </label></div>
                <input type='password' name='password' placeholder='Email password' value={state.password} onChange={handler} className='sign-in-inp'/>
            </div>

            <div className='sign-in-div'>
                <button type='button' className='sign-in-btn' onClick={login}>Sign In</button>
                <button type='button' className='sign-in-btn' style={{marginLeft:40}} onClick={register}>Sign Up</button>
            </div>
        </form>


        </div>

    </>
  )
}
