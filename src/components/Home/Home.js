import React, {useEffect, useState} from 'react'
import banner from '../../assets/banner.jpg'
import './home.css'
import axios from 'axios'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import updateCart from '../updataCart'




function Home() {


  const [products, setProducts] = useState([])
  


  const getProducts = () => {
    const url = '/all_products'
    axios.get(url)
    .then((response) =>{ 
      setProducts(response.data)
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }


  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className='home'>
        <section className='landing'>
            <img src={banner} className='banner' alt='banner' />
            <h2>Lowest prices in Nairobi</h2>  
            <a href='#products' className='btn btn-primary border-primary rounded view-items'>View items <AiOutlineArrowDown className='view-items-icon'/></a> 
        </section>

        <section className='products border-top border-warning' id='products'>
          {products.map((product) => {

            let actualPriceDiscountClass = product.actual_price !== product.discount_price ? 'product-actual-price' : 'no-discount'
            let productId = (product.id).toString()
            return (
            
            <div key={product.id} className='product'>
              <img src={product.imageURL} alt='img' className='product-img'/>
              <div>
                <h1 className='product-name'>{product.name}</h1>
                <p className={actualPriceDiscountClass}>{product.actual_price}</p>
                {product.actual_price !== product.discount_price && <p className='product-discount-price'>{product.discount_price}</p>}
                <button onClick={() => updateCart(product.id, 'add')} className='btn btn-primary'><BsFillCartPlusFill /></button>
              </div>
            </div>
            
            )
          })}
        </section>

        <section className='contact-us border-warning border-top' id='contact-us'>
            <p>Need any help? Reach us on whatsapp at 0790016054</p>
        </section>
    </div>
  )
}

export default Home