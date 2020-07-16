import React, { useState, useEffect, useRef } from 'react';
import './button.styles.scss';

const Button = ({ isLoading, children, loadingText, ...props }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width)
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [children])

  const styles = () => {
    const obj = {};
    if (width & height) {
      obj["width"] = `${width}px`
      obj["height"] = `${height}px`
    }
    if (isLoading) {
      obj['background'] = 'black'
      obj['color'] = 'white'
    } else {
      obj['background'] = 'transparent'
      obj['color'] = 'black'
    }
    if (hover) {
      obj['background'] = 'black'
      obj['color'] = 'white'
    }
    return obj
  }

  return (
    <button 
      className={!isLoading ? 'button' : 'button loading-btn'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
      style={styles()}
      {...props}
    >
      {isLoading ? <p>{loadingText}</p> : children}
    </button>
  )
}

export default Button
