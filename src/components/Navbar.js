import {Link} from 'react-router-dom'

import './Navbar.css'

import Searchbar from './Searchbar'

import React from 'react'

export default function Navbar() {
  
  return (
    <div className='navbar'>
        <nav>
            <Link to = '/' className='brand'>
              <h1>Veggie Hub</h1>
            </Link>
            <Searchbar/>
            <Link to = '/Create'>
               <h1>Create Recipe</h1>
            </Link>
        </nav>
    </div>
  )
}
