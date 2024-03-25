import React, { useEffect } from "react";
import { useRef } from "react"
import emailjs from '@emailjs/browser';
// import { config } from "dotenv";


export default function ContactForm(props) {
  const [lang, setLang] = React.useState("En")
  useEffect(()=> {
    if (!props.lang) {
      console.log(props.lang)
    } else {
      setLang(props.lang)
    }
  }, [props.lang])



    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              props.alertHandler("Message sent - Thank you for reaching out!", true)

          }, (error) => {
              console.log(error.text);
              props.alertHandler("Message not sent - please try again!", false)

          })
          e.target.reset()
      }


    return (
      <>
        <form ref={form} onSubmit={sendEmail} className='h-full w-full px-6 py-12 pb-28 space-y-3 max-w-lg'>
            {/* <div className='h3 underline '>Contact</div> */}
            {lang === "En" ?
            <input name="user_name" type="text" placeholder="Enter your Full Name" className='outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200'></input>
            :
            <input name="user_name" type="text" placeholder="Entrez votre nom complet" className='outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200'></input>
            }
            {lang === "En" ?
            <input name="user_email" type="text" placeholder="Enter your Email" className='outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200'></input>
            :
            <input name="user_email" type="text" placeholder="Entrez votre Email" className='outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200'></input>
            }
            <textarea name="message" type="text" placeholder="Message" className=' outline-0 w-full px-[19px] py-[10px] bg-secondary-50 border-[1px] border-[#8DBDD3] rounded-[15px] p1 text-primary-200 min-h-[9rem]'></textarea>

            <div className='h-auto w-full sm:max-w-[265px] '>
               <div className="m-1 flex h-12 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in border-[1px] border-[#8DBDD3]  hover:drop-shadow-3xl">
                 <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in h">
                   {lang === "En" ?
                   <button type="submit" value="Send" className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-gradient-50  rounded-xl">Work with me</button>
                   :
                   <button type="submit" value="Send" className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-gradient-50  rounded-xl">Travailler avec moi</button>
                   }
                 </div>
               </div>
          </div>
        </form>
        
      </>
    )
}