import './App.css';
import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import getCookie from './components/getCookie';

function App() {

  useEffect( () => {
    var cart = JSON.parse(getCookie('cart'))

    if (cart == undefined) {
      cart = {}
      console.log('Cart was created')
      document.cookie = 'cart=' + JSON.stringify(cart) + ';domain=;path=/'
    }
  }, [])
  
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
