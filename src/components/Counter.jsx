import { useState } from "react";

export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  console.log('[렌더링] Counter: ', counter)

  const handleCounter = () => {
    // 여러 번 state를 변경해야하는 경우는 콜백함수 사용 (많이 사용하지는 않음)
    setCounter((prevCounter) => prevCounter + 1); // 0 + 1 -> 이전 state 값을 얻어옴
    setCounter((prevCounter) => prevCounter + 1); // 1 + 1
    setCounter((prevCounter) => prevCounter + 1); // 2 + 1

    console.log('[함수 호출] Counter: ', counter)

    if (onTotal) {
      onTotal();
    }
  }

  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}

// export default Counter