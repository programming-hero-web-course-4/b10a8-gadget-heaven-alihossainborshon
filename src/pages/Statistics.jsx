import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Banner from "../components/Banner";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <Banner
        title={'Gadget Heaven'}
        subtitle={'Leading the way in cutting-edge technology and innovation.'}
      ></Banner>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
