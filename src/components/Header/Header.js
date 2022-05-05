import React from 'react'
import './header.css'
import {AiOutlineShoppingCart,AiOutlineMenu} from 'react-icons/ai'

function Header() {
  return (
    <header className='header'>
        <nav>
            <h1>Uptown Liquor</h1>
            <div className='nav-items'>
                <a href='#'> <AiOutlineShoppingCart /></a>
                <AiOutlineMenu className='menu-icon'/>
            </div>
        </nav>
    </header>
  )
}

export default Header