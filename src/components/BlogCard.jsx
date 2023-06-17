import React from "react";

export default function BlogCard(props) {
    return (
    <div className="bg-primasry-400 msy-8 p-4 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-secondary-300 w-full px-4 py-20 rounded-2xl">

          <div className="lg:hidden flex flex-col justify-center items-center w-full bg-accsent-blue-400 pb-8">
            <div className="flex flex-row justify-center items-center">
            <div className="h-fit bg-primsary-300">
              <img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62c6ec974fb534563860cd65_apis-icon.svg"></img>
            </div>
            <div className="h4 pl-3">{props.title}</div>
            </div>

          </div>

          <div className={`bg-primsary-50 pb-10 md:pl-12 lg:pl-20 ${props.order1 == 1? "order-1" : "order-2"}`}>
            <div className={` w-full h-full bg-secondary-50 rounded-xl border-4 border-secondary-200 drop-shadow-${props.clr == 1? 5 : 4}xl overflow-hidden bg-primasry-100 max-w-2xl`}>
              <img className="w-full h-full transform scale-110" src={props.imgURL}></img>
            </div>
          </div>

          <div className={`flex justify-center items-center max-w-lg ${props.order2 == 1? "order-2": "order-1"}`}>
          <div className="flex flex-col w-full  bg-accenst-cali-400">

          <div className="hidden lg:flex flex-col  justify-center items-center bg-primasry-100 lg:items-start lg:justify-start lg:pl-16">
            <div className="flex flex-row lg:flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className=" ">
              <img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62c6ec974fb534563860cd65_apis-icon.svg"></img>
            </div>
            <div className="h4 ">{props.title}</div>
            </div>

          </div>


            <div className=" p1 text-primary-300 pb-2 lg:pb-6 md:pl-12 lg:pl-16 bg-primayry-400">{props.description}</div>
            <div className="w-full md:pl-12 lg:pl-16">
              <a target="_blank" href={props.link} className={`h-8 w-fit ${props.clr == 1 ? "bg-accent-blue-400" : "bg-accent-pink-400"} p-2 px-6 flex justify-center items-center rounded-2xl cursor-pointer ${props.clr == 1 ? "hover:bg-accent-blue-300" : "hover:bg-accent-pink-300"} ease-in-out`}>
                <div className="flex flex-row">
                  <div className="min-w-fit p1 text-secondary-50 ">Read now</div>
                  <img className="pl-2" src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/63267d78acd3d89eba684d4d_button-inactive.svg"></img>
                </div>
              </a>

            </div>
          </div>


          </div>
        </div>
    </div>
    )
}