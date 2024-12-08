import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="mt-32 bg-[url('/images/bene.jpg')] bg-cover bg-center h-[444px]">
      <div className="flex flex-col text-center p-10 ">
        <h2 className="text-2xl text-white">
          Join the club and get the benefits
        </h2>
        <p className="text-white mx-auto max-w-3xl md:px-44 mt-5">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
      </div>

      <div className="flex gap-5 text-center items-center justify-center">
        <p className="text-white flex items-center">
          <FaCheckCircle className="mr-2" /> Exclusive offers
        </p>
        <p className="text-white flex items-center">
          <FaCheckCircle className="mr-2" /> Free events
        </p>
        <p className="text-white flex items-center">
          <FaCheckCircle className="mr-2" /> Large discounts
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="your@email.com"
          className="p-3 rounded-l-md border-none text-black focus:outline-none"
        />
        <button className="bg-[#2A254B] p-3 rounded-r-md text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Benefits;