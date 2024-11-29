import React from 'react';
import { LiaTrashSolid } from "react-icons/lia";

const Card2 = ({product}) => {
  const { title, image, description, price, id } = product || {};
  return (
    <div
        className="w-10/12 mx-auto card bg-base-100 transition border-2 flex flex-row items-center justify-center mb-5 border-[#94486a5a] shadow-xl rounded-2xl"
      >
        <figure className=" px-1 md:px-5">
          <img src={image} alt={title} className="rounded-xl h-[148px]" />
        </figure>
        <div className="card-body gap-4 text-left">
          <h2 className="card-title text-left">{title}</h2>
          <p className="text-[#949494]">{description}</p>
          <p className="text-base font-semibold text-[#484646c7]">
            Price : {price}$
          </p>
          <div className="card-actions">
          </div>
        </div>
        <div className='mr-16 border-2 rounded-full p-2 border-[red] cursor-pointer'>
          <LiaTrashSolid className='text-3xl text-[red] ' /> 
        </div>
      </div>
  );
};

export default Card2;