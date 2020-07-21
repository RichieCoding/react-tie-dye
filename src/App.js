import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './Containers/Home/Home';
import CustomizeProduct from './components/CustomizeProduct/CustomizeProduct';
import { CartProvider } from './contexts/cart';
import CartPage from './Containers/CartPage/CartPage';
import ScrollToTop from './components/ScrollToTop';
import CheckoutPage from './Containers/CheckoutPage/CheckoutPage';
import ShopPage from './Containers/ShopPage/ShopPage';
import AboutPage from './Containers/AboutPage/AboutPage';

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      const lsCart = JSON.parse(localStorage.getItem('cart'));
      setCart(lsCart)
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <CartProvider value={{ cart, setCart }}>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customize/:productId' component={CustomizeProduct} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/checkout' component={CheckoutPage} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
