import React, { useEffect, useMemo, useState } from 'react';

function MemoTest04(props) {
  console.log("컴포넌트 호출")
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // input을 누르면 location이 아니므로 useEffect 내용출력 안됨.
  // 기본자료형 에는 값이 저장된다.
  // const location = isKorea ? '한국' : '외국';
  // useEffect(()=>{
  //   console.log('useEffect 호출')
  // },[location]);

  //객체 : 렌더링 되면서 객체가 생성이 되고 그 객체의 주소값이 변경된다. 
  // const location = {
  //   country: isKorea ? '한국' : '외국'
  // };
  // useEffect(()=>{
  //   console.log('useEffect 호출')
  // },[location])


  // Memo를 사용하자
  const location = useMemo(()=>{
    return {
      country: isKorea ? '한국' : '외국'
    };
  },[isKorea]);
  
  useEffect(()=>{
    console.log('useEffect 호출')
  },[location]);

  return (
    <div>
      <h2>하루 몇끼 먹어요?</h2>
      <input
        type='number'
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      />
      <hr/>
      <h2>어느 나라에 있나요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={()=>setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default MemoTest04;