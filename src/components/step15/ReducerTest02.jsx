import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch(action.type){
    case "add" : 
    return state + action.payload;
    case "sub" : 
    return state - action.payload;
  }
}
function ReducerTest02(props) {
  // input에서 받는 값 저장
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>ICT 은행에 오신것을 환영합니다.</h2>
      <p> 잔고 : {money}원</p>
      <input
        type='number'
        value={number}
        onChange={(e)=>{
          const value = parseInt(e.target.value) || 0;
          setNumber(value<0 ? 0 : value); // 음수 방지
        }}
        step="1000"
      />
      <button onClick={()=>{
        dispatch({type : "add", payload : number})
        setNumber(0); // 입력값 초기화
        }}>예금</button>
      <button onClick={()=>{
        if (number > money) {
          alert("잔고 부족 / 대출을 원하시면 1588-1588로 문의 바랍니다.")
        }
        dispatch({type : "sub", payload : number});
        setNumber(0); // 입력값 초기화
        }}>출금</button>
    </div>
  );
}
export default ReducerTest02;