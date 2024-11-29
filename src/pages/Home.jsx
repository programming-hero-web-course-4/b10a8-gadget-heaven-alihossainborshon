import React from 'react';
import BannerText from '../components/BannerText';
import BannerImg from '../components/BannerImg';
import Categories from '../components/Categories';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Texts from '../components/Texts';

const Home = () => {
  const categories = useLoaderData()
  const navigate = useNavigate();

  return (
    <div className='w-11/12 mx-auto'>
      {/* Banner text */}
      <BannerText></BannerText>
      <BannerImg></BannerImg>
      <div className='relative -top-[170px]'>
        <Texts></Texts>
      </div>
      <div className='flex  mt-[-100px]'>
        <div className='sticky top-[1px] w-1/3 md:w-1/3 lg:w-1/4 mx-5  sm:px-0 md:px-10 h-[440px]  p-2 flex flex-col'><Categories
         categories={categories}></Categories>
         <div className=''>
        <button onClick={() => navigate('/statistics')} className='w-full text-white text-lg border-2 btn  btn-accent'> View All</button>
      </div>
        </div>
        <div className='w-3/4'><Outlet></Outlet></div>
      </div>
    </div>
  );
};

export default Home;