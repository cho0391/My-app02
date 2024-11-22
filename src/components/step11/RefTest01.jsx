import React, { useRef, useState } from 'react';

// useRef
// 1. 값의 유지
function RefTest01(props) {

  const [count, setCount] = useState(0);
  const countRef = useRef(5);

  // Ref의 값을 호출할 때는 current(현재값 기억)
  console.log("count : " + count + ", " + "countRef : " + countRef.current);

  const statePlus = () => {
    setCount(count + 1);
  }

  const refPlus = () => {
    countRef.current = countRef.current + 1;
    console.log("count-안 : " + count + ", " + "countRef-안 : " + countRef.current);
  }

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      {/* <button onClick={()=>setCount(count+1)}>State 올려</button> */}
      <button onClick={statePlus}>State 올려</button>
      {/* useRef는 랜더링을 하지 않아서 화면 숫자는 그대로 */}
      <button onClick={refPlus}>Ref 올려</button>

    </div>
  );
}

export default RefTest01;