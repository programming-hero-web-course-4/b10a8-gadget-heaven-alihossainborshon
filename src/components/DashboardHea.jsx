import React from "react";
import { Link } from "react-router-dom";


const DashboardHea = ({}) => {
  return (
    <div className="border-2 border-[#9538e277] p-[5px] rounded-[30px] mt-5">
      <div className="flex flex-col items-center gap-5 bg-[#9538E2] px-20 pt-10 pb-20 text-center rounded-[30px] border-transparent">
        <h1 className="w-2/3 text-xl md:text-2xl lg:text-4xl font-bold text-white">
        Dashboard
        </h1>
        <p className="w-1/2 text-xs md:text-base font-medium text-white">
        'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
        </p>      
      </div>
    </div>
  );
};

export default DashboardHea;
