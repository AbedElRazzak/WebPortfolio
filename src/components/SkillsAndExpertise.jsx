/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion"



export default function SkillsAndExpertise(props) {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });



    return (
    <div className='h-full w-full relative z-10 ' id="skillsAndExpertise"

    >
    <div className='bg-primary-50 rounded-b-[1.5rem] '>
      <div className='h-auto w-full  flex flex-col sm:flex-row items-center space-y-[-1rem] sm:space-y-[0rem] sm:justify-center py-20'>
        {props.lang === "En" ?
        <div className='h3 lg:h2 text-gradient-50 p-1'>Skills and</div>
        :
        <div className='h3 lg:h2 text-gradient-50 p-1'>Compétences et</div>
        }

        {props.lang === "En" ? 
        <div className='h3 lg:h2 text-gradient-50 p-1 sm:px-2'>Expertise</div>
        :
        <div className='h3 lg:h2 text-gradient-50 p-1 sm:px-2'>Savoir-faire</div>
        }
        
      </div>

      <div className='flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start place-content-evenly px-2'>
        <div className='max-w-sm  my-24 md:12'>
          <div className='h-auto w-full h4 max-w-sm mb-10 flex flex-row items-top'>
            <div className=' w-auto h-full'>
              <div className='bg-code-icon h-20 bg-bottom w-20 bg-no-repeat bg-contain'></div>
            </div>
            <div className=' w-full pl-4 '>
              <div className=' m-1 w-fit'>
                {props.lang === "En" ? 
                <div className='pr-6'>Software</div>
                :
                <div className='pr-6'>Développement</div>
                }
                <div className='h-[4px] w-full bg-gradient-50'></div>
              </div>

              <div className='m-1 w-fit'>
                {props.lang === "En" ?
                <div className='pr-2'>Development</div>
                :
                <div className='pr-2'>de logiciel</div>
                }
                
                <div className='h-[4px] w-full bg-gradient-50'></div>
              </div>

          </div>
        </div>

        <div className='pl-6'>
            <div className='p3 font-normal w-full text-primary-200'> {'<p1>'}</div>
              <div className='pl-6  h-auto w-full'>
                {props.lang === 'En' ?
                <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>

                Experienced in both Functional and OOP: JavaScript (ES5 and ES6), Python, PHP Laravel and C.
                <br />
                <br />
                Experienced in Wordpress, React JS and familiar with various hosting and DNS providers e.g. Bluehost, Plesk, Godaddy, Cloudflare, etc...
                <br />
                <br />
                Skilled in server-side frameworks like PHP Laravel, Flask and NodeJS. Familiar with SEO best practices, and Loading time optimization.
                
                </div>
                :
                <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>

                Expérimenté dans les domaines fonctionnel et OOP : JavaScript (ES5 et ES6), Python, PHP Laravel et C.
                <br />
                <br />
                Expérimenté en Wordpress, React JS et familier avec divers fournisseurs d'hébergement et de DNS tels que Bluehost, Plesk, Godaddy, Cloudflare, etc...
                <br />
                <br />
                Compétent dans les frameworks côté serveur comme PHP Laravel, Flask et NodeJS. Familier avec les meilleures pratiques en matière de référencement (SEO) et l'optimisation du temps de chargement.
                
                </div>
                }

              </div>
            <div className='p3 text-primary-200 font-medium'> {'</p1>'}</div>
          

           </div>
          
      </div>

      <div className='max-w-sm  my-24 md:12'>
        <div className='h-auto w-full h4 max-w-sm mb-10 flex flex-row items-top'>
          <div className=' w-auto h-full'>
            <div className='bg-palette-icon h-20 bg-bottom w-20 bg-no-repeat bg-contain'></div>
          </div>
          <div className=' w-full pl-4 '>
            <div className=' m-1 w-fit'>
              {props.lang === "En" ?
              <div className='pr-6'>UI & UX</div>
              :
              <div className='pr-6'>UI et UX</div>
              }
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

            <div className='m-1 w-fit'>
              {props.lang === "En" ?
              <div className='pr-2'>Design</div>
              :
              <div className='pr-2'>Conception</div>
              }
              
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

          </div>
        </div>

        <div className='p3 font-normal w-full text-primary-200'> {'<p1>'}</div>
              <div className='pl-6  h-auto w-full'>
                {props.lang === "En" ?
                 <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>

                 Experienced in Figma and Blender.
                 <br />
                 <br />
                 I use figma for UI / UX design, I go from a user flow diagram all the way to a functional Prototype.
                 <br />
                 <br />
                 I use Blender to make custom 3D shapes, visual effects, animations and many more.

                 </div>
                 :
                 <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>

                 Expérimenté en Figma et Blender.
                 <br />
                 <br />
                 J'utilise Figma pour la conception UI / UX, je vais d'un diagramme de flux d'utilisateurs jusqu'à un prototype fonctionnel.
                 <br />
                 <br />
                 J'utilise Blender pour créer des formes 3D personnalisées, des effets visuels, des animations et bien plus encore.
                 </div>
                }

              </div>
            <div className='p3 text-primary-200 font-medium'> {'</p1>'}</div>

      </div>

      <div className='max-w-sm  my-24 md:12'>
        <div className='h-auto w-full h4 max-w-sm mb-10 flex flex-row items-top'>
          <div className=' w-auto h-full'>
            <div className='bg-lang-icon h-20 bg-bottom w-20 bg-no-repeat bg-contain'></div>
          </div>
          <div className=' w-full pl-4 '>
            <div className=' m-1 w-fit'>
              {props.lang === "En" ?
              <div className='pr-6'>Languages &</div>
              :
              <div className='pr-6'>Langues et</div>
              }
              
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

            <div className='m-1 w-fit'>
              {props.lang === "En" ? 
              <div className='pr-2'>Computer Skills</div>
              :
              <div className='pr-2'>Informatiques</div>
              }
              
              <div className='h-[4px] w-full bg-gradient-50'></div>
            </div>

          </div>
        </div>


        <div className='p3 font-normal w-full text-primary-200'> {'<p1>'}</div>
              <div className='pl-6  h-auto w-full'>
                {props.lang === "En" ?
                 <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>
                 I am a native Arabic speaker and have fluency in English and French, also I have studied German up to A2 level.
                 <br />
                 <br />
                 Experienced in IT troubleshooting, setup and administration. 
                 <br />
                 <br />
                 I am also knowledgeable in computer and circuit architecture.
                 </div>
                 :
                 <div className='p1 border-l border-primary-200 font-medium pl-2 w-fit'>
                 Je parle couramment l'anglais et le français, en plus de ma langue maternelle, l'arabe. J'ai également étudié l'allemand jusqu'au niveau A2.
                 <br />
                 <br />
                 Expérimenté dans le dépannage informatique, la configuration et l'administration.
                 <br />
                 <br />
                 Je connais également l'architecture des ordinateurs et des circuits.
                 </div>
                }

              </div>
            <div className='p3 text-primary-200 font-medium'> {'</p1>'}</div>

      </div>


      </div>

    </div>

    
    </div>
    )
}