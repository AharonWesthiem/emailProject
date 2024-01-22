import React, { useContext } from 'react'
import axios from 'axios'
import Message from '../message'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tokenContext from '../context/tokenContexst'



export default function allMalis() {

    const [emails, setEmails] = useState([])
    let { type } = useParams()
    console.log(type)
    const { token } = useContext(tokenContext)
    console.log(token);
    if (!type || type !== "to" && type !== "trash") type = "from"


    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    useEffect(() => {
        axios.get(`http://localhost:2500/email/${type}`)
            .then((res) => {
                setEmails(res.data)
                console.log(res.data);

            })

    }, [type])

    return (

        <table className='w-full  border-slate-400 '>

            <tbody>
                {emails.map((message) =>
                    <tr className='w-full flex justify-between  shadow-md border   p-2  '>
                        <Message key={message} mes={message} />

                    </tr>)}

            </tbody>
        </table>

    )
}
