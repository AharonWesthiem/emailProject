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

    if (!type || type !== "to" && type !== "trash") type = "from"


    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    useEffect(() => {
        axios.get(`http://localhost:2500/email/${type}`)
            .then((res) => {
                setEmails(res.data)

            })

    }, [type])

    const nav = useNavigate()

    const updateStatusMessage = async (id,status) => {
       await axios.put(`http://localhost:2500/${id}/${status}`)
        .then(res => res.data)
        console.log(res.data);

    }

    const handelReadMessage = (messageDetails) => {
        nav('/message', { state: { messageDetails } })
         updateStatusMessage(messageDetails._id, "read")
    }


    return (

        <table className='w-full  border-slate-400 '>

            <tbody>
                {emails.map((message) =>
                    <tr className='w-full flex justify-between  shadow-md border   p-2  '
                        onClick={() => handelReadMessage(message)}  >
                        <Message key={message} mes={message} />
                        <td className='self-center'><i onClick={()=>{updateStatusMessage(message._id, "trash")} }><ImBin /></i></td>
                    </tr>

                )}

            </tbody>
        </table>

    )
}
