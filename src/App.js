import logo from './logo.svg';
import './App.css';
import FloatingActionButtonZoom from './TestFolder/FloatingActionButtonZoom';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트 기초 알아보기',
      checked : true
    },
    {
      id : 2,
      text : 'HTML 기초 알아보기',
      checked : true
    },
    {
      id : 3,
      text : 'CSS 기초 알아보기',
      checked : true
    },
    {
      id : 4,
      text : '스프링 기초 알아보기',
      checked : true
    },
    {
      id : 5,
      text : 'JAVA 기초 알아보기',
      checked : true
    },

  ])

  return (
    <div className="App">
      {/* <FloatingActionButtonZoom/> */}
      {/* <TestTodoList
        todos={todos}
      /> */}
    </div>
  );
}

export default App;
