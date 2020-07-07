import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './Containers/Home/Home';
import CustomizeProduct from './components/CustomizeProduct/CustomizeProduct';
import { CartProvider } from './contexts/cart';
import CartPage from './Containers/CartPage/CartPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [cart, setCart] = useState([{
    colorsPicked: ['Black, Teal'],
    price: 15,
    sockColor: 'White',
    sockImg: "/static/media/Nike-Sock.73a753e7.png",
    sockName: "Nike Tie-Dye Socks"
  }]);
  const cartObj = { cart, setCart };
  return (
    <Router>
      <ScrollToTop />
      <CartProvider value={cartObj}>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customize/:productId' component={CustomizeProduct} />
            <Route path='/cart' component={CartPage} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
