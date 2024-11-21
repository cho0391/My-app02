import React, { useState } from 'react';
import Profile from './Profile';
import './profileEx.css';

function ProfileEx({name}) {
  const users = ['고길동', '둘리', '희동이']
  const [user, setUser] = useState(users[0])
  const [isStatus, setStatus] = useState(true)

 return(
  <div className='center'>
    <h2>User Profile</h2>
    <button onClick={()=>setStatus(!isStatus)}>Toggle Status</button>
    <button onClick={()=>setUser(
      users[(users.indexOf(user)+1)%users.length]
    )}>Switch User</button>
    <p>
      상태 : {isStatus ? 'Active' : 'Inactive'}
    </p>
    <Profile name={user}/>
  </div>
 );
}

export default ProfileEx;



// function ProfileEx({ name }) {
//   const users = ['고길동', '둘리', '희동이'];

//   // 각 유저별 상태를 객체로 관리
//   const [userStatuses, setUserStatuses] = useState(
//     users.reduce((acc, user) => {
//       acc[user] = true; // 모든 유저의 초기 상태를 true로 설정
//       return acc;
//     }, {})
//   );

//   const [currentUser, setCurrentUser] = useState(users[0]);

//   const toggleStatus = () => {
//     setUserStatuses((prevStatuses) => ({
//       ...prevStatuses,
//       [currentUser]: !prevStatuses[currentUser], // 현재 유저 상태만 토글
//     }));
//   };

//   const switchUser = () => {
//     const nextIndex = (users.indexOf(currentUser) + 1) % users.length;
//     setCurrentUser(users[nextIndex]);
//   };

//   return (
//     <div className="center">
//       <h2>User Profile</h2>
//       <button onClick={toggleStatus}>Toggle Status</button>
//       <button onClick={switchUser}>Switch User</button>
//       <p>상태: {userStatuses[currentUser] ? 'Active' : 'Inactive'}</p>
//       <Profile name={currentUser} />
//     </div>
//   );
// }

// export default ProfileEx;