import React, { useEffect, useState } from 'react'

export default function ServiceData() {

    const [data, setData] = useState([]); 

    function fetchApi(url){
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
            setData(json);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetchApi('http://localhost:4000/service/data');
    }, []);

  return (
    <>
        <div className='sr-data-head'>
            <span>Booked services records</span>
        </div>

        <div className='sr-data-mid-sect'>

            <div className='sr-data-mid-sect-cont'>

                <div className='sr-data-mid-sect-div'>

                    <table>
                        <tbody>
                            <tr>
                                <th className='tr-th'>Sr no.</th>
                                <th className='tr-th'>Customer Name</th>
                                <th className='tr-th'>Service</th>
                                <th className='tr-th'>Service Date</th>
                                <th className='tr-th'>Booking Date</th>
                            </tr>
                            {
                                data.map((v,i)=>
                                    <tr key={i}>
                                        <td className='tr-td'>{i+1}</td>
                                        <td className='tr-td'>{v.name.toUpperCase()}</td>
                                        <td className='tr-td'>{v.service}</td>
                                        <td className='tr-td'>{v.date}</td>
                                        <td className='tr-td'>{v.bookingDate}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>

    
    </>
  )
}
