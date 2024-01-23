import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Messege({ mes }) {
    const { _id, from, to, message , handelReadMessage} = mes
    
    return (
        <>
            <span onClick={() => handelReadMessage(message)}> 
            <td className='p-2' >from:  {from} <br />   to:  {to}</td>
            <td className='flex justify-center items-center grow ' > {message} </td></span>
    
        </>

    )
}
