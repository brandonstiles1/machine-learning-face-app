import React, { Component } from 'react';
import { Fade } from 'react-reveal';

import TimerWhite from './TimerWhite';

const LoadingContainer = () => {
  return (
    <Fade down>
      <div className='loadingContainer'>
        <p className='loadingFont'>Loading facial recognition models...</p>
        <TimerWhite />
      </div>
    </Fade>
  );
}

export default LoadingContainer;