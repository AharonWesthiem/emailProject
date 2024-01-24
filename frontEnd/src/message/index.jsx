import React from 'react'
import { ImBin } from "react-icons/im";
import { useNavigate } from 'react-router-dom'

export default function Messege({ mes ,handelReadMessage, updateStatusMessage}) {
    const { _id, from, to, message  } = mes
  
        

    return (
        <div className='w-full  flex justify-between   text-orange-900  '>
            
            <p className='w-50 p-2  items-center' >from:  {from} <br />   to:  {to}</p>
            <p onClick={()=>handelReadMessage(mes)} className='w-3/5  self-center items-center text-center overflow-x-hidden' > {message} </p>
            <p className='w-5 self-center'><i onClick={()=>{updateStatusMessage(message._id, "trash")} }><ImBin /></i></p>
    
        </div>

    )
}
