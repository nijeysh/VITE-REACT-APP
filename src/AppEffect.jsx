import { useEffect, useState } from 'react';

function Courses() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('use effect');
        setList(data);
      });

    // 클린업함수
    return () => {
      console.log('연결해제');
    };
  }, [filter]);

  return (
    <>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default function AppEffect() {
  // 1) DOM 조작하기
  //   useEffect(() => {
  //     const $h2 = document.querySelector("#title");
  //     console.log("$h2: ", $h2);
  //     $h2.textContent = "Data Fetching";
  //   }, []);

  // 이렇게하면 무한루프.. 계속 DOM 가져오고 함수 호출돼서
  // fetch('data/courses_all.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setList(data);
  //   });

  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      <hr />
      {show && <Courses />}
    </>
  );
}
