import React from 'react'
import { Link } from 'react-router-dom'


export default function Xontact() {
  return (
   <>
   <div className='div'>
      <Link className='g' to='/'>
        Home
      </Link>
      <Link className='g' to='/about'>
        About
      </Link>
      <Link className='g' to='/service'>
        Service
      </Link>
      <Link className='g' to='/contact'>
        Contact
      </Link>
      <h1>Contact</h1>
    </div>
   </>

  )
}
