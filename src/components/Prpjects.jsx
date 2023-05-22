/* eslint-disable no-unused-vars */
import React from "react";
import DropDown from "./DropDown";

export default function Projects() {
    return (
    <div className='h-auto w-full mt-0 px-0 lg:px-10' id="projects">
      <div className='h-auto w-full  flex flex-row'>
        <div className='h-auto w-full'>
          <div className='h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2'>Projects</div>
          <div className='h-auto w-full flex flex-col md:px-4'>
            <div className='h-auto w-auto text-center md:text-left h6 sm:h5'>The best way to learn</div>
            <div className='h-auto w-auto  text-center md:text-left h6 sm:h5'>is to build</div>
          </div>
       </div>
       <div className='h-auto w-full flex items-center justify-end  hidden sm:flex pr-6 '>
        <DropDown />
       </div>
       

     </div>


      <div className='flex flex-col h-auto w-auto mt-12 items-center md:flex-row md:flex-wrap md:place-content-evenly'>

        <a href='https://abedelrazzak.github.io/path-finding-visualizer/' target="_blank" className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-path-finding-visualizer-pic h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Path finding visualizer</div>
            <div className='p1 text-primary-200'>html css react javascript</div>
          </div>
        </a>

        <a href='https://abedelrazzak.github.io/sorting-visualizer/' target='_blank' className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-sorting-visualizer-pic h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Sorting visualizer</div>
            <div className='p1 text-primary-200'>html css react javascript</div>
          </div>
        </a>

        <a href='https://abedelrazzak.github.io/wordvid/' target='_blank'  className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-wordvid-pic h-64 w-full bg-cover bg-center bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Wordvid</div>
            <div className='p1 text-primary-200'>react tailwind python</div>
          </div>
        </a>

        

        <a href='https://abedelrazzak.github.io/ElonDrifts/' target='_blank'  className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-elondrifts-pic h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>ElonDrifts</div>
            <div className='p1 text-primary-200'>React css ThreeJS Blender</div>
          </div>
        </a>

        <a href='https://abedelrazzak.github.io/WebPortfolio/' target='_blank'  className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-webportfolio-pic h-64 w-full bg-cover bg-center bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Web portfolio</div>
            <div className='p1 text-primary-200'>React tailwind </div>
          </div>
        </a>

        <a href='https://www.figma.com/file/aL5W7WEVamggEPiaF8KuJk/Portfolio?type=design&t=n2NzYpQdF1W8xLfX-0' target='_blank'  className='mt-4 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
          <div className='h-auto w-auto p-3 rounded-3xl'>
            <div className='bg-webportfolioDesign-pic h-64 w-full bg-cover bg-no-repeat rounded-3xl'></div>
          </div>
          <div className='h-full w-full flex flex-col pl-3'>
            <div className='h5 text-primary-400'>Web portfolio Design</div>
            <div className='p1 text-primary-200'>Figma</div>
          </div>
        </a>

        <div className='h-auto w-full px-6 '>
        <div className="invisible md:invisible  h-12 w-full my-20 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
          <div className="flex h-full w-auto flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
            <div className="p1 hover:h6 flex h-12 w-auto items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">See more</div>
          </div>
        </div>
        </div>

      </div>

    </div>
    )
}