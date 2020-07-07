import React from 'react';
import { Link } from 'react-router-dom';
import './home-product.styles.scss';

const HomeProduct = ({ productImg, name, color }) => {
  return (
    <section className={`home-product`}>
      <img id='sock-mockup' src={productImg} alt='' />
      <div className='product-info-container'>
        <div className='product-info'>
          <h2 className='product-title'>{`${name}`}</h2>
          <p className='product-description product-price'>{color}</p>
          <p className='product-description product-price'>Price: $15</p>
          <p className='product-description product-size'>Kids & Adult</p>
          <p className='product-description product-custom'>
            Choose 2-3 colors
          </p>
          <Link to={`/customize/${color} ${name}`}>
            <button id='customize-btn'>
              Customize
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
