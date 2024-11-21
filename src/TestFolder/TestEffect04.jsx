import React, { useEffect, useState } from 'react';

function TestEffect04(props) {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [text, setText] = useState("");

  console.log("컴포넌트 발생")

  useEffect(()=>{
    console.log("useEffect가 실행됨")
  },[count])

  return (
    <div>
      <p>Count useEffect가 관리 : {count}</p>
      <button onClick={()=>setCount(count+1)}>클릭</button>
      <br/>
      
      <p>Count useEffect가 관리 안함 : {count2}</p>
      <button onClick={()=>setCount2(count2+1)}>클릭</button>
      <br/>

      <p>텍스트 입력 : {text}</p>
      <input
        type='text'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />

    </div>
  );
}

export default TestEffect04;