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

    // 리스너나 소켓 같은 연결을 하는 로직이 있다면 반드시 return을 해야한다. (클린업함수)
    // 마운트 해제 되었을 때 실행하는 로직
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

  // 2) 무한루프가 발생하는 이유
  // list라는 변수를 선언하고 setList로 인해 리랜더링이 발생하는데 (다시 AppEffect 함수 호출) 그럼 다시 fetch가 실행되면서 무한루프에 빠지게 됨
  // 이를 방지하기 위해 useEffect를 쓴다
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
