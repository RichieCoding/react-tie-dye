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
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
// Array of backgrounds
import BgArray from './data/backgroundArray'; 


function App() {
  const [cart, setCart] = useState([]);
  const [bg, setBg] = useState(null)

  useEffect(() => {
    // Handle creating local cart
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      const lsCart = JSON.parse(localStorage.getItem('cart'));
      setCart(lsCart)
    }

    // Handle creating background
    let randNum = Math.floor(Math.random() * BgArray.length);
    let currentBg = BgArray[randNum];
    let now = new Date(),
        minTimePast,
        lsTime;

    if (!localStorage.background) {
      localStorage.setItem("background", currentBg)
      localStorage.setItem("time", now)
    } else {
      lsTime = localStorage.getItem("time")
      minTimePast = new Date(lsTime)
      minTimePast.setSeconds(minTimePast.getSeconds()+3600)
      if (now.getTime() > minTimePast.getTime()) {
        currentBg = BgArray[randNum]
        localStorage.background = currentBg
        localStorage.time = now
      } else {
        currentBg = localStorage.getItem("background")
      }
    }
    setBg(currentBg)
    document.body.style.backgroundImage = `url(${currentBg})`
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <CartProvider value={{ cart, setCart }}>
        <div className='App'>
          <Navbar bg={bg} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customize/:productId' component={CustomizeProduct} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/privacy-policy' component={PrivacyPolicy} />
            <Route path='/terms-and-conditions' component={TermsAndConditions} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
