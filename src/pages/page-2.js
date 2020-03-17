import React from "react";
import { Link } from "gatsby";
import { Fade } from 'react-reveal';

import NavBar from '../components/NavBar';


const SecondPage = () => (
  <div className='page-2'>
    <NavBar />
    <div className='page-2-container'>
      <Fade down cascade>
        <h1
          style={{ color: 'white', marginBottom: '40px' }}
        >
          About This App
        </h1>
      </Fade>
      <p>
        I custom-built this app to experiment with some new advances in machine learning technology.
      </p>
      <p>
        The app is built with Google's <strong>Tensorflow.js</strong> & <strong>Face-API.js</strong>, a framework that uses convultional nerual networks to perform facial recognition.
      </p>
      <p>
        The front-end UI was built with <strong>Gatsby.js</strong>, a modern web framework powered by <strong>React</strong>.
      </p>
      <p>
        Additional styling provided by Google's <strong>Material-UI</strong> & <strong>Shape.so's</strong> animated icons. Animations were created with <strong>React Reveal</strong>.
      </p>
      <div className='aboutPageButtonContainer'>
        <button className='returnButton'>
          <Link to='/' style={{color:'white'}}>TRY THE APP</Link>
        </button>
        <button className='contactButton'>
          <a href='https://brandonstiles.dev' style={{color:'white'}}>CONTACT ME</a>
        </button>
      </div>
    </div>
  </div>
)

export default SecondPage
