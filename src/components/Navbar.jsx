/* eslint-disable no-unused-vars */
import React from "react";
import LangDropDown from "./LangDropDown";
import Hamburger from 'hamburger-react'
import { useRef } from "react";
import { useInView } from "framer-motion"






export default function Navbar(props) {

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  function hbLangChangeHandler(lang){
    props.handleLangChange(lang)
    document.querySelector('div.hamburger-react').click()
  }




    return (
      <div className="sticky top-0 z-50">
        <nav className=' flex flex-row items-end lg:items-center py-1 sm:py-1 lg:pt-0  backdrop-blur-md bg-shades-50/70 bg-primary-400'>
        <a href="#homepage" className='h-full w-full mb-1 lg:mb-0 lg:p-1 drop-shadow-xl'>
          <div className='h-8 mb-3 bg-contain bg-no-repeat bg-navbar-logo-prod'></div>
        </a>

        <div className='hidden lg:flex flex flex-row h-full w-full p-1 drop-shadow-6xl'>
          {props.lang === "En" ? 
          <a href="#homepage" className=' h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Home</a>
          : 
          <a href="#homepage" className=' h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Accueil</a>
          }
          
          {props.lang === "En" ?
          <a href="#projects" className='h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Projects</a>
          :
          <a href="#projects" className='h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Projets</a>
          }
          
          {props.lang === "En" ?
          <a href="#skillsAndExpertise" className='h-full min-w-fit w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Skills & Expertise</a>
          :
          <a href="#skillsAndExpertise" className='h-full min-w-fit w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Compétences et Savoir-faire</a>
          }
          
          <a href="#contactPage" className='h-full w-full font-[14px] font-semibold m-1 leading-tight text-right cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Contact</a>
        </div>

        <div className='h-full w-full pt-0   flex justify-start'>

          {/* <div className='h-4 bg-right  w-full bg-contain bg-no-repeat bg-burger-logo-prod  mb-1 lg:invisible drop-shadow-xl'></div> */}
          <div className="h-fit  w-full lg:invisible flex justify-end items-center pr-2" id="hb">
            <Hamburger size={20} onToggle={() => props.handleHbToggled(!props.hbIsToggled)} hideOutline={true} />
            
          </div>
          
          <div className="hidden lg:flex lg:pr-4 lg:pt-2" >
            <LangDropDown lang={props.lang} handleLangChange={props.handleLangChange}/>
          </div>
          

        </div>

        </nav>


        {props.hbIsToggled === true &&
        <div className="h-screen w-full bg-primary-50 backdrop-blur bg-shades-50/70 " 
        // ref={ref1}          
        // style={{
        // transform: isInView1 ? "none" : "translateY(-50px)",
        // opacity: isInView1 ? 1 : 0,
        // transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        // }}
        >
          <div className="flex flex-col pt-7 pl-3">

            <div className="h-auto w-full  flex items-center justify-start  border-t-2" onClick={() => document.querySelector('div.hamburger-react').click()}>
              {props.lang === "En" ?
              <a href="#homepage" className="h-fit w-full font-[14px] font-bold leading-tight text-primary-400  py-3">Home</a>
              :
              <a href="#homepage" className="h-fit w-full font-[14px] font-bold leading-tight text-primary-400  py-3">Accueil</a>
              }
              
            </div>

            <div className="h-auto w-full  flex items-center justify-start  border-t-2" onClick={() => document.querySelector('div.hamburger-react').click()}>
              {props.lang === "En" ?
              <a href="#projects" className="h-fit w-full font-[14px] font-bold leading-tighttext-primary-400  py-3">Projects</a>
              :
              <a href="#projects" className="h-fit w-full font-[14px] font-bold leading-tighttext-primary-400  py-3">Projets</a>
              }
              
            </div>

            <div className="h-auto w-full  flex items-center justify-start border-t-2" onClick={() => document.querySelector('div.hamburger-react').click()}>
              {props.lang === "En" ?
              <a href="#skillsAndExpertise" className="h-fit w-full font-[14px] font-bold leading-tighttext-primary-400  py-3">Skills & Expertise</a>
              :
              <a href="#skillsAndExpertise" className="h-fit w-full font-[14px] font-bold leading-tighttext-primary-400  py-3">Compétences et Savoir-faire</a>
              }
              
            </div>

            <div className="h-auto w-full  flex items-center justify-start  border-t-2 border-b-2" onClick={() => document.querySelector('div.hamburger-react').click()}>
              {props.lang === "En" ?
              <a href="#contactPage" className="h-fit w-full font-[14px] font-bold leading-tight text-primary-400  py-3">Contact</a>
              :
              <a href="#contactPage" className="h-fit w-full font-[14px] font-bold leading-tight text-primary-400  py-3">Contact</a>
              }
            </div>

            <div className="h-auto w-full  flex flex-col  pt-24">
            <div className="h-auto w-full  flex items-center justify-center" onClick={() => hbLangChangeHandler("En")}>
              <div  className="h-auto w-full text-center p2 py-4">Eng</div>

              </div>
              <div className="h-auto w-full">
              <div className='h-auto w-full'>
              <div onClick={() => hbLangChangeHandler("Fr")} className="m-1 flex h-12 cursor-pointer rounded-md border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-md transition ease-in hover:bg-secondary-300">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Fr</div>
                </div>
              </div>
              </div>
              </div>

            </div>

          </div>
        </div>

      }
      
    </div>
      
    )
}


