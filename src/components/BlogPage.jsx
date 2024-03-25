import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ToTopBtn from "./ToTopBtn.jsx";
import WhatsappBtn from "./WhatsappBtn.jsx";
import { useNavigate } from "react-router-dom";
import ContactPage from "./ContactPage.jsx";

export default function BlogPage() {
  const navigate = useNavigate();
  const mockData = [
    {
      title: "Sorting Visualizer",
      description:
        "Welcome to our sorting algorithm visualization project! Here, we dive into the world of sorting algorithms using React and CSS to bring them to life. Get ready to explore how chaos turns into order!",
      link: "https://medium.com/@chreimabedelrazzak/sorting-visualizer-a3ae13d94d60",
      imgURL:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*OMNHx4EGPm0J6TWc9N1UpQ.png",
    },
    {
      title: "Path Finding Visualizer",
      description:
        "Welcome to the fascinating world of pathfinding visualizers! In this project, we dive into React and CSS to create an immersive visual representation of one of the most renowned pathfinding algorithms: Dijkstra’s algorithm.",
      link: "https://medium.com/@chreimabedelrazzak/path-finding-visualizer-6c4dfd942d4f",
      imgURL:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*0rGMOg4Wk5UsqYQJgsrEAg.jpeg",
    },
  ];

  const [postData, setPostData] = React.useState(mockData);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  useEffect(() => {
    // Event listener callback for resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://v1.nocodeapi.com/abedelrazszak/medium/AhsaVNFxppMvcqcR";
      const headers = {
        "Content-Type": "application/json",
      };

      try {
        const response = await axios.get(url, { headers });
        console.log(response.data);
        setPostData(response.data);
      } catch (error) {
        console.log("error", error);
        setPostData(mockData);
        console.log("here", postData);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="bg-primary-400a bg-gradient-to-r from-cyan-300 from-2% via-[#4892E0] via-20% to-primary-400 text-secondary-50 text-[16px] text-center pb-3 pt-3 ">
          <a href="/WebPortfolio/">
            Return back to the homepage to look at all the projects that I have
            made ✨
          </a>
        </div>
        <div className="w-full h-auto py-8 lg:pl-20 flex flex-col justify-center items-center lg:items-start bg-primsary-300">
          <div className="w-fit bg-primsary-200 pt-20">
            <div className="p3 text-gradient-50 font-bold italic">
              READING JOURNEYS. DISCOVER WORLDS.
            </div>
          </div>

          <div className="text-gradisent-50  backdrop-blur-md bg-shades-50/70   h3 lg:h1 pt-2 pl-6 lg:pl-0 w-auto">
            Blog 🖋
          </div>

          <div className="h-auto w-full bg-prismary-400 p3 lg:h6 lg:font-medium flex justify-center items-center lg:justify-start py-4 pl-14 lg:pl-0 text-primary-300">
            <div className="flex flex-row flex-wrap  bg-primasry-300">
              <div className="w-full max-w-fit p-1">
                <div className=" rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl flex justify-center items-center p-2 px-4">
                  <div>ReactJS</div>
                </div>
              </div>
              <div className="w-full max-w-fit p-1">
                <div className=" rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl flex justify-center items-center p-2 px-4">
                  <div>Algorithms</div>
                </div>
              </div>
              <div className="w-full max-w-fit p-1">
                <div className=" rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl flex justify-center items-center p-2 px-4">
                  <div>Javascript</div>
                </div>
              </div>
              <div className="w-full max-w-fit p-1">
                <div className=" rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl flex justify-center items-center p-2 px-4">
                  <div>Visualiztion</div>
                </div>
              </div>
              <div className="w-full max-w-fit p-1">
                <div className=" rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl flex justify-center items-center p-2 px-4">
                  <div>Sorting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gradient-to-l from-cyan-300 from-2% via-[#4892E0] via-20% to-primary-400 text-secondary-50 flex justify-center items-center flex-col lg:flex-row px-4 py-20 rounded-2xl">
            <div className="flex flex-col items-center">
              <div className="h3 lg:h3 text-secondary-400 text-center lg:text-start">
                {/* Want to build a website? */}I am currently Freelancing
              </div>
              <div className="ha6 sm:a6 text-shades-5a0 text-[#e2e8f0] text-[24px] pt-4 lg:pt-0 text-center lg:text-start">
                Let's build a site together! 👷‍♂️👷‍♂️
              </div>
              {/* <div className="h4 sm:h4 text-shades-50 w-fit"> Contact me Now!</div> */}
            </div>

            <div className="h-auto w-full sm:max-w-[265px]  max-w-[265px] lg:ml-40 pt-10 lg:pt-0">
              <div className="m-1 flex h-12 cursor-pointer rounded-xl border-2 border-primary-400 bg-primary-400 transition delay-[35ms] ease-in hover:border-secondary-300 hover:bg-secondary-300 hover:drop-shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl transition ease-in hover:bg-secondary-300">
                  <a
                    href="#contactPage"
                    className="p1 hover:h6 flex h-12 w-full items-center justify-center rounded-2xl px-8 py-2 text-secondary-300 transition ease-in hover:text-gradient-100 rounded-xl"
                  >
                    Contact Me Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={ref1}
          style={{
            transform: isInView1 ? "none" : "translateY(-50px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {postData.map((post, index) => {
            const order1 = windowWidth >= 1024 ? (index % 2 == 0 ? 1 : 2) : 1;
            const order2 = windowWidth >= 1024 ? (index % 2 == 0 ? 2 : 1) : 1;
            const clr = index % 2 == 0 ? 1 : 2;
            console.log(order1, order2, clr);

            return (
              <BlogCard
                key={index}
                title={post.title}
                description={post.description}
                link={post.link}
                imgURL={post.imgURL}
                order1={order1}
                order2={order2}
                clr={clr}
              />
            );
          })}
        </div>
      </div>

      <ContactPage />

      <ToTopBtn />
      <WhatsappBtn />
    </>
  );
}
