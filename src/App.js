import './App.css';
import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import getCookie from './components/getCookie';
import Cart from './components/Cart/Cart'


function App() {

  

  useEffect( () => {
    var cart = getCookie('cart')
    if (cart == undefined) {
      cart = {}
      document.cookie = 'cart=' + JSON.stringify(cart)
    }
  }, [])
  
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
