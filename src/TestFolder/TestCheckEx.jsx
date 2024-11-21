import { Button } from '@mui/material';
import React, { useState } from 'react';

function TestCheckEx(props) {

  const [isPinned, setPinned] = useState(false);
  const togglePinned = () => {
    setPinned(!isPinned);
  }

  return (
    <div>
      <Button variant="outlined"
      onClick={togglePinned}
      >
      Pinn This!! {isPinned && 'v'}
      </Button>
    </div>
  );
}

export default TestCheckEx;