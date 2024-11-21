import React, { useState } from 'react';
import TestProfile from './TestProfile';

function TestProfileEx(props) {
  // 초기 사용자 목록 및 상태 저장
  const users = ['보라돌아이', '뚜비루바', '나나니아', '뽂'];
  const [userStatuses, setUserStatuses] = useState(
    users.reduce((acc, user) => {
      acc[user] = 'Away'; // 모든 사용자의 초기 상태를 'Away'로 설정
      return acc;
    }, {})
  );
  const [currentUser, setCurrentUser] = useState(users[0]);

  // 상태 업데이트 함수
  const updateUserStatus = (user, newStatus) => {
    setUserStatuses((prevStatuses) => ({
      ...prevStatuses,
      [user]: newStatus,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <button
        onClick={() =>
          setCurrentUser(
            users[(users.indexOf(currentUser) + 1) % users.length]
          )
        }
      >
        Switch User
      </button>
      <p>현재 사용자: {currentUser}</p>
      <TestProfile
        name={currentUser}
        status={userStatuses[currentUser]}
        onUpdateStatus={(newStatus) => updateUserStatus(currentUser, newStatus)}
      />
    </div>
  );
}

export default TestProfileEx;