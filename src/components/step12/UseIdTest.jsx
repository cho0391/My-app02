import React, { useEffect, useId, useRef } from 'react';

// useId 란 고유한 ID를 생성한다.
function UseIdTest(props) {

  const id = useId();
  const inputRef = useRef();

  // const age = useId();
  // const ageRef = useRef();

  useEffect(() => {
    // 가져올 수 없다. (useRef를 사용해야한다.)
    // const element = document.querySelector(id);
    // console.log(element);

    const element = inputRef.current
    console.log(element);

    // const element2 = ageRef.current
    // console.log(element2);

  }, [])

  console.log(id)

  const login = ()=>{
    const inputValue = inputRef.current.value;
    alert(inputValue + "님 환영합니다.");
    inputRef.current.focus();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      login(); // Enter 일때만 login 함수 호출
    }
  }

  return (
    <div>
      <label htmlFor={id}>이름</label>
      <input id={id} ref={inputRef} />

      {/* 만약 여러개일 경우 */}
      {/* <label htmlFor={age}>나이</label> */}
      {/* <input id={age} ref={ageRef}/> */}

      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} ref={inputRef} />
      <label htmlFor={`${id}-age`}>나이</label>
      <input id={`${id}-age`} ref={inputRef}/>
      <button onClick={login}>로그인</button>

    </div>
  );
}

export default UseIdTest;