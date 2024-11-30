"use client"
import React, { useState } from 'react'
import {data} from '../../data'

function page() {
    const [search,setSearch] = useState("");
  return (
    <div>

        <input type="text" 
        className='outline-red-600 mt-4 ml-7 capitalize w-96 h-10 p-7' 
        placeholder='deal with search here ma nigga..'
        onChange={(e)=>{
            setSearch(e.target.value);
        }}/>
        <br /><br />
        
        <table border={3} className='mt-4 ml-14'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {data
                .filter((item)=>{
                    return search.toLowerCase() === ''
                    ? item
                    :item.first_name.toLowerCase().includes(search);
                })
                .map((item)=>(
                    <tr>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default page