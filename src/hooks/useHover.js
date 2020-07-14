import { useState } from 'react';

function useHover() {
  const [hovering, setHovering] = useState(false)

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut
  }

  return [hovering, attrs]
}

export default useHover;