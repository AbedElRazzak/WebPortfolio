/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import HeroMain from "./HeroMain";
import Projects from "./Projects.jsx";
import SkillsAndExpertise from "./SkillsAndExpertise";
import ContactPage from "./ContactPage";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfessionalProjects from "./ProfessionalProjects.jsx";
import WorkTimeLine from "./WorkTimeLine.jsx";
import ToTopBtn from "./ToTopBtn.jsx";
import WhatsappBtn from "./WhatsappBtn.jsx";

export default function HomePage() {
  const [readMoreModalIsOpen, setReadMoreModalIsOpen] = React.useState(false);
  const [readMoreContent, setReadMoreContent] = React.useState("");

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const navigate = useNavigate();

  const [lang, setLang] = React.useState("En");
  function handleLangChange(newLang) {
    if (lang != newLang) {
      setLang(newLang);
    }
  }

  const [hbIsToggled, setHbToggled] = React.useState(false);
  function handleHbToggle(state) {
    setHbToggled(state);
  }

  function alertHandler(mssg, isSuccess) {
    if (isSuccess == true) {
      toast.success(mssg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(mssg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    if (readMoreModalIsOpen) {
      const closeModal = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
          setReadMoreModalIsOpen(false);
        }
      };

      document.addEventListener("click", closeModal);

      return () => {
        document.removeEventListener("click", closeModal);
      };
    }
  }, [readMoreModalIsOpen]);

  return (
    <>
      <div className="h-full w-full" id="homepage">
        <div className="bg-primary-400a bg-gradient-to-r from-cyan-300 from-2% via-[#4892E0] via-20% to-primary-400 text-secondary-50 text-[16px] text-center pb-3 pt-3 ">
          {lang === "En" ? (
            <div
              onClick={() => navigate("BlogPage")}
              className="cursor-pointer"
            >
              Check out my blog to stay updated on my current activities,
              whereabouts, and ongoing projects 🚀
            </div>
          ) : (
            <div
              onClick={() => navigate("BlogPage")}
              className="cursor-pointer"
            >
              Visitez mon blog pour rester informé de mes activités et projets
              en cours. 🚀
            </div>
          )}
        </div>

        <Navbar
          lang={lang}
          handleLangChange={handleLangChange}
          hbIsToggled={hbIsToggled}
          handleHbToggled={handleHbToggle}
        />

        <HeroMain lang={lang} />

        <WorkTimeLine lang={lang} />

        <ProfessionalProjects
          lang={lang}
          readMoreModalIsOpen={readMoreModalIsOpen}
          setReadMoreModalIsOpen={setReadMoreModalIsOpen}
          readMoreContent={readMoreContent}
          setReadMoreContent={setReadMoreContent}
        />

        <Projects lang={lang} />

        <div className="h-full w-full bg-[#020617]">
          <SkillsAndExpertise lang={lang} />

          <div
            className="relative z-0 top-[-30px] "
            ref={ref1}
            style={{
              transform: isInView1 ? "none" : "translateY(-50px)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            <div className="flex  flex-col justify-center items-center  bg-hero-bg-2 h-auto w-full bg-no-repeat bg-cover">
              <div className="h-full w-full flex justify-center items-center flex-col py-16 sm:py-20 lg:py-36">
                {lang === "En" ? (
                  <div className="flex flex-col items-center ">
                    <div className="h2 sm:h1 text-shades-50">
                      Build a web app
                    </div>
                    <div className="h2 sm:h1 text-shades-50 w-fit">with me</div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center ">
                    <div className="h2 sm:h1 text-shades-50">Créer une</div>
                    <div className="h2 sm:h1 text-shades-50">
                      application web
                    </div>
                    <div className="h2 sm:h1 text-shades-50 w-fit">
                      avec moi
                    </div>
                  </div>
                )}

                <div className="h-auto w-full sm:max-w-[265px] pt-6 lg:pt-20 max-w-[265px]">
                  <div
                    onClick={() => navigate("Resume")}
                    className="m-1 flex h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                      {lang === "En" ? (
                        <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">
                          View my resume
                        </div>
                      ) : (
                        <div className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl">
                          Voir mon CV
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactPage lang={lang} alertHandler={alertHandler} />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToTopBtn />
      <WhatsappBtn />
    </>
  );
}
