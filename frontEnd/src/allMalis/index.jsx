import React, { useContext } from 'react'
import axios from 'axios'
import Message from '../message'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataContext from '../context/dataContexst'



export default function allMalis() {
    const [emails, setEmails] = useState([])
    let { type } = useParams()
    const { data } = useContext(dataContext)

    if (!type) {type = "from"}


    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
 const axiosF=()=>{ 
     axios.get(`http://localhost:2500/email/${type}`)
            .then((res) => {
                setEmails(res.data)

            })

 }


    useEffect(() => {
        axiosF()
    },[type])

    const nav = useNavigate()

    const updateStatusMessage = async (id,status) => {
       await axios.put(`http://localhost:2500/email/${id}/${status}`)
        .then(res => res.data)
        axiosF()
        console.log(res.data);

    }

    const handelReadMessage = (messageDetails) => {
        nav('/message', { state: {messageDetails} })
        
        console.log(messageDetails._id),
        updateStatusMessage(messageDetails._id, "read")
    }


    return (
<div className='w-full'>
      

          
                {emails.map((message) =>
                <div className='w-full  hover:bg-rose-300'>
                    < div className='max-w-full  
                     shadow-md border  p-2  self-center '>
                        <Message key={message} mes={message} handelReadMessage={handelReadMessage} updateStatusMessage={updateStatusMessage}/>
                        {/* <p className='w-5 self-center'><i onClick={()=>{updateStatusMessage(message._id, "trash")} }><ImBin /></i></p> */}
                   </div>
                 </div>
                )}

       
        </div>

    )
}
