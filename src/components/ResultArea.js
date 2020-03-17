import React, { Component } from 'react';
import { Fade } from 'react-reveal';

const ResultArea = props => {
  return (
    <Fade up cascade>
      <div className='resultArea'>
        <h2>
          {props.isBrandon ? 'This is Brandon!' : ''}
          {props.isMichael ? 'This is Michael' : ''}
          {!props.isBrandon && !props.isMichael ? "Well this is awkward... it's not Michael or Brandon." : ""}
        </h2>
        <img
          src={props.file}
          alt='Uploaded Picture'
          className='imageResult'
        />
      </div>
    </Fade>
  );
}

export default ResultArea;
