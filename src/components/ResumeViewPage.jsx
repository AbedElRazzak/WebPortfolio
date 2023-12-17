/* eslint-disable no-unused-vars */
import React from "react";
import {
    useNavigate
  } from 'react-router-dom';

export default function ResumeViewPage() {
    const navigate = useNavigate()
    return (
        <>
          <iframe  src="https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/AbedElRazzakShreim-Resume.pdf"  title="resume" className="h-0"></iframe>
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">❤️</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Downloading</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Thank you for downloading, hope to work with you!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div
              onClick={() => navigate("/WebPortfolio/")}
              className="cursor-pointer rounded-md bg-accent-purple-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </div>
            {/* <div onClick={() => navigate("/WebPortfolio/#contactPage")} className="cursor-pointer text-sm font-semibold text-gray-900">
              Contact me <span aria-hidden="true">&rarr;</span>
            </div> */}
          </div>
        </div>
      </main>
        </>
    )
}