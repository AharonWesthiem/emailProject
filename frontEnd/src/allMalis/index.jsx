import React, { useContext } from 'react'
import axios from 'axios'
import Message from '../message'
import { ImBin } from "react-icons/im";
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
        <table className='w-full border-slate-400 '>

            <tbody  className=' w-10/12 '>
                {emails.map((message) =>
                    <tr className='w-full flex justify-between  shadow-md border   p-2  '>
                        <Message key={message} mes={message} handelReadMessage={handelReadMessage}/>
                        <td className='self-center'><i onClick={()=>{updateStatusMessage(message._id, "trash")} }><ImBin /></i></td>
                    </tr>

                )}

            </tbody>
        </table>
        </div>

    )
}
