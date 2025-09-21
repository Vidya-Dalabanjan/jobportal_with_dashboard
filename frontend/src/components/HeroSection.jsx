import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browser");
  };
  return (
    <div className="text-center px-4 md:px-8 lg:px-20">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium text-sm md:text-base">
          No. 1 Job Finding Website
        </span>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Search,Apply & <br /> Get Your{" "}
          <span className="text-[#6a38c2]">Get Your Dream Job</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          + Find your dream job with{" "}
          <span className="text-[#6a38c2] font-bold">JobPortal</span>. +
          Discover verified job listings, create your profile, and apply in just
          a few clicks. + We make your job search simple, fast, and effective. +{" "}
        </p>
        <div className="flex w-full md:w-[60%] lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full gap-2 mx-auto items-center">
          <input
            type="text"
            placeholder="Find Your Dream Jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-sm md:text-base px-2 "
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6a38c2] "
          >
            <Search className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
