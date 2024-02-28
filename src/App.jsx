import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import SearchBox from "./components/SearchBox";
import { IoSunny } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

function App() {
  const [enableDark, setenableDark] = useState(true);

  return (
    <div className={enableDark ? "bg-white" : "bg-[#111827] min-h-[100vh]"}>
      <div
        className={`${
          enableDark ? "bg-slate-50" : "bg-slate-700"
        } flex justify-between shadow-md`}>
        <h1
          className={`text-md lg:mx-auto mx-[1rem] text-start lg:w-[50rem] py-[1rem] flex ${
            enableDark ? "text-slate-960" : "text-white"
          } gap-x-3`}>
          <FaGithub size={21} />
          Github Finder
        </h1>
        <div
          className="flex py-[1rem] w-[5rem] gap-x-2 cursor-pointer me-4"
          onClick={() => {
            setenableDark(!enableDark);
          }}>
          <p className={`${enableDark ? "text-slate-950" : "text-white"}`}>
            {enableDark ? "Dark" : "Light"}
          </p>
          {enableDark ? (
            <IoMoonOutline
              size={21}
              className={`${enableDark ? "text-slate-950" : "text-white"}`}
            />
          ) : (
            <IoSunny
              size={21}
              className={`${enableDark ? "text-slate-950" : "text-white"}`}
            />
          )}
        </div>
      </div>
      <SearchBox darkMode={enableDark} />
    </div>
  );
}

export default App;
