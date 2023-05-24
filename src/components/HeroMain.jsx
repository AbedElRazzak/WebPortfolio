/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion"


export default function HeroMain(props) {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true });
  const ref6 = useRef(null);
  const isInView6 = useInView(ref6, { once: true });


    return (
    <div className="h-auto w-full bg-cover bg-center bg-no-repeat bg-hero-main-prod " >
      

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
           {props.lang === "En" ?
           <div className='h-full w-full h2 text-center px-4 sm:px-2 sm:pr-4 sm:text-h1'>Shreim</div>
           :
           <div className='h-full w-full h2 text-center px-4 sm:px-2 sm:pr-4 sm:text-h1'>Chreim</div>
           }
           
           <div className='h-[3px] w-full bg-gradient-50 sm:invisible'></div>
         </div>

         </div>
         <div className='h-[3px] w-full bg-gradient-50 invisible sm:visible'></div>
         </div>

     </div>

        


      <div className='pt-4'>
          <div className='h-full w-full p1 text-primary-300 pt-6'>
            {props.lang === "En" ?
            <div className='text-center w-full'>I am a full stack web developer & UI/UX</div>
            :
            <div className='text-center w-full'>Je suis développeur web full stack et UI/UX</div>
            }
            

              <div className='flex flex-row justify-center'>
                {props.lang === "En" ?
                <div className='text-center pr-2'>designer, currently an intern at </div>
                :
                <div className='text-center pr-2'>architect, actuellement stagiaire chez </div>
                }
                
                <div className='text-center p1 text-gradient-100'></div>
              </div>
              {props.lang === "En" ?
              <div className='text-center'>as a web developer.</div>
              :
              <div className='text-center'>en tant que développeur web.</div>
              }
              

          </div>
        </div>




        <div className='h-auto w-full flex justify-center items-center py-10 px-2 '>
            <div className='h-auto w-full flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center '> 

              <div className='h-auto w-full sm:max-w-[265px] '>
              <a href="#contactPage" className="m-1 flex h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                  {props.lang === "En" ?
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Connect with me now</div>
                  :
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Contacter moi</div>
                  }
                  
                </div>
              </a>
              </div>

              <div className='h-auto w-full sm:max-w-[265px] '>
              <a href="#projects" className="m-1 flex h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
                  {props.lang === "En" ?
                   <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Check out my projects</div>
                   :
                   <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Voir mes projets</div>
                  }
                 
                </div>
              </a>
              </div>

            </div>
         </div>




        <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-0 pt-12 pb-24 sm:pb-0 lg:pb-[12rem] '>
          <div  className="sm:hidden h-64 w-36 bg-cover bg-no-repeat bg-ui-mobile-react-prod"
          ref={ref5}          
          style={{
            transform: isInView5 ? "none" : "translateX(2px)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className="sm:hidden h-52 w-44 bg-contain bg-center bg-no-repeat bg-ui-mobile-figma-prod"
          ref={ref6}          
          style={{
            transform: isInView6 ? "none" : "translateX(-2px)",
            opacity: isInView6 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>

          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-figma bg-center '
          ref={ref1}          
          style={{
            transform: isInView1 ? "none" : "translateX(-8px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className='hidden sm:block h-[30rem] w-[20rem]  sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-react bg-center '
          ref={ref2}          
          style={{
            transform: isInView2 ? "none" : "translateX(-8px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-blender bg-center '
          ref={ref3}          
          style={{
            transform: isInView3 ? "none" : "translateX(8px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className='hidden sm:block h-[30rem]  w-[21rem]  sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-python bg-center '
          ref={ref4}          
          style={{
            transform: isInView4 ? "none" : "translateX(8px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>

        </div>
      </div>
    </div>
    )
}