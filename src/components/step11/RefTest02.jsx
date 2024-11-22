import React, { useRef, useState } from 'react';

function RefTest02(props) {
  // useRef는 값이 유지되지만 리렌더링과는 무관, 화면에 즉시 반영하려면 강제 리렌더링이 필요.
  // let으로 선언된 변수는 리렌더링 시 초기화됨. 상태를 유지하려면 useState를 사용하는 것이 좋다.
  const countRef = useRef(0);
  let countVar = 0;
  const [render, setRender] = useState(false);

  const refUp = ()=>{
     countRef.current = countRef.current + 1;
     console.log("ref : " + countRef.current)
  }

  const varUp = ()=>{
    countVar = countVar + 1;
    console.log("var : " + countVar)
  }

  const doRander = ()=>{
    setRender(render + 1);
  }

  const printResult = ()=>{
    console.log("현재 Ref 값: " + countRef.current);
    console.log("현재 Var 값: " + countVar);
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      {/* 버튼 누르면 값은 올라가지만 랜더링 되지 않아 화면에 변화가 없다 */}
      <button onClick={refUp}>Ref 올리기</button>
      <button onClick={varUp}>Var 올리기</button>
      {/* ref는 값을 가지고 있으나, var는 랜더링 할때 초기화 되서 0 이 된다. */}
      <button onClick={doRander}>랜더링 하자</button>
      <button onClick={printResult}>결과출력하자</button>
</div>
  );
}
export default RefTest02;