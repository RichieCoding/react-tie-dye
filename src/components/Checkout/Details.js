import React, { useState } from 'react';
import './details.styles.scss';

const Details = ({ shipping, setPage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  return (
    <div className='details-container'>
      <div className='input-container'>
        <label htmlFor='name'>Full Name</label>
        <input
          value={name}
          id='name'
          onChange={(e) => setName(e.target.value)}
          type='text'
        />
      </div>
      <div className='input-container'>
        <label htmlFor='email'>Email</label>
        <input
          value={email}
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          type='text'
        />
      </div>
      <div className='input-container'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          value={phone}
          id='phone'
          onChange={(e) => setPhone(e.target.value)}
          type='text'
        />
      </div>
      {shipping === 'Shipping' ? (
        <React.Fragment>
          <div className='input-container'>
            <label htmlFor='address'>Address</label>
            <input
              value={address}
              id='address'
              onChange={(e) => setAddress(e.target.value)}
              type='text'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='state'>State</label>
            <input
              value={state}
              id='state'
              onChange={(e) => setState(e.target.value)}
              type='text'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='city'>City</label>
            <input
              value={city}
              id='city'
              onChange={(e) => setCity(e.target.value)}
              type='text'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='zipcode'>ZipCode</label>
            <input
              value={zipcode}
              id='zipcode'
              onChange={(e) => setZipCode(e.target.value)}
              type='text'
            />
          </div>
        </React.Fragment>
      ) : null}
      <div className="page-btn">
        <button onClick={() => setPage(0)}>Back</button>
        <button onClick={() => setPage(2)}>Next</button>
      </div>
      {/* <label htmlFor='email'>Email</label>
      <input
        value={email}
        name='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        type='text'
      /> */}
    </div>
  );
};

export default Details;
