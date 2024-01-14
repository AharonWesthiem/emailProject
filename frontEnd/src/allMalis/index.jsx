import React from 'react'
import axios from 'axios'
import Message from '../message'

import  { useEffect, useState } from 'react'
// import CartContext from './context/CartContext'


export default function allMalis() { 
    const email= 'shmuel@gmail.com'
    const type = 'to'
    
    const[emails, setEmails]= useState([])


        useEffect(() => {
            axios.get(`http://localhost:2500/email/${type}/`+ email)
            .then((res) => {
                setEmails(res.data)
                console.log(res.data);

            })
           
        }, [])
    
    return (
        
            <table className='w-full h-screen    border-slate-400 '>
             {/* <tr>
                <th>3</th>
                <th>2</th>
                <th>1</th>
             </tr> */}
               
                
                {emails.map(mas=>
                <tr className=''>
                     <Message mes={mas}/>
                     </tr>)}
                
                
            </table>
        
    )
}
