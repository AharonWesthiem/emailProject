import React from 'react'
import axios from 'axios'
import Message from '../message'

import React, { useEffect, useState } from 'react'

export default function allMalis() {
    const email= 'shmuel@gmail.com'
    const[emails, setEmails]= useState([])
    const data = () => {
        axios.get('http://192.168.1.187:2500/email')
            .then((response) => {
                setEmails(response.data)

            })

        useEffect(() => {
            data()
        }, [])
    }
    return (
        <div>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                {emails.map(mas=> <Message message={mas}/>)}
            </table>
        </div>
    )
}
