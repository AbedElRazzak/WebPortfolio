/* eslint-disable no-unused-vars */
import React from "react";
import LangDropDown from "./LangDropDown";

export default function Navbar() {

    return (
        <nav className=' flex flex-row items-end lg:items-center py-1 sm:py-1 lg:pt-0 sticky top-0 z-50 backdrop-blur-md  bg-shades-50/70 bg-primary-400'>

        <a href="#homepage" className='h-full w-full mb-1 lg:mb-0 lg:p-1 drop-shadow-xl '>
          <div className='h-8 bg-contain bg-no-repeat bg-navbar-logo-prod'></div>
        </a>

        <div className='hidden lg:flex flex flex-row h-full w-full p-1 drop-shadow-6xl'>
          <a href="#homepage" className=' h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Home</a>
          <a href="#projects" className='h-full w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Projects</a>
          <a href="#skillsAndExpertise" className='h-full min-w-fit w-full font-[14px] font-semibold leading-tight m-1 cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Skills & Expertise</a>
          <a href="#contactPage" className='h-full w-full font-[14px] font-semibold m-1 leading-tight text-right cursor-pointer text-primary-400 active:text-primary-200 focus:text-primary-200'>Contact</a>
        </div>

        <div className='h-full w-full pt-0 mr-4  flex justify-start '>

          <div className='h-4 bg-right  w-full bg-contain bg-no-repeat bg-burger-logo-prod mb-1 lg:invisible drop-shadow-xl'></div>

          <LangDropDown />

        </div>

      </nav>
    )
}