/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function ContactPage(props) {
  // absolute top-[6400px] sm:top-[5300px] lg:top-[4000px] z-20
  const navigate = useNavigate();
  return (
    <div
      className="h-full w-full text-secondary-50 w-full bg-[#020617] "
      id="contactPage"
    >
      <div className="h-full w-full flex flex-col ">
        <div className="h-full w-full flex justify-center items-center bg-contact-bg bg-no-repeat bg-cover sm:bg-contain bg-left sm:bg-center flex-col">
          <div className="h-full w-full px-6 max-w-lg h2 pt-40">Contact Me</div>
          <ContactForm lang={props.lang} alertHandler={props.alertHandler} />
        </div>
        {/* <div className="w-full h-auto flex flex-col md:flex-row justify-between px-6">
          <div className="h-full w-full  pb-28 max-w-lg">
            <img
              src="https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/footer-pic.png"
              className="max-w-[150px]"
            ></img>
            <div className="p2 pt-4 text-justify">
              Experienced Full Stack Web Developer & UI/UX Designer adept at
              building websites from scratch or using CMS like Wordpress.
              Background in Mechatronic Systems Technology.
            </div>
          </div>
          <div className="p2 ph-[80px] w-fdull flex flex-zrow justify-end items-start">
            Go check out my
            <span className="flex flex-row">
            <a className="cursor-pointer ml-2 hover:border-b-[2px] hover:border-primary-200 hover:text-primary-200">Medium </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                className="w-6 h-6 ml-2 mr-2 fill-white group-hover:fill-black transition-colors duration-300"
              >
                <path
                  d="M19.5013 2.4432L21.1427 0.790271V0.428467H15.4564L11.4039 11.0462L6.79329 0.428467H0.831003V0.790271L2.74843 3.22005C2.93529 3.39959 3.033 3.66215 3.00815 3.92651V13.4751C3.06729 13.8188 2.961 14.1725 2.73129 14.4225L0.571289 17.1779V17.5352H6.69557V17.1734L4.53557 14.4225C4.30157 14.1716 4.191 13.8243 4.23815 13.4751V5.21584L9.61415 17.5397H10.239L14.8616 5.21584V15.0333C14.8616 15.2922 14.8616 15.3455 14.7004 15.5151L13.0376 17.2086V17.5713H21.105V17.2095L19.5021 15.5575C19.3616 15.4456 19.2887 15.2579 19.3187 15.0757V2.92501C19.2887 2.74185 19.3607 2.55418 19.5013 2.4432V2.4432Z"
                  fill="white"
                />
              </svg>
              
            </span>
            for my project's code explanations 
             <div className="block"> or check out my<a className="cursor-pointer ml-2 hover:border-b-[2px] hover:border-primary-200 hover:text-primary-200">Blog</a></div>
          </div>
        </div> */}

        <div className="w-full flex justify-center text-primary-100 ">
          <div className="h-full w-full flex flex-col md:flex-row items-start justify-center max-w-[1334px] ">
            <div className="w-full h-full flex flex-col justify-start items-start pt-0 sm:px-8 mb-8 md:mb-0">
              <div className="h-auto w-fit space-y-4 flex flex-col ">
                <div className="h-full w-full max-w-lg">
                  <img
                    src="https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/footer-pic.png"
                    className="max-w-[120px]"
                  ></img>
                  <div className="p2 pt-4 ">Full Stack Web Developer.</div>
                </div>
                {/* <p className="h6 pb-2">Contact Me</p>
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
                </div> */}
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8 mb-8 md:mb-0">
              <div className="h-auto w-fit space-y-4 flex flex-col ">
                <p className="ah6 font-semibold pb-2 text-white">Contact Me</p>
                <div className="flex flex-row space-x-2 justify-start items-center">
                  <a
                    target="_blank"
                    href="tel:+96171441380"
                    className="bg-phone-icon h-5 w-5 bg-no-repeat bg-contain"
                  ></a>
                  <a
                    target="_blank"
                    href="tel:+96171441380"
                    className="h-6 hover:text-primary-200"
                  >
                    +961 71441380
                  </a>
                </div>

                <div className="flex flex-row space-x-2 justify-start items-center">
                  <a
                    target="_blank"
                    href="mailto:chreimabedelrazzak@gmail.com"
                    className="bg-mail-icon h-5 w-5 bg-no-repeat bg-contain"
                  ></a>
                  <a
                    target="_blank"
                    href="mailto:chreimabedelrazzak@gmail.com"
                    className="h-8 hover:text-primary-200"
                  >
                    chreimabedelrazzak@gmail.com
                  </a>
                </div>

                <div className="flex flex-row space-x-2 justify-start items-center hover:text-primary-200">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/abed-el-razzak-chreim-b5a33a1a3/"
                    className="bg-linkedin-icon h-5 w-5  bg-no-repeat bg-contain"
                  ></a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/abed-el-razzak-chreim-b5a33a1a3/"
                    className=""
                  >
                    Abed El Razzak Shreim
                  </a>
                </div>

                <div className="flex flex-row space-x-2 justify-start items-center hover:text-primary-200">
                  <a
                    target="_blank"
                    href="https://github.com/AbedElRazzak"
                    className="bg-github-icon h-5 w-5  bg-no-repeat bg-contain"
                  ></a>
                  <a target="_blank" href="https://github.com/AbedElRazzak">
                    AbedElRazzak
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8  mb-8 md:mb-0">
              <p className="\h6 font-semibold pb-2  text-white">Useful Links</p>
              <p
                onClick={() => navigate("Resume")}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                Download my CV
              </p>
              <p
                onClick={() => {
                  navigate("/WebPortfolio/BlogPage");
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }, 50);
                }}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                My Blog
              </p>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start p-2 sm:px-8  mb-8 md:mb-0">
              <p className="ah6 font-semibold pb-2  text-white">Navigation</p>
              <div
                onClick={() => {
                  navigate("/WebPortfolio/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                Home
              </div>
              <div
                onClick={() => {
                  navigate("/WebPortfolio/#projects");
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                Projects
              </div>
              <div
                onClick={() => {
                  navigate("/WebPortfolio/#skillsAndExpertise");
                  setTimeout(() => {
                    document
                      .getElementById("skillsAndExpertise")
                      .scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                Skills & Expertise
              </div>
              <div
                onClick={() => {
                  navigate("/WebPortfolio/BlogPage");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                Blog
              </div>
              <div
                onClick={() => {
                  navigate("/WebPortfolio/#contactPage");
                  setTimeout(() => {
                    document
                      .getElementById("contactPage")
                      .scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="p2 cursor-pointer hover:text-primary-200"
              >
                Contact
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start p-2 md:pl-0  mb-20 md:mb-0">
              <p className="h6a font-semibold pb-2  text-white">Address</p>
              <p className="p2 text-primary-100">Koraytem, Beirut, Lebanon.</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center md:justify-end items-end py-0 sm:px-8">
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="bg-copyright-icon h-4 w-4 bg-no-repeat bg-contain"></div>
            <div className="h-full w-full p3">
              2024 Abed El Razzak Chreim. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
