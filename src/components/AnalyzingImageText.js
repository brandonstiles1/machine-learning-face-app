import React from 'react';

import Timer from './Timer';

const AnalyzingImageText = () => {
  return (
    <div className='analyzingTextDiv'>
      <Timer />
      <p style={{fontSize: '18px', color: 'rgba(0,0,0,0.4)'}}> Analyzing Image... </p>
    </div>
  );
}

export default AnalyzingImageText;