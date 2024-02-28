import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Nothing from "/img/nothing to show.png";
import Card from "./Card";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Skeleton from "./Skeleton";

const SearchBox = (props) => {
  const [loader,setLoader] = useState(false)
  const [showNothing, setshowNothing] = useState(false);
  const [user, setUser] = useState("");
  const [apiData, setApiData] = useState([]);

 

  const fetchApi = async (searchValue = "ali432003") => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchValue}`
      );
      setApiData(response.data);
      console.log("Api Se data agiyaa : " ,response.data)
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };
  

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      return;
    }
    setLoader(true); 

    setTimeout(() => {
      
      fetchApi(user)
        .then(() => {
          setLoader(false);
          setUser("");
          setshowNothing(true);
          console.log("User data ", user);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoader(false); 
        });
    }, 1000);
  };


  

  return (
    <>
      <div
        className={`flex flex-col gap-y-3 ${
          props.darkMode ? "bg-white" : "bg-slate-800"
        } ${
          props.darkMode ? "text-slate-950" : "text-white"
        } border rounded shadow-lg lg:w-[50rem] mx-[1rem] lg:mx-auto p-[1rem] mt-[1rem]`}>
        <h1 className="text-2xl lg:text-3xl">Search GitHub Users</h1>
        <p className="text-slate-00 lg:text-lg text-sm">
          Enter a user name to fetch a user profile and repos from github
        </p>
        <div className="flex gap-x-3 relative">
          <TextField
            type="text"
            fullWidth
            color={props.darkMode ? "secondary" : "primary"}
            placeholder="Enter Your User Name"
            sx={{ backgroundColor: props.darkMode ? "#e2e8f0" : "#e5e5e5" }}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            className="absolute top-0 bottom-0 right-0 bg-[#475569] text-white lg:w-[6rem] w-[5rem] m-1 rounded-md duration-300 hover:bg-[#64748b] hover:text-slate-950 font-bold lg:tracking-wider">
            submit
          </button>
        </div>
      </div>

      {showNothing ? (
        <Card
          name={apiData.name}
          userName={apiData.login}
          id={apiData.id}
          repos={apiData.public_repos}
          followers={apiData.followers}
          following={apiData.following}
          blog={apiData.blog}
          location={apiData?.location}
          bio={apiData.bio}
          idUrl={apiData.html_url}
          avatar={apiData.avatar_url}
          twitter={apiData?.twitter_username}
          company={apiData?.company}
          createdate={apiData.created_at}
          darkMode = {props.darkMode}
        />
      ) : (
        loader ? (<Skeleton/>)
        :   (<img
          src={Nothing}
          className="lg:w-[30rem] w-[21rem] lg:mx-auto mx-[1rem] md:mx-auto lg:h-[30rem] mt-[1rem]"
        />)
      )}
    </>
  );
};

export default SearchBox;
