import React from 'react';

import './customize-product.styles.scss';

const CustomizeProduct = ({ productImg, name }) => {
  return (
    <div className='customize-product'>
      <h2 id='mb-title'>{`${name} Tie-Dye Socks`}</h2>
      <img className='product-img' src={productImg} alt={`${name} Sock`}/>
      <div className="custom-feature">
        <div className="colors-picked">
          <p className='text'>Choose 2-3 colors:</p>
        </div>
        <div className="colors">
          
        </div>
      </div>
    </div>
  )
}

export default CustomizeProduct
