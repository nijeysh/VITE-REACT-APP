# 🚀 React + Vite 프로젝트

Vite를 사용하여 React 프로젝트를 학습하고 주요 개념을 정리하는 공간입니다.

## ✨ 프로젝트 소개

이 프로젝트는 Vite 환경에서 React를 효율적으로 사용하는 방법을 익히기 위해 만들어졌습니다. **Hot Module Replacement (HMR)** 와 같은 Vite의 빠른 개발 환경을 기반으로 React의 핵심 개념을 공부하고 기록합니다.

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Babel을 사용하여 빠른 새로고침(Fast Refresh)을 지원합니다.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: SWC를 사용하여 더 빠른 속도의 새로고침을 지원합니다.

---

## ✍️ React 컴포넌트 작성 방식

React 컴포넌트를 만드는 두 가지 주요 방식인 **함수 선언식**과 **함수 표현식**의 차이와 사용 사례를 정리합니다.

##

### 함수 선언식 (Function Declaration)

**function** 키워드로 시작하는 가장 일반적인 함수 형태입니다. 코드가 실행되기 전에 브라우저가 먼저 읽어들이는 **호이스팅(Hoisting)** 이 발생합니다.

주로 상태(state)나 로직(logic)을 포함하는 **핵심 컴포넌트**를 만들 때 사용이 권장됩니다.

```jsx
// 상태와 로직을 담당하는 컴포넌트
function Counter() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
}

export default Counter;
```

##

### 함수 표현식 (Function Expression) - 화살표 함수

**화살표 함수(`=>`)** 를 변수에 할당하는 형태입니다. 함수 선언식과 달리 **호이스팅이 발생하지 않아** 코드의 예측 가능성을 높여줍니다.

주로 상태 없이 UI만 표현하는 **프레젠테이셔널(Presentational) 컴포넌트**나 **이벤트 핸들러** 등을 간결하게 작성할 때 유용합니다.

```jsx
// UI 렌더링에 집중하는 간단한 컴포넌트
export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
```
