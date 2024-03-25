/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function HeroMain(props) {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true });
  const ref6 = useRef(null);
  const isInView6 = useInView(ref6, { once: true });

  const clients = [
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-fleurielbv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-MUC.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-navigatesuccess.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-vressocasa.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-premierarcv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-dentrooper360.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-iccev2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-fleurielbv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-MUC.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-navigatesuccess.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-vressocasa.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-premierarcv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-dentrooper360.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-icce.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-fleurielbv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-MUC.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-navigatesuccess.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-vressocasa.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-premierarcv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-dentrooper360.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-iccev2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-fleurielbv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-MUC.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-navigatesuccess.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-vressocasa.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-premierarcv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-dentrooper360.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-iccev2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-fleurielbv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-MUC.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-navigatesuccess.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-vressocasa.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-premierarcv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-dentrooper360.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-icce.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-fleurielbv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-MUC.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-navigatesuccess.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-vressocasa.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-premierarcv2.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-dentrooper360.png",
    "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/client-logo-iccev2.png",
  ];

  const ClientLogos = () => {
    const containerRef = useRef(null);

    return (
      <div
        className="overflow-hidden whitespace-nowrap 1mt-12 pb-24 shadow-white "
        style={{ width: "100%" }}
      >
        <div className="flex justify-center items-center h3 mb-[-12px]">
          {props.lang == "En" ? <>My Clients</> : <>Mes clients</>}
        </div>
        <div className="flex justify-center items-center h3 text-gradient-100 mb-20 whitespace-normal text-center">
          {props.lang == "En" ? (
            <>You’ll be in good company</>
          ) : (
            <>Vous serez en bonne compagnie</>
          )}
        </div>
        <div
          ref={containerRef}
          className="flex justify-center items-center space-x-4 md:space-x-8 lg:space-x-12 animate-loop-scroll"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center"
            >
              <img
                src={`${client}`}
                alt={`Client ${index + 1}`}
                className="h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-[#D5DEFF] from-2% via-[#E7D6FF] via-20% via-[#ffffff] via-20%  to-[#E7D6FF] flex flex-col items-center justify-center">
      <div className="h-auto w-full bg-cover bg-center bg-no-repeat bg-hero-main-prodk flex flex-col lg:flex-row pt-24 mb-n24 p-8 max-w-[1800px]">
        <div className="h-auto w-full px-2 flex flex-col">
          <div className="h-auto w-auto flex flex-col justify-center items-center lg:items-start  space-y-[-0.7rem] ">
            <div className="h-auto w-auto  flex flex-col space-y-[-0.5rem]">
              <div className="h2 h-full text-center sm:text-h1 md:text-h2 xl:text-h1">
                Abed
              </div>
              {/* <div className='h-[3px] w-full bg-gradient-50 '></div> */}
            </div>

            <div className="h-auto w-auto space-y-[-0.5rem]">
              <div className="flex flex-col h-auto w-auto sm:flex-row items-center justify-center">
                <div className="h-auto w-auto  flex flex-row md:flex-col  space-y-[-0.5rem]">
                  <div className="h-auto w-auto h2 md:text-center  sm:text-h1 md:text-h2 xl:text-h1">
                    El Razzak
                  </div>
                  {/* <div className='h-[3px] w-full bg-gradient-50 sm:invisible'></div> */}
                </div>

                <div className="h-auto w-auto  flex flex-col space-y-[-0.5rem]">
                  {props.lang === "En" ? (
                    <div className="h-full w-full h2 md:text-center pl-4 sm:text-h1 md:text-h2 xl:text-h1">
                      Shreim
                    </div>
                  ) : (
                    <div className="h-full w-full h2 text-center pl-4 sm:text-h1 md:text-h2 xl:text-h1">
                      Chreim
                    </div>
                  )}

                  {/* <div className='h-[3px] w-full bg-gradient-50 sm:invisible'></div> */}
                </div>
              </div>
              {/* <div className='h-[3px] w-full bg-gradient-50 invisible sm:visible'></div> */}
            </div>
          </div>

          <div className="pt-7">
            <div className="w-full p1 text-primary-300 flex flex-col justify-center items-center lg:items-start">
              {props.lang === "En" ? (
                <div className="text-center lg:text-start ">
                  I am a Full stack web developer & UI/UX designer, I build
                  Websites from Scratch or using a CMS like Wordpress with
                  knowledge in Frontend and Backend development. Additionally, I
                  major in Mechatronic Systems Technology.
                </div>
              ) : (
                <div className="text-center lg:text-start  ">
                  Je suis développeur web Full Stack et designer UI/UX. Je crée
                  des sites web à partir de zéro ou en utilisant un CMS comme
                  Wordpress, avec des compétences en développement Frontend et
                  Backend. De plus, je suis spécialisé en technologie des
                  systèmes mécatroniques.
                </div>
              )}
            </div>
          </div>

          <div className="h-auto w-full flex justify-start items-center lg:items-start py-10  ">
            <div className="h-auto w-full flex flex-col justify-center lg:justify-start items-center lg:items-start sm:flex-row ">
              <div className="h-auto w-full sm:max-w-[265px] ">
                <a
                  href="#contactPage"
                  className=" flex h-12 cursor-pointer rounded-xl  bg-[#205CD0] bg-gradient-to-br from-[#205CD0] to-[#7DA1E5] transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                    {props.lang === "En" ? (
                      <div className="p1 flex h-12 w-full items-center justify-center rounded-2xl px-8 md:px-0 xl:px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">
                        Connect with me now
                      </div>
                    ) : (
                      <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">
                        Contacter moi
                      </div>
                    )}
                  </div>
                </a>
              </div>

              <div className="h-auto w-full sm:max-w-[265px] ml-4 ">
                <a
                  href="#projects"
                  className=" flex h-12 cursor-pointer rounded-xl bg-secondary-200a transition adelay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
                    {props.lang === "En" ? (
                      <div className="p1 ahover:h6 flex h-12 w-full items-center justify-center rounded-2xl md:px-0 xl:px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">
                        Check out my projects
                        <svg
                          className="ml-1 stroke-current transition-transform group-hover:translate-x-1 h-4 group-hover:stroke-gray-700 group-active:stroke-[url(#arrowGradient)]"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 6L12 10L8 14"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <defs>
                            <linearGradient
                              id="arrowGradient"
                              x1="12"
                              y1="6"
                              x2="5.00749"
                              y2="10.7543"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="0.24238"
                                stop-color="#0055FF"
                              ></stop>
                              <stop offset="1" stop-color="#21D6EF"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    ) : (
                      <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">
                        Voir mes projets
                      </div>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* <div className='h-full w-full flex flex-row justify-evenly content-evenly items-center space-x-0 pt-12 pb-24 sm:pb-0 lg:pb-[12rem] '>
          <div  className="sm:hidden h-64 w-36 bg-cover bg-no-repeat bg-ui-mobile-react-prod"
          ref={ref5}          
          style={{
            transform: isInView5 ? "none" : "translateX(2px)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className="sm:hidden h-52 w-44 bg-contain bg-center bg-no-repeat bg-ui-mobile-figma-prod"
          ref={ref6}          
          style={{
            transform: isInView6 ? "none" : "translateX(-2px)",
            opacity: isInView6 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>

          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-contain min-[1200px]:bg-cover bg-no-repeat bg-ui-lg-figma bg-center '
          ref={ref1}          
          style={{
            transform: isInView1 ? "none" : "translateX(-8px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className='hidden sm:block h-[30rem] w-[20rem]  sm:bg-contain lg:bg-contain min-[1200px]:bg-cover bg-no-repeat bg-ui-lg-react bg-center '
          ref={ref2}          
          style={{
            transform: isInView2 ? "none" : "translateX(-8px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className='hidden sm:block h-[18rem] w-[20rem] lg:w-96 sm:bg-contain lg:bg-contain min-[1200px]:bg-cover bg-no-repeat bg-ui-lg-blender bg-center  '
          ref={ref3}          
          style={{
            transform: isInView3 ? "none" : "translateX(8px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>
          <div className='hidden sm:block h-[30rem]  w-[21rem]  sm:bg-contain lg:bg-contain min-[1200px]:bg-cover bg-no-repeat bg-ui-lg-python bg-center '
          ref={ref4}          
          style={{
            transform: isInView4 ? "none" : "translateX(8px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
          ></div>

        </div> */}
        </div>
        <div className="h-auto w-auto py-20 md:py-0">
          <img
            className="h-auto w-full"
            src="https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/pic-hero-main.png"
          ></img>
        </div>
      </div>
      <ClientLogos />
    </div>
  );
}
