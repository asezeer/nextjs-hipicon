import React from "react";
import Title from "../ui/Title";
import TakiItem from "./TakiItem";

const TakiWrapper = () => {
  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">TAKI</Title>
        <div className="mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl ">YÜZÜK</button>
          <button className="px-6 py-2  rounded-3xl ">BİLEKLİK</button>
          <button className="px-6 py-2  rounded-3xl ">KÜPE</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
        <TakiItem />
      </div>
    </div>
  );
};

export default TakiWrapper;
