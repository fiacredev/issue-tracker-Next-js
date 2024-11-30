"use client"
import React from 'react'
import Nav from '@/app/components/Nav'
import TipTapPage from '@/app/components/mdx/TipTapPage'

function page() {
  return (
    <div>
      <Nav/>
      <div style={{marginTop:"-47px"}}>
      <TipTapPage/>
      </div>
    </div>
  )
}

export default page