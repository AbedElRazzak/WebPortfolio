/* eslint-disable no-unused-vars */
import React from "react";
import {
  useNavigate
} from 'react-router-dom';
import ContactForm from "./ContactForm";

export default function ContactPage(props) {
  // absolute top-[6400px] sm:top-[5300px] lg:top-[4000px] z-20
  const navigate = useNavigate()
  return (
    <div
      className="h-full w-full text-secondary-50 w-full bg-primary-400 "
      id="contactPage"
    >
      <div className="h-full w-full flex flex-col ">
        <div className="h-full w-full flex justify-center items-center bg-contact-bg bg-no-repeat bg-cover sm:bg-contain bg-left sm:bg-center">
          <ContactForm lang={props.lang} alertHandler={props.alertHandler} />
        </div>


        <div className="w-full flex justify-center">
          <div className="h-full w-full flex flex-col md:flex-row items-start justify-center max-w-[1334px] ">
            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8 mb-8 md:mb-0">
              <div className="h-auto w-fit space-y-4 flex flex-col ">
                <p className="h6 pb-2">Contact Me</p>
                <div className="flex flex-row space-x-2 justify-start items-center">
                  <a
                    target="_blank"
                    href=""
                    className="bg-phone-icon h-5 w-5 bg-no-repeat bg-contain"
                  ></a>
                  <p className="h-6">+961 71441380</p>
                </div>

                <div className="flex flex-row space-x-2 justify-start items-center">
                  <a
                    target="_blank"
                    href=""
                    className="bg-mail-icon h-5 w-5 bg-no-repeat bg-contain"
                  ></a>
                  <p className="h-8">chreimabedelrazzak@gmail.com</p>
                </div>

                <div className="flex flex-row space-x-2 justify-start items-center">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/abed-el-razzak-chreim-b5a33a1a3/"
                    className="bg-linkedin-icon h-5 w-5  bg-no-repeat bg-contain"
                  ></a>
                  <p>Abed El Razzak Shreim</p>
                </div>

                <div className="flex flex-row space-x-2 justify-start items-center">
                  <a
                    target="_blank"
                    href="https://github.com/AbedElRazzak"
                    className="bg-github-icon h-5 w-5  bg-no-repeat bg-contain"
                  ></a>
                  <p>AbedElRazzak</p>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8  mb-8 md:mb-0">
              <p className="h6 pb-2">Useful Links</p>
              <p onClick={() => navigate("Resume")} className="p2 cursor-pointer">Download my CV</p>
              <p onClick={() => navigate("BlogPage")} className="p2 cursor-pointer">My Blog</p>
            </div>




            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8  mb-8 md:mb-0">
              <p className="h6 pb-2">Navigation</p>
              <a href="#homepage" className="p2">Home</a>
              <a href="#projects" className="p2">Projects</a>
              <a href="#skillsAndExpertise" className="p2">Skills & Expertise</a>
              <a href="#contactPage" className="p2">Contact</a>
            </div>




            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8  mb-20 md:mb-0">
              <p className="h6 pb-2">Address</p>
              <p className="p2">Al Hussein Street, Itany Building, Koraytem Beirut, Lebanon.</p>
            </div>




          </div>
        </div>

        <div className="w-full h-full flex justify-center md:justify-end items-end py-0 sm:px-8">
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="bg-copyright-icon h-4 w-4 bg-no-repeat bg-contain"></div>
            <div className="h-full w-full p3">
              2023 Abed El Razzak Chreim. All Rights Reserved.
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
