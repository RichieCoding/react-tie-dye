import React, { useState } from 'react';
import './details.styles.scss';

const Details = ({ shipping, setPage, names, inputNames, handleInputs }) => {
  const [missingField, setMissingField] = useState(false)
  const handleNextPage = () => {
    let len = inputNames[0].length;
    let len2 = inputNames[1].length;
    for (let i = 0; i < len; i++) {
      if (inputNames[0][i] === '') {
        setMissingField(true)
        return
      }
    }
    if (shipping === 'Shipping') {
      for (let i = 0; i < len2; i++) {
        if (inputNames[1][i] === '') {
          setMissingField(true)
          return
        }
      }
    } 
    setPage(2)
  }
  return (
    <div className='details-container'>
      <div className='form-container'>
        {names[0].map((name, index) => (
          <div key={index} className='input-container'>
            <label htmlFor={name}>{name}</label>
            <input
              id={name}
              value={inputNames[0][index]}
              type='text'
              name={name}
              onChange={(e) => handleInputs[0][index](e.target.value)}
            />
          </div>
        ))}
        {shipping === 'Shipping' ? (
          <React.Fragment>
            {names[1].map((name, index) => (
              <div key={index} className='input-container'>
                <label htmlFor={name}>{name}</label>
                <input
                  id={name}
                  value={inputNames[1][index]}
                  type='text'
                  name={name}
                  onChange={(e) => handleInputs[1][index](e.target.value)}
                />
              </div>
            ))}
          </React.Fragment>
        ) : null}
      </div>
      <div className="error">
        {
          missingField ? <p style={{color: 'black'}}>* Please enter into all fields</p> : null
        }
      </div>
      <div className='page-btn'>
        <button onClick={() => setPage(0)}>Back</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Details;
