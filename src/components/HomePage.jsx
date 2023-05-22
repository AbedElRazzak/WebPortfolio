/* eslint-disable no-unused-vars */
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import Navbar from './Navbar.jsx'
import HeroMain from './HeroMain';
import Projects from './Prpjects';
import SkillsAndExpertise from './SkillsAndExpertise';
import ContactPage from './ContactPage';

export default function HomePage() {

  const navigate = useNavigate()

    return (
    <div className='h-full w-full' id="homepage">

      <div className='bg-primary-400 text-secondary-50 text-[0.875rem] text-center pb-2 '>
        <a href="#">Check out my blog to stay updated on my current activities, whereabouts, and ongoing projects 🚀</a>
        
      </div>
      
      
      <Navbar />
      
      <HeroMain />
      
      <Projects />

      <div className="h-full w-full bg-primary-400">

      <SkillsAndExpertise />
      
      <div className="relative z-0 top-[-30px] ">
      <div className='flex  flex-col justify-center items-center  bg-hero-bg-2 h-auto w-full bg-no-repeat bg-cover'>
        <div className="h-full w-full flex justify-center items-center flex-col py-16 sm:py-20 lg:py-36">
          <div className='flex flex-col items-center '>
            <div className='h2 sm:h1 text-shades-50'>Build a web app</div>
            <div className='h2 sm:h1 text-shades-50 w-fit'>with me</div>
          </div>
      
          <div className='h-auto w-full sm:max-w-[265px] pt-6 lg:pt-20 max-w-[265px]'>
            {/* onClick={() => navigate("/WebPortfolio/Resume")} */}
              <a target="_blank" href="/WebPortfolio/Resume"  className="m-1 flex h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">View my resume</div>
              </div>
            </a>
        </div>
      </div>

      </div>
      
      
      <ContactPage />
      </div>
      
     </div>

    </div>
    )

  }