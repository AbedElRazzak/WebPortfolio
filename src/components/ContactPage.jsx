/* eslint-disable no-unused-vars */
import React from "react";
import ContactForm from "./ContactForm";

export default function ContactPage(props) {
  // absolute top-[6400px] sm:top-[5300px] lg:top-[4000px] z-20
    return (
    <div className='h-full text-secondary-50 w-full  bg-primary-400 ' id="contactPage">

      <div className='h-full w-full flex flex-col '>

        <div className='h-full w-full flex justify-center items-center bg-contact-bg bg-no-repeat bg-cover sm:bg-contain bg-left sm:bg-center'>
          <ContactForm lang={props.lang} alertHandler={props.alertHandler}/>
        </div>


        <div className='h-full w-full flex flex-col sm:flex-row items-center justify-center'>

          <div className='sm:order-first w-full h-full flex justify-center sm:justify-start items-center py-4 sm:px-8'>
            <div className='flex flex-row items-center justify-center space-x-2'>
               <div className='bg-copyright-icon h-6 w-6 bg-no-repeat bg-contain'></div>
               <div className='h-full w-full p3'>2023 Abed El Razzak Chreim. All Rights Reserved.</div>
            </div>
          </div>
          
          <div className='order-first w-full h-full flex justify-center sm:justify-end items-center p-2 sm:px-8 '>
            <div className='h-auto w-fit space-x-4 flex flex-row '>
              <a target="_blank" href="https://twitter.com/AbedElRazzak1" className='bg-twitter-icon h-6 w-6 bg-no-repeat bg-contain'></a>
              <a target="_blank" href="https://www.instagram.com/abedelrazzakchreim/?hl=en" className='bg-instagram-icon h-6 w-6 bg-no-repeat bg-contain'></a>
              <a target="_blank" href="https://www.linkedin.com/in/abed-el-razzak-chreim-b5a33a1a3/" className='bg-linkedin-icon h-6 w-6  bg-no-repeat bg-contain'></a>
              <a target="_blank" href="https://github.com/AbedElRazzak" className='bg-github-icon h-6 w-6  bg-no-repeat bg-contain'></a>
            </div>
          </div>

        </div>

      </div>

    </div>
    )
}