import React, { useEffect, useRef, useState } from 'react';

function RefTest04(props) {

  const [count, setCount] = useState(0);
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);
  // const [allClick, setAllClick] = useState(0);
  
  const rendCount = useRef(0);
 
  useEffect(()=>{
    // if (btn1 > 0 || btn2 > 0) {
    //   setAllClick(allClick + 1);
    // }
    console.log("랜더링 수  : " + rendCount.current)
    rendCount.current = rendCount.current + 1;
  },[btn1, btn2])


  const btn1Up = ()=>{
    setCount(count + 4);
    setBtn1(btn1 + 1);
  }

  const btn2Up = ()=>{
    setCount(count + 3);
    setBtn2(btn2 + 1);
  }

  return (
    <div>
      <p>State : {count}</p>
      <p>버튼1 클릭 횟수 : {btn1}</p>
      <p>버튼2 클릭 횟수 : {btn2}</p>
      {/* <p>전체 클릭횟수 : {allClick}</p> */}
      <p>전체 클릭횟수 : {rendCount.current}</p>
      <button onClick={btn1Up}>버튼1</button>
      <button onClick={btn2Up}>버튼2</button>
    </div>
  );
}

export default RefTest04;