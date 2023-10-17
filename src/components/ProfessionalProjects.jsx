import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Modal from "./Modal";

export default function ProfessionalProjects(props) {
  


  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });


  const projectsData = [
    {
      id: 0,
      name: "Vresso Casa",
      pic: "bg-vressocasa-pic",
      url: "https://vressocasa.com/",
      description: "ReactJS TailwindCSS PHP Laravel",
      readmore: "Vresso Casa is a company in Lebanon that supplies kitchen appliances and solutions to both professional and domestic kitchens. This website is an ecommerce website that displays their products with a payment gateway integrated, it also include a way to make an account, a shopping cart, a wishlist, and many more features."
    },
    {
      id: 1,
      name: "ICCEnergy",
      pic: "bg-icce-pic",
      url: "https://icc.energy/",
      description: "CSS JavaScript Wordpress",
      readmore: "ICCEnergy is an enterprise established in Dubai, UAE by local experts with 15+ years of experience in Construction, Oil and Gas industry. This website is a business website that displays information about the company and their services"
    },
    // {
    //   name: "test",
    //   pic: "",
    //   url: "",
    //   description: "",
    // },
  ];

  const Projects = () => {
    return (
      <div className="h-auto w-full flex justify-center items-center">
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 mt-12  lg:pr-0 ">
          {projectsData.map((project, index) => {
            return (
              <div
                key={index}
                className=" lg:m-2 min-h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col"
              >
                <div className="h-auto w-auto p-3 rounded-3xl ">
                  <div className="h-auto w-auto overflow-hidden rounded-3xl">
                    <div
                      className={`${project.pic} h-64 w-full bg-cover bg-no-repeat rounded-3xl bg-left`}
                    ></div>
                  </div>
                </div>
                <div className="h-full w-full flex flex-col pl-3">
                  <div className="h5 text-primary-400">{project.name}</div>
                  <div className="p1 text-primary-200">
                    {project.description}
                  </div>
                  <div className="h-auto w-full flex flex-row p-4 pt-12 bg-primasry-300">
                    <div className="w-full bg-primsary-100 flex justify-center items-center">
                      <a
                        target="_blank"
                        className="text-primary-400 p1 hover:underline cursor-pointer"
                        onClick={() => {
                          props.setReadMoreModalIsOpen(true);
                          props.setReadMoreContent(project.readmore);
                        }}
                      >
                        Read More
                      </a>
                    </div>
                    <div className="w-full bg-primary-20s0 flex justify-center items-center ">
                      <a
                        target="_blank"
                        href={project.url}
                        className="text-accent-blue-400 h6 font-semibold"
                      >
                        View
                      </a>
                      <img
                        src={
                          "https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62e6ee31eb6f4a4a240f88b8_get-started_arrow.svg"
                        }
                        className="pl-1"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className="h-auto w-full scroll-m-[4rem] px-0 lg:px-10"
      id="projects"
      ref={ref2}
      style={{
        transform: isInView2 ? "none" : "translateY(-50px)",
        opacity: isInView2 ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="h-auto w-full  flex flex-col sm:flex-row">
        <div className="h-auto w-full">
          {props.lang === "En" ? (
            <div className="h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2">
              Professional Projects
            </div>
          ) : (
            <div className="h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2">
              Projets
            </div>
          )}

          <div className="h-auto w-full flex flex-col md:px-4">
            {props.lang === "En" ? (
              <div className="h-auto w-auto text-center md:text-left h6 sm:h5">
                Empowering Businesses with Expertly Crafted Web Solutions.
              </div>
            ) : (
              <div className="h-auto w-auto text-center md:text-left h6 sm:h5">
                La meilleure façon d'apprendre
              </div>
            )}

            {props.lang === "En" ? (
              <div className="h-auto w-auto  text-center md:text-left h6 sm:h5"></div>
            ) : (
              <div className="h-auto w-auto  text-center md:text-left h6 sm:h5">
                est de construire
              </div>
            )}
          </div>
        </div>
      </div>

      
      {props.readMoreModalIsOpen && <Modal setReadMoreModalIsOpen={props.setReadMoreModalIsOpen} readMoreContent={props.readMoreContent}/>}

      <Projects />

      <div className="h-auto w-full px-6 ">
        <div className="invisible md:invisible  h-12 w-full my-20 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
          <div className="flex h-full w-auto flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
            <div className="p1 hover:h6 flex h-12 w-auto items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">
              See more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
