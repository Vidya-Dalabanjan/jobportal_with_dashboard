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
    <div className="text-center ">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
          No. 1 Job Finding Website
        </span>
        <h1 className="text-5xl font-bold">
          Search,Apply & <br /> Get Your{" "}
          <span className="text-[#6a38c2]">Get Your Dream Job</span>
        </h1>
        <p>
          Find your dream job with
          <h2 className="text-[#6a38c2] text-2xl font-bold">JobPortal</h2>.
          Discover verified job listings, create your profile, and apply in just
          a few clicks. We make your job search simple, fast, and effective
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full gap-4 mx-auto items-center ">
          <input
            type="text"
            placeholder="Find Your Dream Jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full "
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6a38c2] "
          >
            <Search className="h-4 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
