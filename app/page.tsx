import React from 'react'
import Nav from './components/Nav'
import Image from 'next/image'
import Hollix from './images/a.jpg'

function page() {
  return (
    <div>
      <Nav/>
      <div className='flex'>        
        <div className='first-section'>
            <div className='first-card-container flex gap-7 ml-7 mt-10'>
             <div className='border w-40 h-32 p-8 font-semibold size-12 text-lg capitalize shadow-lg shadow-gray-700 rounded-lg'>
                <h5>open issue</h5>
                <h3 className='font-bold text-3xl'>11</h3>
             </div>
             <div className='border w-56 h-32 p-8 font-semibold text-lg capitalize shadow-lg shadow-gray-700 rounded-lg'>
                <h5>in progress issues</h5>
                <h3 className='font-bold text-3xl'>5</h3>
             </div>
             <div className='border w-48 h-32 p-8 font-semibold size-12 text-lg capitalize shadow-lg shadow-gray-700 rounded-lg'>
                <h5>closed issues</h5>
                <h3 className='font-bold text-3xl'>4</h3>
             </div>
            </div>

            <div className='chart border w-10/12 h-4/6 p-8 font-semibold size-12 text-lg capitalize shadow-lg shadow-gray-700 rounded-lg mt-16 ml-8'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, quasi maiores?
                     Eos nam inventore quas consequatur, quasi dignissimos quisquam 
                     necessitatibus quibusdam maxime amet unde voluptatibus et possimus aperiam optio nulla.</p>
            </div>
        </div>

        <div className='second-section mt-0'>
            <div className='lat-issues border w-11/12 h-full p-8 font-semibold size-12 text-lg capitalize shadow-lg shadow-gray-700 rounded-lg mt-16 ml-8'>
                <h4 className='font-bold capitalize text-xl mb-10'>latest issue</h4>

                <div className='items-container'>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='mb-1'>Database connection Error...</h5>
                            <h4 className='mb-3 bg-green-200 w-14 p-1 rounded-lg text-sm text-green-700'>closed</h4>
                        </div>
                        <Image
                        src={Hollix}
                        alt='this is violation'
                        width={70}
                        height={10}
                        className='rounded-full mt-2'
                        />
                    </div>
                    <hr className='mt-3'/>

                    <div className='flex justify-between'>
                        <div>
                            <h5 className='mb-1'>wesbite slow performance</h5>
                            <h4 className='mb-3 bg-blue-300 max-w-28 p-1 rounded-lg text-sm text-blue-800'>in progress</h4>
                        </div>
                        <Image
                        src={Hollix}
                        alt='this is violation'
                        width={70}
                        height={10}
                        className='rounded-full mt-2'
                        />
                    </div>
                    <hr className='mt-3'/>

                    <div className='flex justify-between'>
                        <div>
                            <h5 className='mb-1'>user registration bug</h5>
                            <h4 className='mb-3 bg-red-200 w-14 p-1 rounded-lg text-sm text-red-600'>open</h4>
                        </div>
                        <Image
                        src={Hollix}
                        alt='this is violation'
                        width={70}
                        height={10}
                        className='rounded-full mt-2'
                        />
                    </div>
                    <hr className='mt-3'/>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='mb-1'>payment gateway integration...</h5>
                            <h4 className='mb-3 bg-blue-300 max-w-28 p-1 rounded-lg text-sm text-blue-800'>in progress</h4>
                        </div>
                        <Image
                        src={Hollix}
                        alt='this is violation'
                        width={70}
                        height={10}
                        className='rounded-full mt-2'
                        />
                    </div>
                    <hr className='mt-3'/>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='mb-1'>design overhul</h5>
                            <h4 className='mb-3 bg-red-200 w-14 p-1 rounded-lg text-sm text-red-600'>open</h4>
                        </div>
                        <Image
                        src={Hollix}
                        alt='this is violation'
                        width={70}
                        height={0}
                        className='rounded-full mt-2'
                        />
                    </div>
                    <hr className='mt-3'/>
                </div>

                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus esse reprehenderit quas repellendus quis sint saepe neque ad expedita
                libero facere ratione officiis, iure fugiat. Aperiam numquam veritatis praesentium quo?</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page