import React, { useEffect, useState } from 'react';

function TestEffect03(props) {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null); // 클릭된 상품 ID
  const exchangeRate = 1300; // 고정 환율

  useEffect(() => {

    // API 호출
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      // response : fetch 함수가 HTTP 요청에 대한 응답으로 반환하는 객체
      .then((response) => {
        if (!response.ok) {
          throw new Error('NetWork error')
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [])

  const handleClick = (id)=>{
    setSelectedId((prevId)=>(prevId === id ? null : id));
  }

  return (
    <div>
      <h2>Shop List</h2>
      <ul>
        {data.map((k)=>(
          <li key={k.id}>
            <h3>{k.name}</h3>
            <p>price : $ {k.price}</p>
            {selectedId === k.id && (
              <p>한화 환산 금액 : {(k.price*exchangeRate).toLocaleString()} 원</p>
            )}
            <button onClick={()=>handleClick(k.id)}>{selectedId === k.id ? '숨기기' : '환산 보기'}</button>
            <img src={k.image_link} style={{width : '100px'}}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestEffect03;