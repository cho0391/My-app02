import { Button } from '@mui/material';
import React from 'react';

function TestNumberCounter(props) {
  function handleClick() {
    console.log('Event1');
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Button1</Button>
      <Button variant="contained" onClick={()=>{console.log('Event2')}}>Button2</Button>
    </div>
  );
}

export default TestNumberCounter;