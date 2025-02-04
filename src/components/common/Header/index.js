import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
     <h1>Home</h1>
     <div className='navlinks'>
          <Link className='link'>Careers</Link>
          <Link className='link'>About us</Link>
     </div>
    </div>
  )
}

export default Header