import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <header>
    <nav className='navbar navbar-inverse bg-inverse'>
      <Link className='navbar-brand' to='/'>The App</Link>
    </nav>
  </header>
)

export default Header
