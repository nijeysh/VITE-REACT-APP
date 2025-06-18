# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 함수표현식 vs 함수선언식
// 상태, 로직 담당 - 함수표현식 (일반적으로 사용)
export default function Counter() {
  return (
    <button>Counter</button>
  )
}

// UI만 담당 - 함수선언식
export const Counter = () => {
    <button>Counter</button>
}

<!-- export default Counter; -->

