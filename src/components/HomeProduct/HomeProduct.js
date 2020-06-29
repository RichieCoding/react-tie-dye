import React from 'react';

import './home-product.styles.scss';

const HomeProduct = ({ productImg, name, click, color }) => {
  return (
    <section className={`home-product`}>
      <img id='sock-mockup' src={productImg} alt='' />
      <div className='product-info-container'>
        <div className='product-info'>
          <h2 className='product-title'>{`${name} Tie-Dye Socks`}</h2>
          <p className='product-description product-price'>{color}</p>
          <p className='product-description product-price'>Price: $15</p>
          <p className='product-description product-size'>Kids & Adult</p>
          <p className='product-description product-custom'>
            Choose 2-3 colors
          </p>
          <button onClick={() => click(color)} id='customize-btn'>
            Customize
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
