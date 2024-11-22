import React, { useState } from 'react';
import Page from './Page';
import './ContextTest.css';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

// React Context
function ContextTest(props) {
  
  const [isDark, setIsDark] = useState(false);

  return (
    <UserInfoContext.Provider value={"사용자"}>
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page />
    </ThemeContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default ContextTest;