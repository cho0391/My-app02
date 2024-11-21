import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
  
  const [number, setNumber] = useState(0);

  // const someFunction = ()=>{
  //   console.log(`someFunc : number : ${number}`);
  //   return;
  // }
  
  // useCallBack은 함수 자제를 저장한다.
  // 버튼을 누르면 someFunc : number : 0 이렇게 나온다.
  // 그 이유는 useCallback 저장할 당시 number는 0 이었다.
  // const someFunction = useCallback(()=>{
  //   console.log(`someFunc : number : ${number}`);
  //   return;
  // }, [])
  
  
  const someFunction = useCallback(()=>{
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number])


  useEffect(()=>{
    console.log("someFunc 변경 되었네요");
  },[someFunction])

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      />
      <br/>
      <button onClick={someFunction}>someFunction 함수 호출</button>
    </div>
  );
}

export default CallBackTest02;