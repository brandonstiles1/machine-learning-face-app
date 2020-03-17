import React from 'react';
import { Fade } from 'react-reveal';

const Explainer = () => {
  return (
    <div className='explainerContainer'>
    <Fade down cascade>
        <h1>Brandon or Michael?</h1>
    </Fade>
        <p> Some people have trouble telling my brother & I apart.</p>
        <p> To combat this problem, here's a machine learning app, built with Google's Tensorflow & the A.I.-powered Face-API that can help you with this discernment. </p>
        <p> Upload a picture you think might be myself (or Michael) & it'll get you all sorted out!</p>
      </div>
  );
}

export default Explainer;