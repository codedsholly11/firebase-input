import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center justify-around'>
      <p><Link to='/'>Home</Link></p>
      <p><Link to='/Signup'>sign</Link></p>
      <p><Link to='/Login'>Login</Link></p>
    </div>
  )
}

export default Nav
