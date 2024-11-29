import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { title, image, description, price, id } = product || {};

  return (
    <Link to={`/product/${id}`}>
      <div
        className="card bg-base-100 transition hover:scale-105  overflow-hidden  border-2  
        border-[#94486a5a] shadow-xl rounded-2xl"
      >
        <figure className=" px-1 md:px-5 pt-5">
          <img src={image} alt={title} className="rounded-xl h-[148px]" />
        </figure>
        <div className="card-body gap-4 text-left">
          <h2 className="card-title text-left">{title}</h2>
          <p className="text-[#949494]">{description}</p>
          <p className="text-base font-semibold text-[#484646c7]">
            Price : {price}$
          </p>
          <div className="card-actions">
            <Link to={`/product/${id}`}>
              <button className="btn btn-outline btn-info">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
