import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';


function Content() {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserInfoContext);
  return (
    <body 
    className="content"
    style={{
      backgroundColor : isDark ? 'black' : 'lightgray',
      color : isDark ? 'white' : 'black'
    }}>
      <p>{user}님, 좋은 하루 되세요.</p>
    </body>
  );
}

export default Content;