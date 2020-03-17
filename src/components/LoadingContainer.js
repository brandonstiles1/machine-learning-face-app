import React, { Component } from 'react';
import { Fade } from 'react-reveal';

const LoadingContainer = () => {
  return (
    <Fade down>
      <div className='loadingContainer'>
        <p className='loadingFont'>Loading facial recognition models...</p>
      </div>
    </Fade>
  );
}

export default LoadingContainer;