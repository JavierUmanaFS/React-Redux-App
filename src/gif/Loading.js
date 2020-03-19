import React from 'react';
import loading from '../gif/giphy.gif';

function LoadingBrewery() {

  return (
    <div>
      <img src={loading} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block', transitionDuration: '10s' }} />
    </div>
  )
}

export default LoadingBrewery;