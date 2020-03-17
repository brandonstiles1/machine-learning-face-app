import React from 'react';

import Timer from './Timer';

const AnalyzingImageText = () => {
  return (
    <div className='analyzingTextDiv'>
      <Timer />
      <p style={{fontSize: '18px', color: '#495fcc'}}> Analyzing Image... </p>
    </div>
  );
}

export default AnalyzingImageText;