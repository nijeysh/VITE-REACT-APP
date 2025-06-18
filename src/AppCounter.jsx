import './App.css'
import Header from './components/Header'
import Main from "./components/Main"
import Footer from "./components/Footer"

// 함수는 반드시 파스칼케이스로 작성 (그렇지않으면 인식을 못함)
function AppCounter() {

  console.log('AppCounter')
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default AppCounter
