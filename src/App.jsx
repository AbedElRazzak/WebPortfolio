/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../dist/output.css'
import './input.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumeViewPage from './components/ResumeViewPage';



function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/WebPortfolio/' element={<HomePage />}></Route>
        <Route exact path='/WebPortfolio/Resume' element={<ResumeViewPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App


