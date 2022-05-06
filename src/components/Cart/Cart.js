import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Cart() {

    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState({})

    const getCartItems = async () => {
        const url = '/cart_items'
        axios.get(url)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getCartItems()
    })
  return (
    <div className='cart'>
        
    </div>
  )
}

export default Cart