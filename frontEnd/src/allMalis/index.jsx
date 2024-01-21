import React from 'react'
import axios from 'axios'
import Message from '../message'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tokenContext from '../context/tokenContexst'
// import CartContext from './context/CartContext'


export default function allMalis() {

    const [emails, setEmails] = useState([])
    let { type } = useParams()
    console.log(type)
    const email = 'shmuel@gmail.com'
    if(!type || type!=="to" && type !=="trash" ) type = "from"


const {token} = useContext(tokenContext)
console.log(token);
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    useEffect(() => {
        axios.get(`http://localhost:2500/email/${type}`
         

        )
            .then((res) => {
                setEmails(res.data)
                console.log(res.data);

            })

    },[type])

    return (

        <table className='w-full      '>

            <tbody>
            {emails.map(mas =>
                <tr >
                    <Message key={mas} mes={mas} />

                </tr>)}

            </tbody>
        </table>

    )
}
