import React from 'react'

export default function Messege({ mes }) {
    const { _id, from, to, message } = mes

    return (
        <>

            <td className='flex flex-row justify-left p-2' >from:  {from} <br /> to:  {to}</td>
            <td className='text-center'>{message}</td>
            {/* <td className=''>{_id}</td> */}
        </>

    )
}
