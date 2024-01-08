import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='Nav'>
      <ul>
        <Link to="/">
          <img src={require("./dogee.png")} alt="imag" />
        </Link>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        
        <Link to="blogs"><li>Blogs</li></Link>
        <Link to="contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar

