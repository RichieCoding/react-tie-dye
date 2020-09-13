import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import LoadingBars from './assets/gif/Spin-1s-450px.svg';
import { CartProvider } from './contexts/cart';
import ScrollToTop from './components/ScrollToTop';

// Array of backgrounds
import BgArray from './data/backgroundArray';

const Home = lazy(() => import('./Containers/Home/Home'));
const AboutPage = lazy(() => import('./Containers/AboutPage/AboutPage'));
const CustomizeProduct = lazy(() =>
  import('./components/CustomizeProduct/CustomizeProduct')
);
const CheckoutPage = lazy(() =>
  import('./Containers/CheckoutPage/CheckoutPage')
);
const CartPage = lazy(() => import('./Containers/CartPage/CartPage'));
const ShopPage = lazy(() => import('./Containers/ShopPage/ShopPage'));
const PrivacyPolicy = lazy(() =>
  import('./components/PrivacyPolicy/PrivacyPolicy')
);
const TermsAndConditions = lazy(() =>
  import('./components/TermsAndConditions/TermsAndConditions')
);

function App() {
  const [cart, setCart] = useState([]);
  const [bg, setBg] = useState(null);

  useEffect(() => {
    // Handle creating local cart
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const lsCart = JSON.parse(localStorage.getItem('cart'));
      setCart(lsCart);
    }

    // Handle creating background
    let randNum = Math.floor(Math.random() * BgArray.length);
    let currentBg = BgArray[randNum];
    let now = new Date(),
      minTimePast,
      lsTime;

    if (!localStorage.background) {
      localStorage.setItem('background', currentBg);
      localStorage.setItem('time', now);
    } else {
      lsTime = localStorage.getItem('time');
      minTimePast = new Date(lsTime);
      minTimePast.setSeconds(minTimePast.getSeconds() + 3600);
      if (now.getTime() > minTimePast.getTime()) {
        currentBg = BgArray[randNum];
        localStorage.background = currentBg;
        localStorage.time = now;
      } else {
        currentBg = localStorage.getItem('background');
      }
    }
    setBg(currentBg);
    document.body.style.backgroundImage = `url(${currentBg})`;
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CartProvider value={{ cart, setCart }}>
        <div className='App'>
          <Navbar bg={bg} />
          <Suspense
            fallback={
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
                <img style={{ width: '15%' }} src={LoadingBars} alt='loading' />
              </div>
            }
          >
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                path='/customize/:productId'
                component={CustomizeProduct}
              />
              <Route path='/shop' component={ShopPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/cart' component={CartPage} />
              <Route path='/checkout' component={CheckoutPage} />
              <Route path='/privacy-policy' component={PrivacyPolicy} />
              <Route
                path='/terms-and-conditions'
                component={TermsAndConditions}
              />
            </Switch>
          </Suspense>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
