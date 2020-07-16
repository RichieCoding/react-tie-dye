import React from 'react';

import './home.styles.scss';

import nike from '../../assets/imgs/white-800.png';
import blackNike from '../../assets/imgs/black-800.png';
import greyNike from '../../assets/imgs/grey-800.png';
import HomeProduct from '../../components/HomeProduct/HomeProduct';

const Home = ({ click }) => {
  return (
    <div className='home-container'>
      <HomeProduct click={click} productImg={nike} name={'Nike Tie-Dye Socks'} color={'White'} />
      <HomeProduct click={click} productImg={blackNike} name={'Nike Tie-Dye Socks'} color={'Black'} />
      <HomeProduct click={click} productImg={greyNike} name={'Nike Tie-Dye Socks'} color={'Grey'} kids={false} />
    </div>
  );
};

export default Home;
