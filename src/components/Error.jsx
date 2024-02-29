import React from 'react'
import ErrorImg from "/img/error.png"

const Error = () => {
  return (
    <div className="lg:w-[50rem] lg:mx-auto mx-[1rem] flex flex-col mt-[1rem]">
      <img
        src={ErrorImg}
        className="lg:w-[30rem] w-[21rem] lg:mx-auto mx-[1rem] md:mx-auto lg:h-[30rem] relative"
      />
    </div>
  );
}

export default Error