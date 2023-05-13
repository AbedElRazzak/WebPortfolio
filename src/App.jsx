// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../dist/output.css'
import './input.css'

function App() {
 

  return (
   <div className='h-screen w-full '>
    <div className='bg-primary-400 text-secondary-50 text-[0.875rem] text-center pb-2'>Check out my blog to stay updated on my current activities, whereabouts, and ongoing projects 🚀</div>

      <div className='flex flex-row items-end lg:items-center pt-4 lg:pt-2 '>

        <div className='h-full w-full lg:p-1 '>
          <div className='h-8 bg-contain bg-no-repeat bg-navbar-logo-prod'></div>
        </div>

        <div className='hidden lg:flex flex flex-row h-full w-full p-1'>
          <div className='h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer'>Products</div>
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




    <div className="h-auto w-full bg-cover bg-center bg-no-repeat bg-hero-main-prod pt-6">

      <div className='h-auto w-full px-2 flex flex-col '>

        


      <div className='pt-4'>
          <div className='h-full w-full p1 text-primary-300'>
            <div className='text-center w-full'>Full stack web developer & UI/UX</div>

              <div className='flex flex-row justify-center'>
                <div className='text-center pr-2'>Designer, currently an intern at </div>
                <div className='text-center p1 text-gradient-100'></div>
              </div>
              <div className='text-center'>as a web developer.</div>

          </div>
        </div>




        <div className='h-auto w-full flex justify-center py-10 px-2 '>
            <div className='h-auto w-full flex flex-col  sm:flex-row sm:justify-center sm:items-center'> 
          
              <div className="m-1 inline-block h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Connect with me now</div>
                </div>
              </div>


              <div className="m-1 inline-block h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
                  <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Check out my projects</div>
                </div>
              </div>

            </div>
         </div>




        <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-0 pt-4 sm:pb-20 lg:pb-80'>
          <div className="h-56 w-36 bg-contain bg-no-repeat bg-ui-mobile-react-prod"></div>
          <div className="h-40 w-36 bg-cover bg-no-repeat bg-ui-mobile-figma-prod"></div>
        </div>



      </div>
      








         










    </div>
    <div className='h-auto w-full mt-20 px-0 lg:px-16'>

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


        <div className="md:invisible h-12 w-full my-20 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
          <div className="flex h-full w-auto flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
            <div className="p1 hover:h6 flex h-12 w-auto items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">See more</div>
          </div>
        </div>



      </div>




      <div className='bg-primary-50 mt-20'>

        <div className='h-auto w-full  flex flex-col items-center space-y-[-1rem] py-20'>
          <div className='h3 text-gradient-50'>Skills and</div>
          <div className='h3 text-gradient-50'>Expertise</div>
        </div>

        <div className='h-auto w-full h4 space-y-[-0.5rem] mb-10 flex flex-col items-center '>
          <div>Software</div>
          <div>Development</div>
        </div>

        <div className='h4 space-y-[-0.5rem] mb-10 flex flex-col items-center '>
          <div>UI & UX</div>
          <div>Design</div>
        </div>

        <div className='h4 space-y-[-0.5rem] mb-10 flex flex-col items-center '>
          <div>Languages &</div>
          <div>Computer Skills</div>
        </div>

      </div>


    </div>

    
  </div> 
  )
}

export default App
