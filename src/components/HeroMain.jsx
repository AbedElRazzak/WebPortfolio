/* eslint-disable no-unused-vars */
import React from "react";

export default function HeroMain() {
    return (
    <div className="h-auto w-full bg-cover bg-center bg-no-repeat bg-hero-main-prod ">

      <div className='h-auto w-full px-2 flex flex-col '>

        
      <div className='h-auto w-auto flex flex-col mt-16 sm:mt-24 justify-center items-center space-y-[-0.7rem]'>
         
         <div className='h-auto w-auto  flex flex-col space-y-[-0.5rem]'>
           <div className='h2 h-full text-center px-4 sm:text-h1'>Abed</div>
           <div className='h-[3px] w-full bg-gradient-50 '></div>
         </div>

         <div className='h-auto w-auto space-y-[-0.5rem]'>
         <div className='flex flex-col h-auto w-auto sm:flex-row items-center justify-center'>

         <div className='h-auto w-auto  flex flex-col space-y-[-0.5rem]'>
           <div className='h-auto w-auto h2 text-center px-4 sm:px-2 sm:pl-4 sm:text-h1'>El Razzak</div>
           <div className='h-[3px] w-full bg-gradient-50 sm:invisible'></div>
         </div>

         <div className='h-auto w-auto  flex flex-col space-y-[-0.5rem]'>
           <div className='h-full w-full h2 text-center px-4 sm:px-2 sm:pr-4 sm:text-h1'>Shreim</div>
           <div className='h-[3px] w-full bg-gradient-50 sm:invisible'></div>
         </div>

         </div>
         <div className='h-[3px] w-full bg-gradient-50 invisible sm:visible'></div>
         </div>

     </div>

        


      <div className='pt-4'>
          <div className='h-full w-full p1 text-primary-300 pt-6'>
            <div className='text-center w-full'>Full stack web developer & UI/UX</div>

              <div className='flex flex-row justify-center'>
                <div className='text-center pr-2'>Designer, currently an intern at </div>
                <div className='text-center p1 text-gradient-100'></div>
              </div>
              <div className='text-center'>as a web developer.</div>

          </div>
        </div>




        <div className='h-auto w-full flex justify-center items-center py-10 px-2 '>
            <div className='h-auto w-full flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center '> 

              <div className='h-auto w-full sm:max-w-[265px] '>
              <a href="#contactPage" className="m-1 flex h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Connect with me now</div>
                </div>
              </a>
              </div>

              <div className='h-auto w-full sm:max-w-[265px] '>
              <a href="#projects" className="m-1 flex h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Check out my projects</div>
                </div>
              </a>
              </div>

            </div>
         </div>




        <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-0 pt-6 pb-24 sm:pb-0 lg:pb-[12rem] '>
          <div className="sm:hidden h-64 w-36 bg-cover bg-no-repeat bg-ui-mobile-react-prod"></div>
          <div className="sm:hidden h-52 w-44 bg-contain bg-center bg-no-repeat bg-ui-mobile-figma-prod"></div>

          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-figma bg-center '></div>
          <div className='hidden sm:block h-[30rem] w-[20rem]  sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-react bg-center '></div>
          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-blender bg-center '></div>
          <div className='hidden sm:block h-[30rem]  w-[21rem]  sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-python bg-center '></div>

        </div>
      </div>
    </div>
    )
}