import React, { useEffect, useState } from 'react';


// useEffect 는 리액트에서 제공하는 훅 중 하나로, 
// 함수형 컴포넌트에서 사이드 이펙트 처리 할 수 있도록 도와줍니다. 
// 사이드 이펙트란, 컴포넌트의 렌더링 외의 작업(*데이터 가져오기, DOM 수정, 등등)을 의미한다.
// useEffect는 상태 변경으로 인해 발생한 렌더링 이후에 실행된다.
// 의존성 배열을 통해 특정 상태나 속성의 변화에만 반응하도록 제한한다.
// 의존성 배열이 없으면 갱신될 때 마다 호출된다.
// 의존성 배열이 [] 비어있는 배열이면 처음 한번만 실행된다.


// 형식)
// useEffect(()=>{

//     렌더링 이후에 실행할 작업

//     [return()=>{    

//        정리작업(clean-up) 

//     }] <- 생략 가능

//   }, [의존성 배열]);





function EffectTest02(props) {
  const [count, setCount] = useState(5);
  useEffect(()=>{
    document.title = `총 ${count}번 클릭 했습니다.`
  }, [count]);

  return (
    <div>
      <p>총 {count}번 출력했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default EffectTest02;