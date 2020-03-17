import React, { Component } from 'react';
import { Fade } from 'react-reveal';

const ResultArea = props => {
  return (
    <Fade up cascade>
      <div className='resultArea'>
        <h2>
          {props.isBrandon ? 'This is Brandon ' : ''}
          {props.isMichael ? 'This is Michael ' : ''}
          {!props.isBrandon && !props.isMichael ? "Hmm... this is awkward. It's not Michael or Brandon." : ""}
        </h2>
        <img
          src={props.file}
          alt='Uploaded Picture'
          className='imageResult'
        />
        <button onClick={() => window.location.reload()}>TEST AGAIN</button>
      </div>
    </Fade>
  );
}

export default ResultArea;
