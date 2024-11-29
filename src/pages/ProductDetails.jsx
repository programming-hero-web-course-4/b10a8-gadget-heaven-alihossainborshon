import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import { addToStoredAddToCart } from "../utility/addtoCart";
import { addToStoredWishlist } from "../utility/wishlist";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleData = data.find((product) => product.id == id);
    setProduct(singleData);
  }, [data, id]);

  const { title, image, category, price, description, specification, rating } =
    product;

    const handleAddToCart = (id) => {
      addToStoredAddToCart(id)
    }
    const handleWishlist = (id) => {
      addToStoredWishlist(id)
    }

  return (
    <div className="w-11/12 mx-auto">
      <Banner
        title={'Product Details'}
      ></Banner>
      <div className="w-11/12 mx-auto bg-white rounded-3xl border-2 py-5">
        <div className="hero-content flex-col lg:flex-row justify-center">
          <div className="w-1/2 ">
            <img
              src={image}
              className="max-w-md mx-auto rounded-lg"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-base font-semibold text-[#1f1f1f]">Price : {price}$</p>
            <p className="text-base font-medium text-[#1e1e1eb8]">{description}</p>
            <span className="text-[#727272]">
              <p className="text-base font-semibold text-[#303030]">Specification :</p>
              <ul className="ml-5">
                {
                  specification && specification.map((item , i) => (
                  <li className="list-disc" key={i}>
                    {item}
                  </li>))
                }
              </ul>
            </span>
            <p className="text-base font-semibold text-[#1f1f1f]">Rating : {rating}</p>
            <div>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div> 
            <div className="flex items-center gap-5">
            <button onClick={() => handleAddToCart(id)} className="btn bg-[#21185b] text-white rounded-full">Add To Cart <AiOutlineShoppingCart className="text-white text-base" />
            </button>
            <p onClick={() => handleWishlist(id)} className="bg-white p-2 rounded-full border-2 text-[#ea63d3] border-[#ea63d3] cursor-pointer" >
            <LuHeart /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
