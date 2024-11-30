import React from 'react'
import Image from 'next/image'
import Hollix from '../images/a.jpg'
import '../Bootstrap icon/icons/bootstrap-icons.css'

function Nav() {
  return (
    <>
        <div className='flex justify-between pt-4 pr-20 pl-24 pb-4'>
            <ul className='flex pt-3 text-black font-semibold'>
              <li className='tracker-logo capitalize-none pr-7 text-2xl bi bi-bug-fill font-bold'>trace</li>
                <li className='pr-3 capitalize'>home</li>
                <li className='capitalize'>issue</li>
            </ul>
            <Image
            src={Hollix}
            alt="this is worda bro for sure"
            width={50}
            height={50}
            quality={100}
            className='rounded-3xl'
            />
        </div>
        <hr className='bg-black text-red-600'/>
    </>
  )
}

export default Nav