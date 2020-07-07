import React from 'react';

import './home.styles.scss';

import nike from '../../assets/imgs/Nike-Sock.png';
import blackNike from '../../assets/imgs/Nike-Black-Sock.png';
import greyNike from '../../assets/imgs/Nike-Grey-Sock.png';
import HomeProduct from '../../components/HomeProduct/HomeProduct';

const Home = ({ click }) => {
  return (
    <div className='home-container'>
      <HomeProduct click={click} productImg={nike} name={'Nike Tie-Dye Socks'} color={'White'} />
      <HomeProduct click={click} productImg={blackNike} name={'Nike Tie-Dye Socks'} color={'Black'} />
      <HomeProduct click={click} productImg={greyNike} name={'Nike Tie-Dye Socks'} color={'Grey'} />
    </div>
  );
};

export default Home;
