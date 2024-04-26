import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    // const red = useNavigate()

    const [state, setState] = useState({
        name:'',
        email:'',
        password:'',
        conpassword:'',
        mobile:'',
        address:''
    });

    const handler = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const submit = () => {
        // console.log(state);
        // const {name, email, password, conpassword, mobile, address} = state;

        if(state.password === state.conpassword){
            fetch("http://localhost:4000/user/register", {
                method: 'POST',
                body: JSON.stringify(state),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((resp) => resp.json())
            .then((json) =>{
                console.log(json);
                alert(json.msg);
            })
            .catch((err) => console.log(err))
        }
        else {
            alert('Password didn\'t match')
        }
    }
    return (
        <>

        <div className='sign-up-head'>
            <h1 id='signup-h'>User Registration</h1>
        </div>
            
            <div className="con">

                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td><label className='sign-up-lb'>Name</label></td>
                            <td><input className='sign-up-inp' type="text" name="name" value={state.name} onChange={handler} placeholder="name"/></td>
                        </tr>
                        <tr>
                            <td><label className='sign-up-lb'>Email address</label></td>
                            <td><input className='sign-up-inp' type="email" name="email" value={state.email} onChange={handler} placeholder="email@gmail.com"/></td>
                        </tr>
                        <tr>
                            <td><label className='sign-up-lb'>Password</label></td>
                            <td><input className='sign-up-inp' type="password" name="password" value={state.password} onChange={handler} placeholder="email password"/></td>
                        </tr><tr>
                            <td><label className='sign-up-lb'>Confirm password</label></td>
                            <td><input className='sign-up-inp' type="password" name="conpassword" value={state.conpassword} onChange={handler} placeholder="confirm your password"/></td>
                        </tr>
                        <tr>
                            <td><label className='sign-up-lb'>Contact number</label></td>
                            <td><input className='sign-up-inp' type="text" name="mobile" value={state.mobile} onChange={handler} placeholder="mobile number"/></td>
                        </tr>
                        <tr>
                            <td><label className='sign-up-lb'>Residence address</label></td>
                            <td><input className='sign-up-inp' type="text" name="address" value={state.address} onChange={handler} placeholder="your address"/></td>
                        </tr>
                        <tr>
                            <td><button type="button" className='sign-up-btn' onClick={submit}>Register</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}
