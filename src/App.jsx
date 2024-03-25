/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './output.css'
import './input.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumeViewPage from './components/ResumeViewPage';
import BlogPage from './components/BlogPage';



function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/WebPortfolio/' element={<HomePage />}></Route>
        <Route path='/WebPortfolio/Resume' element={<ResumeViewPage />}></Route>
        <Route path='/WebPortfolio/BlogPage' element={<BlogPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App


