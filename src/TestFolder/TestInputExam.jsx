import React from 'react';
import '../components/step02/inputExam.css';
import { TextField } from '@mui/material';

function TestInputExam(props) {
  return (
    <div className='center'>
      <input 
      onFocus={()=>console.log('onFocus')}
      onBlur={()=>console.log('onBlur')}
      />      
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        onChange={(e)=>console.log(e.target.value)}
      />
      <TextField id="standard-basic" label="Standard" variant="standard"
        onKeyUp={(e)=>console.log(e.key,'UP')}
      />
    </div>
);

}

export default TestInputExam;