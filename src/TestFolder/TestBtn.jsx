import { Button } from '@mui/material';
import React from 'react';


const handleEvent = (name,e) =>{
  console.log(name, e);
}

const TestBtn = ({name})=>(
  <Button variant='contained'
  onClick={(e)=>handleEvent(name,e)}
  >{name}</Button>
)

export default TestBtn;