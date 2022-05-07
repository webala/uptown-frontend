import React, {useState, useEffect} from 'react'
import './header.css'
import {AiOutlineShoppingCart,AiOutlineMenu} from 'react-icons/ai'
import axios from 'axios'
import {Link} from 'react-router-dom'




function Header() {
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    getCartItems()
  })

  const  getCartItems = async () => {
    const url = '/get_cart_total'
    await axios.get(url)
    .then(res => {
      let cartItems = res.data.cart_items
      setCartItems(cartItems)
    })
    .catch(error => console.log(error))
  }

 
  return (
    <header className='header'>
        <nav>
            <h1>Uptown Liquor</h1>
            <div className='nav-items'>
                <a href='#'><Link to={{pathname: '/cart'}}><AiOutlineShoppingCart /></Link></a><span class='text-warning text-sm'>{cartItems}</span>
                <AiOutlineMenu className='menu-icon'/>
            </div>
        </nav>
    </header>
  )
}

export default Header