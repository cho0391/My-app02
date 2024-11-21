import React, { useState } from 'react';

// 하위 컴포넌트
function TestProfile({ name, status, onUpdateStatus }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Status : {status}</p>
      <button onClick={() => onUpdateStatus('Away')}>Set Away</button>
      <button onClick={() => onUpdateStatus('Available')}>Set Available</button>
    </div>
  );
}

export default TestProfile;