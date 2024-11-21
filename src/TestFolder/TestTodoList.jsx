// import React from 'react';

// function TestTodoList({ todos }) {
//   return (
//     <ul className='TestTodoList'>
//       {todos.map((todo) => (
//         <TestTodoListItem
//           todo={todo}
//           key={todo.id}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TestTodoList;

import React, { useState } from 'react';

function TestTodoList(props) {
  // 초기값 및 변동 가능하게 세팅
  const [todos, setTodos] = useState(['테스트 1입니다.','테스트 2입니다.']);
  // 추가하는 놈을 만드는 세팅
  const [newTodo, setNewTodo] = useState('');
  // 만든놈을 추가하는 버튼 이벤트
  const addTodo = () => {
    if (newTodo.trim !== '') {
      // 현재상태의 todos를 복사하고 보사된 배열 맨뒤에 새로운 todo를 추가하는 코딩
      setTodos([...todos, newTodo.trim()])
      // 추가 후 빈문자열로 클린해준다.
      setNewTodo('');
    }
  }

  // 삭제하는 세팅
  const deleteTodo =(index)=>{
    setTodos(todos.filter((_,i)=>i!==index));
  }

  return (
    <div>
      <h2>Todo list</h2>
      <ul>
        {
        todos.map((k,index)=>(
          <li key={index}>{k}<button onClick={()=>deleteTodo(index)}>delete</button></li>  
        ))
        }
      </ul>
      <p>Typing : {newTodo}</p>
      <input
      type='text'
      value={newTodo}
      onChange = {(e)=>setNewTodo(e.target.value)}
      /><button onClick={addTodo}>add new task</button>    
    </div>
  );
}

export default TestTodoList;