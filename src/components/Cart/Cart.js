import axios from 'axios'
import React,{useEffect,useState,useRef} from 'react'
import './cart.css'
import {MdAdd} from 'react-icons/md'
import {AiOutlineMinus, AiOutlineInfoCircle} from 'react-icons/ai'

function Cart() {

    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState({})
    const [processOrder, setProccessOrder] = useState(false)
    const codeRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()

    const getCartItems = async () => {
        const url = '/cart_items'
        axios.get(url)
        .then(res => {
            var items = res.data.items
            var cart = res.data.order
            setCartItems(items)
            setCart(cart)
        })
        .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        confirmationCode: codeRef.current.value,
        amount: cart.get_cart_total
      }

      const url = '/api/confirmation_code'

      axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
    }

    useEffect(() => {
        getCartItems()
    }, [])
  return (
    <div className='cart'>
        <section className='cart-items'>
          <div className='actions'>
            <h2>Cart Total: {cart.get_cart_total}</h2>
            <button className='btn btn-primary btn-sm'>Checkout</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                  return (
                    <tr>
                      <th scope="row">1</th>
                      <td><img className='product-img' src={item.product.imageURL} alt='img' /></td>
                      <td>{item.product.name}</td>
                      <td>{item.product.price}</td>
                      <td className='quantity'>{item.quantity}<div><MdAdd /> <AiOutlineMinus /></div></td>
                      <td>{item.get_total}</td>
                    </tr>
                  )
              })}  
            </tbody>
          </table>
        </section>

        <section className='checkout'>
              <div className='shipping-information'>
                <h1>Shipping Information</h1>
                <form>
                  <div>
                    <input type='text' ref={nameRef} className='form-control w-50' placeholder="Name" required/>
                  </div>

                  <div>
                    <input type='email' ref={emailRef}className='form-control w-50' placeholder="Email" required/>
                  </div>

                  <div>
                    <input type='number' className='form-control w-50' placeholder="Phone Number" required/>
                  </div>

                  <div>
                    <input type='text' className='form-control w-50' placeholder="City" />
                  </div>

                  <div>
                    <input type='text' className='form-control w-50' placeholder="Estate"/>
                  </div>

                  <div>
                    <input type='text' className='form-control w-50' placeholder="Building"/>
                  </div>

                  <div>
                    <input type='text' className='form-control w-50' placeholder="House"/>
                  </div>

                  <div>
                    <input type='text' className='form-control w-50' placeholder="House Number"/>
                  </div>

                  <div>
                    <button onClick={() => setProccessOrder(true)} type='submit' className='btn btn-success'>Process Order</button>
                  </div>
                </form>
              </div>

              {processOrder && <div className='process-order'>
                <p className='text-sm text-info'><AiOutlineInfoCircle /> Payment via M-Pesa only</p>
                <h2>Payment Process</h2>
                <ol>
                  <li>Go to M-Pesa</li>
                  <li>Paybill: 123456</li>
                  <li>Amount: {cart.get_cart_total}</li>
                </ol>

                <div>
                  <input type='text' ref={codeRef} className='form-control' placeholder="CONFIRMATION CODE"/>
                </div>
                <div>
                  <button className='btn btn-success mt-4' onClick={handleSubmit}>Submit Code</button>
                </div>
              </div>}
        </section>
    </div>
  )
}

export default Cart