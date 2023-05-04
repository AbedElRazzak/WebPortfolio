// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../dist/output.css'
import './input.css'

function App() {
 

  return (
    <div className='h-screen w-full  flex flex-col space-y-2 px-2 bg-hero-main-prod'>

      <div className='h-auto '>
        <div className='h-[40%] w-full px-4 flex flex-col'>
           <div className='flex flex-col mt-16 justify-center items-center'>
             <div className='h-full'>
               <div className='h4 h-auto'>Abed</div>
             </div>
             <div className='h-[5px] w-[35%] bg-gradient-50'></div>
               <div className='h4'>El Razzak Chreim</div>
               <div className='h-[5px] w-[90%] bg-gradient-50'></div>
           </div>

           <div className='pt-12'>
             <div className='h-full w-full p2 text-primary-300'>
               <div className='text-center'>Full stack web developer & a UI/UX Designer, </div>
               <div className='flex flex-row justify-center'>
                 <div className='text-center pr-2'>currently an intern at </div>
                 <div className='text-center p2 text-gradient-100'>Smartech</div>
               </div>
               <div className='text-center'>as a web developer.</div>
             </div>
           </div>

        </div>
      </div>

      <div className='h-full py-12'>

        <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-2'>
           <div className="h-28 w-40 bg-center bg-contain bg-no-repeat bg-ui-mobile-figma-prod"></div>
           <div className="h-full w-40 bg-center bg-contain bg-no-repeat bg-ui-mobile-react-prod"></div>
        </div>

      </div>

      <div className='h-auto  pb-5'>

      <div className='h-auto w-full flex justify-center'>
           <div className=' h-auto w-auto flex flex-col space-y-2'> 
          
               <div className="inline-block h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                 <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                   <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Connect with me now</div>
                 </div>
               </div>

               <div className="inline-block h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
                 <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
                   <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Check out my projects</div>
                 </div>
               </div>

             </div>
          </div>

      </div>
    </div>
  //  <div className='h-screen w-full '>
  //   <div className="h-[110%] w-full bg-contain bg-no-repeat bg-cover bg-hero-main-prod">

  //     <div className='h-[40%] w-full px-4 flex flex-col'>
  //       <div className='flex flex-col mt-16 justify-center items-center'>
  //         <div className='h-full'>
  //           <div className='h4 h-auto'>Abed</div>
  //         </div>
  //         <div className='h-[5px] w-[35%] bg-gradient-50'></div>
  //           <div className='h4'>El Razzak Chreim</div>
  //           <div className='h-[5px] w-[90%] bg-gradient-50'></div>
  //       </div>

  //       <div className='pt-12'>
  //         <div className='h-full w-full p2 text-primary-300'>
  //           <div className='text-center'>Full stack web developer & a UI/UX Designer, </div>
  //           <div className='flex flex-row justify-center'>
  //             <div className='text-center pr-2'>currently an intern at </div>
  //             <div className='text-center p2 text-gradient-100'>Smartech</div>
  //           </div>
  //           <div className='text-center'>as a web developer.</div>
  //         </div>
  //       </div>

  //       <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-2 pt-12 bg-primary-400'>
  //         <div className="h-28 w-36 bg-contain bg-no-repeat bg-ui-mobile-figma-prod"></div>
  //         <div className="h-48 w-36 bg-contain bg-no-repeat bg-ui-mobile-react-prod"></div>
  //       </div>



  //     </div>
      





  //     <div className='h-auto w-full flex justify-center absolute bottom-5'>
  //           <div className=' h-auto w-auto flex flex-col space-y-2'> 
          
  //             <div className="inline-block h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
  //               <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
  //                 <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">Connect with me now</div>
  //               </div>
  //             </div>

  //             <div className="inline-block h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
  //               <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
  //                 <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">Check out my projects</div>
  //               </div>
  //             </div>

  //           </div>
  //        </div>


         










  //   </div>
  //   <div className='h-full w-full bg-primary-300'>a</div>
    
  // </div> 
  )
}

export default App
