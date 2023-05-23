import React from "react";
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { config } from "dotenv";

export default function ContactForm() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          e.target.reset()
      }


    return (
        <form ref={form} onSubmit={sendEmail} className='h-full w-full px-6 py-12 sm:py-40 pb-28 space-y-3 max-w-lg'>
            <div className='h3 underline '>Contact</div>
            <input name="user_name" type="text" placeholder="Enter your Full Name" className='outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200'></input>
            <input name="user_email" type="text" placeholder="Enter your Email" className='outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200'></input>
            <textarea name="message" type="text" placeholder="Message" className=' outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200 min-h-[9rem]'></textarea>

            <div className='h-auto w-full sm:max-w-[265px] '>
               <div className="m-1 flex h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in border-[1px] border-[#8DBDD3]  hover:drop-shadow-3xl">
                 <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in h">
                   <button type="submit" value="Send" className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-gradient-50  rounded-xl">Work with me</button>
                 </div>
               </div>
          </div>
      </form>
    )
}