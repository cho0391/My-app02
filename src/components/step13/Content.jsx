import React from 'react';


function Content({isDark}) {
  return (
    <body 
    className="content"
    style={{
      backgroundColor : isDark ? 'black' : 'lightgray',
      color : isDark ? 'white' : 'black'
    }}>
      <p>홍길동님, 좋은 하루 되세요.</p>
    </body>
  );
}

export default Content;