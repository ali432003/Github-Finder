import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";
import {Link} from "react-router-dom" 

const Card = (props) => {
  const createdAt = props.createdate;
  const date = new Date(createdAt);
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  console.log("formatted Date". formattedDate)

  
  return (
    <div className={`lg:w-[50rem] lg:mx-auto mx-[2rem] ${props.darkMode ? "bg-white" : "bg-slate-800"} 
        ${
          props.darkMode ? "text-slate-950" : "text-white"
        } ${
          props.darkMode ? "outline outline-slate-200" : ""
        } p-[1rem] md:p-[2rem] lg:p-[3rem] mt-[2rem] rounded-xl`}>
      <div className="flex gap-x-[2rem] lg:gap-x-[3rem] md:gap-x-[3rem]">
        <div>
          <img
            src={props.avatar}
            className="border rounded-full w-[10rem] md:w-[8rem] lg:w-[10rem]"
          />
        </div>
        <div className=" flex flex-col w-full">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between">
            <h1 className="lg:text-3xl text-2xl">{props.name}</h1>
            <h2 className={`${props.darkMode ? "text-slate-950" : "text-slate-400"} text-lg`}>{formattedDate}</h2>
          </div>
          <div className="mt-1">
            <h4  className="text-blue-400 cursor-pointer text-md">
              <Link to={props.idUrl} target="_blank">{"@" + props.userName}</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="lg:mt-[2rem] mt-[1.3rem]">
        <p className="text-slate-400">{props.bio}</p>
      </div>
      <div className={`flex flex-row p-[1rem] ${props.darkMode ? "bg-purple-500" : "bg-slate-950"} mt-[2rem] lg:mt-[3rem] rounded-lg justify-between md:justify-evenly lg:justify-evenly`}>
        <div className="flex flex-col gap-y-2">
          <p className="text-white">Repos</p>
          <h1 className="text-center text-xl text-white">{props.repos}</h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-white">Followers</p>
          <h1 className="text-center text-xl text-white">{props.followers}</h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-white">Following</p>
          <h1 className="text-center text-xl text-white">{props.following}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-item-start md:place-items-center lg:place-items-center md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 mt-[2rem] gap-y-2 md:gap-y-[2rem] lg:mt-[4rem] lg:gap-y-[2rem] ">
        <div className="flex gap-x-2 text-balance">
          <FaLocationDot color="#2563eb" size={21} />
          <h1 className={`${
          props.darkMode ? "text-slate-950" : "text-white"
        }`}>
            {props.location ? props.location : "null"}
          </h1>
        </div>
        <div className="flex gap-x-2 text-balance">
          <FaTwitter color="#2563eb" size={21} />
          <h1 className={`${
          props.darkMode ? "text-slate-950" : "text-white"
        }`}>
            {props.twitter ? props.twitter : "null"}
          </h1>
        </div>
        <div className="flex gap-x-2 lg:w-auto md:w-auto text-balance">
          <BiWorld color="#2563eb" size={21} />
          <Link to={props.blog.startsWith("http") ? props.blog : "https://" + props.blog} target="_blank"><h1  className={`${
          props.darkMode ? "text-slate-950" : "text-white"
        } cursor-pointer `}>{props.blog ? props.blog : "null"}</h1></Link>
        </div>
        <div className="flex gap-x-2 text-balance">
          <BsBuildings color="#2563eb" size={21} />
          <h1 className={`${
          props.darkMode ? "text-slate-950" : "text-white"
        }`}>
            {props.company ? props.company : "null"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
