import React from 'react';

function TempInput({value, unit, onChange}) {
  return (
    <div>
      <div>
        <input 
        type='number'
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder='In ${unit}'
        />
        <span>{unit}</span>
      </div>
    </div>
  );
}

export default TempInput;