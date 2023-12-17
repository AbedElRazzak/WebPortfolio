import React from "react";

export default function WorkTimeLine() {
  return (
    <div className="px-0 mb-40 lg:px-10">
      <div className="h3 lg:h2 h-auto w-full text-center md:text-left text-gradient-50 md:inline md:px-4 pr-2">
        Work Timeline
      </div>
      <ol className="relative border-s border-[#E5A9D8] dark:border-gray-700 sm-40 mx-2 md:mx-20 my-10">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#78CEF5] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        June 2023 - July 2023
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Full stack web developer intern at Way2Go Digital
        </h3>
        <p className="msa-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        • Worked within a team of 4 developers on an e-commerce project, used REACTJS and PHP to build restful APIs and the Database.
        </p>
        <p className="msb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        • Coordinated with BLOM bank to correctly configure the payment gateway API.</p>

        
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#78CEF5] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        July 2023 - November 2023
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Full stack web developer at Way2Go Digital
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        • Worked within a team of 4 developers on several projects using ReactJS, php and WordPress.
        </p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        • Built business websites and maintained e commerce and other premade websites, and built Restful APIs.
        </p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        • Coordinated with the clients via email to make changes.
        </p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        •  Did IT administration i.e. created company outlook accounts for new interns and employees, and did troubleshooting for anything IT related.
        </p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-[#78CEF5] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          December 2023 - Present
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Full stack web developer Freelancer
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 pl-6">
        • Building Informative, business, e-commerce and other types of websites, using mainly ReactJS, PHP and WordPress.
        </p>
      </li>
    </ol>
    </div>
  );
}
