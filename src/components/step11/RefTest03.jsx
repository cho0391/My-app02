import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const renderCount = useRef(0);

  // 방법1
  // renderCount.current = renderCount.current + 1;
  // console.log('랜더링 수 : ' + renderCount.current)

  // 방법2 (useEffect사용)
  // 의존성 배열이 없는 경우 랜더링 될때마다 실행된다.
  // 그러나 의존성 배열을 주면 골라서 체크할 수 있다.
  useEffect(()=>{
    renderCount.current = renderCount.current + 1;
    console.log('랜더링 수 : ' + renderCount.current)
  })

  return (
    <div>
      <p>State : {count}</p>
      <p>State2 : {count2}</p>
      <button onClick={()=>setCount(count + 4)}>State 올려</button>
      <button onClick={()=>setCount2(count2 + 3)}>State 올려</button>
    </div>
  );
}

export default RefTest03;