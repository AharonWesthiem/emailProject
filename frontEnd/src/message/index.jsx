import React from 'react'

export default function Messege({ mes }) {
    const { _id, from, to, message } = mes

    return (
        <>

            <td className='p-2' >from:  {from} <br />   to:  {to}</td>
            <td className='flex justify-center items-center grow ' > {message}</td>
            {/* <td className=''>{_id}</td> */}
        </>

    )
}
