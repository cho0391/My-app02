import { Button } from '@mui/material';
import React, { useState } from 'react';
import './todolist.css';

function ToDoList(props) {
  
  const [todos, setTodos] = useState(['Learn React','Build a project'])
  const deleteTodo = (index)=>{
    // (_,i) => fillter메서드의 콜백 함수 매개변수
    // 첫번째 매개변수 _ 는 배열의 각 요소를 의미한다. (지금은 사용하지 않으므로 _ )
    // 두번째 매개변수 i 는 인덱스를 의미한다.
    setTodos(todos.filter(( _ , i ) => i !== index));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {/* <li>Learn React {' '} <button>Delete</button></li>
        <li>Build a project {' '} <button>Delete</button></li> */}
        {todos.map((k, index) =>(
          <li key={index}>
            {k} {' '} 
            <button onClick={()=>deleteTodo(index)}>Delete</button></li>
        ))}
      </ul>
      <p>Typing : </p>
      <input 
        type='text' 
        vlaue=''
        onChange 
      />{' '}
      <button onClick>Add Nes Task</button>
    </div>
  );
}

export default ToDoList;