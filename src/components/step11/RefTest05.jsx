import React, { useEffect, useRef } from 'react';

function RefTest05(props) {

  const inputRef = useRef();

  // 맨 처음 한번만 실행할 때에는 의존성 배열에 빈배열[]을 넣는다
  useEffect(()=>{
    inputRef.current.focus();
  },[])

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
      <input 
      type="text"
      placeholder='userName' 
      ref={inputRef}
      onKeyDown={handleKeyDown} // 키 이벤트 입력 (지금은 Enter키)
      />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default RefTest05;