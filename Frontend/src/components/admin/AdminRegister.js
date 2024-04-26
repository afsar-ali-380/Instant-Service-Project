import React, { useState } from 'react'

export default function AdminRegister() {
    
    const [state, setState] = useState({
        name:'',
        email:'',
        password:'',
        conpassword:'',
        mobile:'',
    })

    const handler = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const register = function(){
        const {name, email, password, conpassword, mobile} = state;

        if(password === conpassword){
            
            const formData = new FormData();

            formData.append("name", name)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("conpassword", conpassword)
            formData.append("mobile", mobile)

            fetch('http://localhost:4000/admin/register',{
                method: 'POST',
                body: formData,
            })
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                alert(json.msg);
            })
            .catch(err => console.log(err))
        }
        else {
            alert('password did not match');
        }


    }
  return (
    <>
    <div className='admin-div'>
        <h2 className='admin-h'>Admin Registration</h2>
    </div>

    <div className='admin-mid-section'>


    <form encType="multipart/form-data" method='post'>

        <div className='admin-form-section'>


                <div className='admin-field-div'>
                    <label className='admin-lb'>Full name</label>
                    <input type='text' name='name' value={state.name} onChange={handler} placeholder='Your Full Name' className='admin-inp' style={{marginLeft:145}}/>
                </div>

                <div className='admin-field-div'>
                    <label className='admin-lb'>Email address</label>
                    <input type='email' name='email' value={state.email} onChange={handler} placeholder='Email Id' className='admin-inp' style={{marginLeft:105}}/>
                </div>

                <div className='admin-field-div'>
                    <label className='admin-lb'>Email password</label>
                    <input type='password' name='password' value={state.password} onChange={handler} placeholder='Email id password' className='admin-inp' style={{marginLeft:90}}/>
                </div>

                <div className='admin-field-div'>
                    <label className='admin-lb'>Password confirmation</label>
                    <input type='password' name='conpassword' value={state.conpassword} onChange={handler} placeholder='Confirm password' className='admin-inp' style={{marginLeft:25}}/>
                </div>

                <div className='admin-field-div'>
                    <label className='admin-lb'>Contact number</label>
                    <input type='text' name='mobile' value={state.mobile} onChange={handler} placeholder='Mobile' className='admin-inp' style={{marginLeft:90}}/>
                </div>

                <div className='admin-field-div'>
                    <button type='button' onClick={register} className='admin-btn'>Register</button>
                </div>
        </div>

        </form>

    </div>
    </>
  )
}
