import React from 'react';
import customize from '../../assets/about-icons/customize2-icon.svg';
import waiting from '../../assets/about-icons/waiting2-icon.svg';
import delivery from '../../assets/about-icons/delivery2-icon.svg';
import recieved from '../../assets/about-icons/recieved2-icon.svg';
import './how-it-works.styles.scss';


const HowItWorks = () => {
  return (
    <div className='how-it-works-container'>
      <div className="icon-container customize">
        <div className="img-container">
          <img src={customize} alt="customize-icon"/>
        </div>
        <div className="steps-container">
          <h3>Customize Product</h3>
          <p>Choose a product and pick your desired colors and patterns.</p>
        </div>
      </div>
      <div className="icon-container waiting">
        <div className="img-container">
          <img src={waiting} alt="customize-icon"/>
        </div>
        <div className="steps-container">
          <h3>Order Recieved</h3>
          <p>After payment is made, you will receive a confirmation email. Please allow up to <span>24</span> hours for email. </p>
        </div>
      </div>
      <div className="icon-container waiting">
        <div className="img-container">
          <img src={delivery} alt="customize-icon"/>
        </div>
        <div className="steps-container">
          <h3>Designing & Delivery</h3>
          <p>This is where we work on your personal order! This process takes approximately <span>1</span> week. We will send another email to notify you when your order is finished and on the way.</p>
        </div>
      </div>
      <div className="icon-container waiting">
        <div className="img-container">
          <img src={recieved} alt="customize-icon"/>
        </div>
        <div className="steps-container">
          <h3>Received</h3>
          <p>YAY, you got your order! we hope you enjoy your order. If you have any questions or comments please feel free to contact us.</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
