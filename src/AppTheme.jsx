import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header.jsx";
import MainTheme from "./components/theme/Main.jsx";
import FooterTheme from "./components/theme/Footer.jsx";
import { useState } from "react";
import { DarkModeContext } from "./context/DarkModeContect.jsx";

function AppTheme(props) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    // 자식 컴포넌트에서는 value를 공유받음 DarkModeContext에 있는 createContext()값은 초기값일 뿐이다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeContext.Provider>
  );
}

export default AppTheme;
