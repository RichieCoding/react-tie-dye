import React, { useState, useEffect, useRef } from 'react';
import './button.styles.scss';

const Button = ({ isLoading, children, loadingText, ...props }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width)
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [children])

  return (
    <button 
      className='button'
      ref={ref}
      style={width && height ? {width: `${width}px`, height: `${height}px`} : {}}
      {...props}
    >
      {isLoading ? <p>{loadingText}</p> : children}
    </button>
  )
}

export default Button
