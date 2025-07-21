import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header.jsx";
import MainTheme from "./components/theme/Main.jsx";
import FooterTheme from "./components/theme/Footer.jsx";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

function AppTheme(props) {
  return (
    // 자식 컴포넌트에서는 value를 공유받음 DarkModeContext에 있는 createContext()값은 초기값일 뿐이다.
    // Provider 컴포넌트를 함께 만들어서 사용한다.
    // 현재 계정, 모드 관리(다크, 라이트)는 전역으로 사용하기 때문에 context api를 사용하지만 애매한 경우 우선 props로 전달 후 나중에 리팩토링 하는 것도 하나의 방법이다.
    // 1. 자주 변경되지 않는 데이터를 컨텍스트 상태로 사용한다. (리랜더링이 일어나기 때문에)
    // 2. 필요한 섹션에서만 사용한다. (리랜더링의 최소화)
    <DarkModeProvider initDarkMode={false}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeProvider>
  );
}

export default AppTheme;
