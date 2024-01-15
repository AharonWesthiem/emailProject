import React from 'react'
import axios from 'axios'
import Message from '../message'

import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import CartContext from './context/CartContext'


export default function allMalis() { 
    
    const[emails, setEmails]= useState([])
    const {type} = useParams()
    console.log(type)
    const email= 'shmuel@gmail.com'
    
    


        useEffect(() => {
            axios.get(`http://localhost:2500/email/${type}/${email}`)
            .then((res) => {
                setEmails(res.data)
                console.log(res.data);

            })
           
        },[type])
    
    return (
        
            <table className='w-full h-screen    border-slate-400 '>
             {/* <tr>
                <th>3</th>
                <th>2</th>
                <th>1</th>
             </tr> */}
               
                
                {emails.map(mas=>
                <tr >
                     <Message key={mas} mes={mas}/>
                     </tr>)}
                
                
            </table>
        
    )
}
