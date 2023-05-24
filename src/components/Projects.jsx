/* eslint-disable no-unused-vars */
import React from "react";
import DropDown from "./DropDown";
import { useRef } from "react";
import { useInView } from "framer-motion"


export default function Projects(props) {

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const [type, setType] = React.useState("All")
  function typeChangeHandler(newType) {
    if (type != newType) {
      setType(newType)
    }
  }

  const projectsData = [
    {
      "name" : "Path finding visualizer",
      "pic": "bg-path-finding-visualizer-pic",
      "url": "https://abedelrazzak.github.io/path-finding-visualizer/",
      "description": "html css react javascript",
      "type": "WebApps"
    },
    {
      "name" : "Sorting visualizer",
      "pic": "bg-sorting-visualizer-pic",
      "url": "https://abedelrazzak.github.io/sorting-visualizer/",
      "description": "html css react javascript",
      "type": "WebApps"
    },
    {
      "name" : "Wordvid",
      "pic": "bg-wordvid-pic",
      "url": "https://abedelrazzak.github.io/wordvid/",
      "description": "react tailwind python",
      "type": "WebApps"
    },
    {
      "name" : "ElonDrifts",
      "pic": "bg-elondrifts-pic",
      "url": "https://abedelrazzak.github.io/ElonDrifts/",
      "description": "React css ThreeJS Blender",
      "type": "WebApps"
    },
    {
      "name" : "Web portfolio",
      "pic": "bg-webportfolio-pic",
      "url": "https://abedelrazzak.github.io/WebPortfolio/",
      "description": "React tailwind",
      "type": "WebApps"
    },
    {
      "name" : "Web portfolio design",
      "pic": "bg-webportfolioDesign-pic",
      "url": "https://abedelrazzak.github.io/WebPortfolio/",
      "description": "Figma",
      "type": "Designs"
    },
    {
      "name" : "Computer from scratch",
      "pic": "bg-circuitverse-pic",
      "url": "https://circuitverse.org/users/11477/projects/computer-d97828a4-377c-4c13-a03d-149bdf1a58db",
      "description": "circuitverse",
      "type": "Other"
    },
  ]

  const Projects = () => {
    return (
      <div className='flex flex-col h-auto w-auto mt-12 items-center md:flex-row md:flex-wrap lg:place-content-evenlys sm:pl-6 lg:pl-8' >
        {projectsData.map((project, index) => {
          if (project.type == type) {
            return (
                <a key={index} href={project.url} target="_blank"
                 className=' m-4 lg:m-2 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
                  <div className='h-auto w-auto p-3 rounded-3xl'>
                    <div className={`${project.pic} h-64 w-full bg-cover bg-no-repeat rounded-3xl bg-center`}></div>
                  </div>
                  <div className='h-full w-full flex flex-col pl-3'>
                    <div className='h5 text-primary-400'>{project.name}</div>
                    <div className='p1 text-primary-200'>{project.description}</div>
                  </div>
                </a>
                )
            
          }else if (type == "All") {
            return (
              <a key={index} href={project.url} target="_blank" className=' m-4 lg:m-2 h-96 w-80 sm:w-[22rem] lg:w-96 bg-secondary-50 rounded-3xl border-4 border-border-50 drop-shadow-4xl  flex flex-col'>
                <div className='h-auto w-auto p-3 rounded-3xl'>
                  <div className={`${project.pic} h-64 w-full bg-cover bg-no-repeat rounded-3xl bg-center`}></div>
                </div>
                <div className='h-full w-full flex flex-col pl-3'>
                  <div className='h5 text-primary-400'>{project.name}</div>
                  <div className='p1 text-primary-200'>{project.description}</div>
                </div>
              </a>
              )
          }
        })}
      </div>
    )
  }

    return (
    <div className='h-auto w-full scroll-m-[4rem] px-0 lg:px-10' id="projects" 
    ref={ref2}          
    style={{
      transform: isInView2 ? "none" : "translateY(-50px)",
      opacity: isInView2 ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
    }}
    >
      
      <div className='h-auto w-full  flex flex-col sm:flex-row'>
        <div className='h-auto w-full'>
          {props.lang === "En" ?
          <div className='h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2'>Projects</div>
          :
          <div className='h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2'>Projets</div>
          }
          
          <div className='h-auto w-full flex flex-col md:px-4'>
            {props.lang === "En" ?
            <div className='h-auto w-auto text-center md:text-left h6 sm:h5'>The best way to learn</div>
            :
            <div className='h-auto w-auto text-center md:text-left h6 sm:h5'>La meilleure façon d'apprendre</div>
            }

            {props.lang === "En" ?
            <div className='h-auto w-auto  text-center md:text-left h6 sm:h5'>is to build</div>
            :
            <div className='h-auto w-auto  text-center md:text-left h6 sm:h5'>est de construire</div>
            }
            

          </div>
       </div>
       <div className='h-auto w-full pt-8 sm:pt-0 flex items-center justify-center sm:justify-end sm:flex sm:pr-6 '>
        <DropDown type={type} typeChangeHandler={typeChangeHandler}/>
       </div>
       

     </div>

      <Projects />

        <div className='h-auto w-full px-6 '>
        <div className="invisible md:invisible  h-12 w-full my-20 cursor-pointer rounded-xl bg-secondary-200 transition delay-[35ms] ease-in hover:bg-gradient-100 drop-shadow-xl hover:drop-shadow-3xl">
          <div className="flex h-full w-auto flex-col items-center justify-center rounded-xl transition ease-in hover:bg-gradient-100">
            <div className="p1 hover:h6 flex h-12 w-auto items-center justify-center rounded-2xl px-8 py-2 text-primary-400 transition ease-in hover:text-secondary-100 rounded-xl">See more</div>
          </div>
        </div>
        </div>

    </div>
    )
}