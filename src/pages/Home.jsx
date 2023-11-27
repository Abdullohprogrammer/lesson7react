import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import '../App.css'

export default function Home() {
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
      <h1>Home</h1>
    </div>
    </>
    
  )
}
