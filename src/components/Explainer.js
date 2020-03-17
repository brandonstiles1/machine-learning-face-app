import React from 'react';
import { Fade } from 'react-reveal';

const Explainer = () => {
  return (
    <Fade up cascade>
      <div className='explainerContainer'>
        <h1> Is this Brandon or Michael?</h1>
        <p> Some people have trouble telling my brother & I apart.</p>
        <p> To combat this problem, here's a machine learning app, built with Google's Tensorflow & the A.I.-powered Face-API that can help you with this discernment. </p>
        <p> Upload a picture you think might be myself (or Michael) & it'll get you all sorted out!</p>
      </div>
    </Fade>
  );
}

export default Explainer;