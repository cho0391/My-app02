import React, { useState } from 'react';

function EffectTest(props) {
  
  // let count = 5;
  // const setCount = (num)=>{
  //     count = num;
  //     console.log(count);
  // }

  const [count, setCount] = useState(5);

  return (
    <div>
      <p>총 {count}번 출력했습니다.</p>
      <button onClick={()=>setCount(count + 1)}>클릭</button>
    </div>


  );
}

export default EffectTest;