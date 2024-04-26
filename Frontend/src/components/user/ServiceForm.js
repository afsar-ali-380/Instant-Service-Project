import React, { useState } from 'react'

export default function ServiceForm() {

    const [state, setState] = useState({
        name:'',
        service:'',
        date:'',
        address:'',
        password:''
    });

    const handler = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const submit = () => {
        console.log(state);

        fetch('http://localhost:4000/service/records',{
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
            alert(json.msg);
        })
        .catch(err => console.log(err))
    }

  return (
    <>
    <div className='sr-form-sect'>

        <div className='sr-form-head'>
            <div className='sr-form-head-con'>
                Please fill up the service details
            </div>

        </div>

        <div className='sr-form-cont'>

            <form>
                <table>
                    <tbody>

                    <tr className='sr-form-div'>    
                        <th className='sr-field'>Name</th>
                        <td style={{paddingLeft:30}}>
                            <input type='text' name='name' value={state.name} onChange={handler}  placeholder='Your Name' className='sr-form-inp' />
                        </td>
                    </tr>
                        
                    <tr className='sr-form-div'>
                        <th className='sr-field'>Service</th>
                            <td>
                                <div className='sr-opt-div'>
                                    <select name='service' onChange={handler} className='sr-opt'>
                                        <option >select the service</option>
                                        <option value={'Internet/wifi'}>Internet/wifi</option>
                                        <option value={'AC/TV/Fridge'}>AC/TV/Fridge</option>
                                        <option value={'Electronic repairment'}>Electronic device repair</option>
                                        <option value={'Motor/Electricity'}>Motor/Electiricity</option>
                                        <option value={'Plumbing'}>Plumbing</option>
                                        <option value={'Carpentary'}>Carpentary</option>
                                    </select>
                                </div>
                            </td>
                    </tr>

                    <tr className='sr-form-div'>
                        <th className='sr-field'>Date</th>
                        <td style={{paddingLeft:30}}>
                            <input type='date' name='date' value={state.date} onChange={handler} className='sr-form-inp' />
                        </td>
                    </tr>

                    <tr className='sr-form-div'>
                        <th className='sr-field'>Address</th>
                        <td style={{paddingLeft:30}}>
                            <input type='text' name='address' value={state.address} onChange={handler} placeholder='Residency Address' className='sr-form-inp' />
                        </td>   
                    </tr>
                        
                    <tr className='sr-form-div'>
                        <th className='sr-field'>Password</th>
                        <td style={{paddingLeft:30}}>
                            <input type='password' name='password' value={state.password} onChange={handler} placeholder='Confirm Your Password' className='sr-form-inp' />
                        </td>
                    </tr>
                        
                    <tr>
                        <th className='sr-form-div'>
                            <button type='button' onClick={submit} className='sr-btn'>Book Service</button>
                        </th>
                    </tr>

                    </tbody>
                </table>

            </form>
        </div>

    </div>
    </>
  )
}
