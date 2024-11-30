"use client"
import React, { useRef } from 'react'
import "../../Bootstrap icon/icons/bootstrap-icons.css"
import Nav from '@/app/components/Nav'

function page() {

    const dialogRef = useRef<HTMLDialogElement>(null);
    function toggleDialog(){
        if(!dialogRef.current){
            return;
        }
        dialogRef.current.hasAttribute("open")
        ? dialogRef.current?.close()
        : dialogRef.current?.showModal()
    }
  return (
    <div>
        <Nav/>
            <div className='flex justify-between'>
            <div className='first-section mt-8 ml-20'>
                <div className='box-1'>
                    <div className='issue-name'>
                        <h3 className='text-3xl capitalize font-bold mb-3'>database connection error</h3>
                        <div className='flex gap-3 mb-14'>
                            <h5 className='bg-red-300 w-12 text-center rounded-lg text-red-700 font-bold'>open</h5>
                            <h5 className='capitalize'>opened on</h5>
                            <h5 className='capitalize'>fri july 2023</h5>
                        </div>
                    </div>
                </div>
                <div className='box-2 border-2 w-12/12 p-5 border-gray-500 rounded-md'>
                    <p className='mb-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, dolores! Libero ab, voluptatum est molestias <br /> 
                        a sed natus repudiandae quaerat iusto temporibus cum aut blanditiis <br /> ipsa pariatur corrupti doloremque animi. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, dolores! Libero ab, voluptatum est molestias <br /> 
                        a sed natus repudiandae quaerat iusto temporibus cum aut blanditiis <br /> ipsa pariatur corrupti doloremque animi. <br />
                    </p>
                    <h4 className='font-bold capitalize mb-3 text-2xl'>steps to produce</h4>
                    <ol type="a" className=''>
                        <li className='mb-1'>1. launch the application</li>
                        <li className='mb-1'>2. attempt to perform any action that involves database interaction , <br />
                        such as logging in or retrieving user from databse.</li>
                        <li>3. land the application</li>
                    </ol>
                </div>
            </div>
            <div className='second-section-issue mr-20'>
                <h5 className='capitalize text-2xl font-bold text-black mt-4'>assign</h5>
                <select name="" id="" className='border p-3 w-12/12 outline-none mb-3'>
                    <option value="">ishimweemerly@gmail.com</option>
                    <option value="">fiacredeveloper@gmail.com</option>
                    <option value="">beau@gmail.com</option>
                </select><br />
                <button className='border p-3 w-64 outline-none rounded-lg mb-3 capitalize font-bold bi bi-journals'> edit issue</button><br />
                <button className='border p-3 w-64 outline-none rounded-lg capitalize font-bold bi bi-trash' onClick={toggleDialog}> delete issue</button>
                <dialog className="bg-gray-400 w-5/12 h-48 text-center pt-14 text-lg rounded-md" ref={dialogRef}>
                    <h4 className='text-white'>Are you sure do you want to delete this from Database..</h4>
                    <div className='mt-4'>
                    <button className='text-black w-28 bg-white mr-10 p-1 capitalize font-bold rounded-lg'>delete</button>
                    <button className='text-white w-28 bg-red-600 p-1 capitalize font-bold rounded-lg' onClick={toggleDialog}>cancer</button>
                    </div>
                </dialog>
            </div>
        </div>
    </div>
  )
}

export default page