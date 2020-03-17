import React, { Component } from 'react';
import { Fade } from 'react-reveal';

import TimerWhite from './TimerWhite';

const LoadingContainer = () => {
  return (
    <div className='loadingContainer'>
      <Fade down>
        <p className='loadingFont'>Loading facial recognition models...</p>
      </Fade>
      <TimerWhite />
    </div>
  );
}

export default LoadingContainer;