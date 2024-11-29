import React from 'react';

const Banner = ({title, subtitle}) => {
  return (
    <div className="border-2 border-[#9538e277] p-[5px] rounded-[30px] my-10">
      <div className="flex flex-col items-center gap-5 bg-[#9538E2] px-20 py-10 text-center rounded-[30px] border-transparent">
        <h1 className="w-2/3 text-xl md:text-2xl lg:text-4xl font-bold text-white">
          {title}
        </h1>
        <p className="w-1/2 text-xs md:text-base font-medium text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Banner;