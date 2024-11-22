import React, { useEffect, useRef, useState } from 'react';

function TestRef01(props) {

  const [count, setCount] = useState(0);
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);

  const renderingCount = useRef(0);

  useEffect(()=>{
    renderingCount.current = renderingCount.current + 1;
  }, [count])
  
  const btn1Up = () => {
    setBtn1(btn1 + 1);
    setCount(count + 5);
  }

  const btn2Up = () => {
    setBtn2(btn2 + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <p>State : {count}</p>
      <p>버튼1 클릭 횟수 : {btn1}</p>
      <p>버튼2 클릭 횟수 : {btn2}</p>
      <p>전체 클릭 횟수 : {renderingCount.current}</p>
      <button onClick={btn1Up}>버튼(+5)</button>
      <button onClick={btn2Up}>버튼(+1)</button>
    </div>
  );
}

export default TestRef01;