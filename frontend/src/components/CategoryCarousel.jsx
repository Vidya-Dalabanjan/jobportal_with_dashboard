import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browser");
  };
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack developer",
    "Software Developer",
    "Networking and Infrastructre",
    "CyberSecurity",
    "Machine Learning",
  ];
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-auto">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full text-xs sm:text-sm px-3 py-1"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
