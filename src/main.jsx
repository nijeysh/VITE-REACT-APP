import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './AppPure.jsx'
import './index.css'
import AppCounter from './AppCounter.jsx'
import AppMovingDot from './AppMovingDot.jsx'
import App from './AppCourse';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
