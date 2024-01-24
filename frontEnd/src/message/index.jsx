import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Messege({ mes ,handelReadMessage}) {
    const { _id, from, to, message  } = mes
    
    return (
        <>
            
            <td className=' p-2' >from:  {from} <br />   to:  {to}</td>
            <td onClick={()=>handelReadMessage(mes)} className=' w- full text-wrap items-center  ' > {message} </td>
    
        </>

    )
}
