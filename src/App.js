import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './Containers/Home/Home';
import CustomizeProduct from './components/CustomizeProduct/CustomizeProduct'

import nike from './assets/imgs/Nike-Sock.png';
import blackNike from './assets/imgs/Nike-Black-Sock.png';
import greyNike from './assets/imgs/Nike-Grey-Sock.png';

function App() {
  const [page, setPage] = useState('home')
  const renderPage = () => {
    switch(page) {
      case 'home':
        return <Home click={setPage} />
      case 'White':
        return <CustomizeProduct productImg={nike} name={'Nike'} />
      case 'Black':
        return <CustomizeProduct productImg={blackNike} name={'Nike'} />
      case 'Grey':
        return <CustomizeProduct productImg={greyNike} name={'Nike'} />
      default: 
        return <Home />
    }
  }
  return (
    <div className='App'>
      <Navbar />
      {renderPage()}
    </div>
  );
}

export default App;
