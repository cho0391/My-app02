import React, { useState } from 'react';
import Page from './Page';
import './ContextTest.css';

// React Context : 
function ContextTest(props) {
  
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default ContextTest;