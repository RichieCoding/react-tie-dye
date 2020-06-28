import React from 'react';

import './home.styles.scss';

import nike from '../../assets/imgs/Nike-Sock.png';
import adidas from '../../assets/imgs/Adidas-Sock.png';
import HomeProduct from '../../components/HomeProduct/HomeProduct';
import CustomizeProduct from '../../components/CustomizeProduct/CustomizeProduct';

const Home = () => {
  return (
    <div className='home-container'>
      <CustomizeProduct productImg={nike} name={'Nike'} />
      {/* <HomeProduct productImg={nike} name={'Nike'} />
      <HomeProduct productImg={adidas} name={'Adidas'} /> */}
    </div>
  );
};

export default Home;
