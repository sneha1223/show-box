import React from 'react'
import "./Navbar.css";


function Navbar() {
  
  return (
    <div className='navbar'>
    <img className='logo' src="https://i.pinimg.com/600x315/bb/4b/50/bb4b50638c4dbec590e879d1c9e4f33f.jpg" alt=" Logo" />
    <h1 className='movie'>show box</h1>
    <input className="search-bar"  type={"text"} placeholder="  search here.."></input>
        
    </div>
  )
}

export default Navbar