// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../dist/output.css'
import './input.css'

function App() {
 

  return (
   <div className='h-screen w-full '>
    
    <div className='bg-primary-400 text-secondary-50 text-[0.875rem] text-center pb-2'>
      Check out my blog to stay updated on my current activities, whereabouts, and ongoing projects 🚀
    </div>

      <div className='flex flex-row items-end lg:items-center pt-4 lg:pt-2 '>

        <div className='h-full w-full lg:p-1 '>
          <div className='h-8 bg-contain bg-no-repeat bg-navbar-logo-prod'></div>
        </div>

        <div className='hidden lg:flex flex flex-row h-full w-full p-1'>
          <div className='h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer'>Home</div>
          <div className='h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer'>Projects</div>
          <div className='h-full min-w-fit w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer'>Skills & Expertise</div>
          <div className='h-full w-full font-[14px] font-semibold m-1 leading-tight text-right cursor-pointer'>Contact</div>
        </div>

        <div className='h-full w-full  mr-4  flex justify-start'>

          <div className='h-4 bg-right  w-full bg-contain bg-no-repeat bg-burger-logo-prod mb-1 lg:invisible'></div>

          <div className='hidden lg:flex invisible lg:visible w-full flex flex-row items-center justify-end '>
            <div className='flex flex-row  w-fit bg-primary-400 items-center px-3 py-1 rounded-md cursor-pointer'>
              <div className='text-secondary-50 p2 w-full'>Light</div>
              <div className='h-2 w-full flex justify-center items-center pl-5'>
                <div className='h-full bg-down-arrow w-3 bg-no-repeat bg-center bg-contain'></div>
              </div>
            </div>
          </div>

        </div>

      </div>





    <div className="h-max w-full bg-cover bg-center bg-no-repeat bg-hero-main-prod ">

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
              <div className="m-1 flex h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Connect with me now</div>
                </div>
              </div>
              </div>

              <div className='h-auto w-full sm:max-w-[265px] '>
              <div className="m-1 flex h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Check out my projects</div>
                </div>
              </div>
              </div>

            </div>
         </div>




        <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-0 pt-6 pb-24 sm:pb-0 lg:pb-[12rem] '>
          <div className="sm:hidden h-64 w-36 bg-cover bg-no-repeat bg-ui-mobile-react-prod"></div>
          <div className="sm:hidden h-52 w-44 bg-contain bg-center bg-no-repeat bg-ui-mobile-figma-prod"></div>

          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-figma bg-center '></div>
          <div className='hidden sm:block h-[30rem] w-[21rem]  sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-flutter bg-center '></div>
          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-blender bg-center '></div>
          <div className='hidden sm:block h-[30rem] w-[20rem]  sm:bg-contain lg:bg-cover bg-no-repeat bg-ui-lg-react bg-center '></div>

        </div>
      </div>
    </div>


    <div className='h-auto w-full mt-0 px-0 lg:px-10'>
      <div className='h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2'>Projects</div>
      <div className='h-auto w-full flex flex-col md:px-4'>
        <div className='h-auto w-auto text-center md:text-left h6 sm:h5'>The best way to learn</div>
        <div className='h-auto w-auto  text-center md:text-left h6 sm:h5'>is to build</div>
      </div>


      <div className='flex flex-col h-auto w-auto mt-12 items-center md:flex-row md:flex-wrap md:place-content-evenly'>

        <div className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-demo-pic-1 h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Path finding visualizer</div>
            <div className='p1 text-primary-200'>html css react javascript</div>
          </div>
        </div>

        <div className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-demo-pic-2 h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Wordvid</div>
            <div className='p1 text-primary-200'>react tailwind python</div>
          </div>
        </div>

        <div className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-demo-pic-2 h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Wordvid</div>
            <div className='p1 text-primary-200'>react tailwind python</div>
          </div>
        </div>

        

        <div className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-demo-pic-1 h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>ElonDrifts</div>
            <div className='p1 text-primary-200'>React ThreeJS Blender</div>
          </div>
        </div>

        <div className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-demo-pic-1 h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>ElonDrifts</div>
            <div className='p1 text-primary-200'>React ThreeJS Blender</div>
          </div>
        </div>

        <div className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-demo-pic-1 h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Path finding visualizer</div>
            <div className='p1 text-primary-200'>html css react javascript</div>
          </div>
        </div>

        <div className='h-auto w-full px-6'>
        <div className="md:invisible  h-12 w-full my-20 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
          <div className="flex h-full w-auto flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
            <div className="p1 hover:h6 flex h-12 w-auto items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">See more</div>
          </div>
        </div>
        </div>

      </div>

    </div>
    <div className='z-10'>
    <div className='bg-primary-50 rounded-b-[3rem] '>
      <div className='h-auto w-full  flex flex-col sm:flex-row items-center space-y-[-1rem] sm:space-y-[0rem] sm:justify-center py-20'>
        <div className='h3 lg:h2 text-gradient-50 p-1'>Skills and</div>
        <div className='h3 lg:h2 text-gradient-50 p-1 sm:px-2'>Expertise</div>
      </div>

      <div className='flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start place-content-evenly px-2'>
        <div className='max-w-sm  my-24 md:12'>
          <div className='h-auto w-full h4 max-w-sm mb-10 flex flex-row items-top'>
            <div className=' w-auto h-full'>
              <div className='bg-code-icon h-20 bg-bottom w-20 bg-no-repeat bg-contain'></div>
            </div>
            <div className=' w-full pl-4 '>
              <div className=' m-1 w-fit'>
                <div className='pr-6'>Software</div>
                <div className='h-[4px] w-full bg-gradient-50'></div>
              </div>

              <div className='m-1 w-fit'>
                <div className='pr-2'>Development</div>
                <div className='h-[4px] w-full bg-gradient-50'></div>
              </div>

          </div>
        </div>

        <div className='pl-6'>
            <div className='p3 font-normal w-full text-primary-200'> {'<p1>'}</div>
            <div className='pl-6  h-auto w-full'>
              <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>
              Experienced  in both Functional and OOP : JavaScript (ES5 and ES6), Python, C, TypeScript and Dart. Also experienced in : React JS, Three JS, Py charm, Flutter, flask and node js for server side code and various tech for database query.
              </div>
            </div>
            <div className='p3 text-primary-200 font-medium'> {'</p1>'}</div>
          </div>
      </div>

      <div className='max-w-sm  my-24 md:12'>
        <div className='h-auto w-full h4 max-w-sm mb-10 flex flex-row items-top'>
          <div className=' w-auto h-full'>
            <div className='bg-palette-icon h-20 bg-bottom w-20 bg-no-repeat bg-contain'></div>
          </div>
          <div className=' w-full pl-4 '>
            <div className=' m-1 w-fit'>
              <div className='pr-6'>UI & UX</div>
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

            <div className='m-1 w-fit'>
              <div className='pr-2'>Design</div>
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

          </div>
        </div>

        <div className='pl-6'>
            <div className='p3 font-normal w-full text-primary-200'> {'<p1>'}</div>
            <div className='pl-6  h-auto w-full'>
              <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>
              I use mainly Figma for UI & UX design to go from a user flow diagram all the way to a functional Prototype. I use Blender to make custom 3D shapes that i use in a webapp to increase intractability and make better user experience.
              </div>
            </div>
            <div className='p3 text-primary-200 font-medium'> {'</p1>'}</div>
          </div>
      </div>

      <div className='max-w-sm  my-24 md:12'>
        <div className='h-auto w-full h4 max-w-sm mb-10 flex flex-row items-top'>
          <div className=' w-auto h-full'>
            <div className='bg-lang-icon h-20 bg-bottom w-20 bg-no-repeat bg-contain'></div>
          </div>
          <div className=' w-full pl-4 '>
            <div className=' m-1 w-fit'>
              <div className='pr-6'>Languages &</div>
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

            <div className='m-1 w-fit'>
              <div className='pr-2'>Computer Skills</div>
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

          </div>
        </div>

        <div className='pl-6'>
            <div className='p3 font-normal w-full text-primary-200'> {'<p1>'}</div>
            <div className='pl-6  h-auto w-full'>
              <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>
              I am a native Arabic speaker and have fluency in English and French  Additionally, I have studied German up to B1 level. I am also knowledgeable in computer and circuit architecture due to majoring in Mechatronics at and proficient in using Microsoft Word, Excel, and  PowerPoint.
              </div>
            </div>
            <div className='p3 text-primary-200 font-medium'> {'</p1>'}</div>
          </div>
      </div>


      </div>

    </div>

    
    </div>
    <div className='bg-hero-bg-2 h-[1000px] w-full bg-no-repeat z-0'></div>

    
  </div> 
  )
}

export default App
