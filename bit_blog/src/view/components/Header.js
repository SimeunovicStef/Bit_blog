import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (<>
    <h1 className="title">BIT BLOG</h1>
    <nav>
      <ul className='navMenu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/authors'>Authors</Link></li>
        <li><Link to='/about'>About</Link></li>

      </ul>
    </nav>
  </>)
}
export default Header