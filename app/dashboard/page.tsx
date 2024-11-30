import React from 'react'
import Nav from '../components/Nav'
import '../Bootstrap icon/icons/bootstrap-icons.css'

function page() {
  return (
    <div>
        <Nav/>
        <div className='top-of-table flex justify-between mt-7'>
            <select className="border border-neutral-900 p-2 capitalize font-serif rounded ml-24" name="" id="" >
                <option value="">open</option>
                <option value="">in progress</option>
                <option value="">closed</option>
            </select>
            <button className='bg-blue-700 text-white p-2 rounded-lg capitalize font-bold mr-24'>new issue</button>
        </div>

        <table className='border border-10 border-collapse m-8'>
                <thead>
                    <tr className='capitalize mb-4'>
                        <th className='w-6/12 text-start pr-1 pl-4 pt-2'>
                        <button className='bi bi-arrow-up'></button> issue</th>
                        <th className='w-5/12 text-start'>status</th>
                        <th className='w-44'>created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='pr-10'>
                        <td className='pl-3 capitalize'>database connection error</td>
                        <td className='capitalize'>in progress</td>
                        <td className='capitalize'>fri july 1907</td>
                    </tr>
                </tbody>
        </table>

    </div>
  )
}

export default page