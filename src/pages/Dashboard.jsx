import DashboardHea from '../components/DashboardHea';
import React, { useEffect, useState} from 'react';  
import { useLoaderData } from 'react-router-dom';
import { getStoredAddToCart, } from '../utility/addtoCart';
import Card2 from '../components/Card2';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getStoredWishlist } from '../utility/wishlist';
import { GiSettingsKnobs } from "react-icons/gi";


const Dashboard = () => {
  const [addToCart, setAddToCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const data = useLoaderData()

  useEffect(() => {
    const storedAddToCart = getStoredAddToCart();
    const storedAddToCartInt = storedAddToCart.map(id => parseInt(id));
    const addToCartList = data.filter(product => storedAddToCartInt.includes(product.id));
    setAddToCart(addToCartList);
  } , [])

  useEffect(() => {
    const storedWishlist = getStoredWishlist();
    const storedWishlistInt = storedWishlist.map(id => parseInt(id));
    const wishlist = data.filter(product => storedWishlistInt.includes(product.id));
    setWishlist(wishlist);
  } , [])

  const handleSort = sortBy => {
    if (sortBy === 'price') {
      const sorted = [...addToCart].sort((a,b) => b.price - a.price);
      setAddToCart(sorted);
    }
    else if (sortBy === 'price'){
      const sorted = [...wishlist].sort((a,b) => b.price - a.price);
      setWishlist(sorted);
    }
  }

  
  return (
    <div className='w-11/12 mx-auto'>
      <DashboardHea></DashboardHea>
      <div className='absolute end-48 pt-5'>
        <p><button
            onClick={() => handleSort('price')}
            className='btn btn-outline btn-accent rounded-full border-2'
          >
            Sort By Price <GiSettingsKnobs className='text-xl font-semibold' />
          </button></p>
      </div>
      <Tabs>
        <TabList className="relative -top-[75px] flex items-center justify-center gap-5">
          <Tab>
            <div className="btn px-8 py-2 rounded-full cursor-pointer text-base font-medium text-[#9538E2] bg-white">
              Cart
            </div>
          </Tab>
          <Tab>
            <div className="btn px-8 py-2 rounded-full cursor-pointer text-base font-medium border-2 text-white bg-[#9538E2]">
            Wishlist
            </div>
          </Tab>
        </TabList>
        
        <TabPanel>
          <h2 className='w-10/12 mx-auto pb-4 text-2xl font-semibold text-[#0d284e]'>Add To Cart : {addToCart.length}</h2>
          { 
          addToCart.map(product => <Card2 key={product.id} product={product}></Card2>)
          } 
        </TabPanel>
        <TabPanel>
          <h2 className='w-10/12 mx-auto pb-4 text-2xl font-semibold text-[#0d284e]'>WishList : {wishlist.length}</h2>
          {
          wishlist.map(product => <Card2 key={product.id} product={product}></Card2>)
          } 
        </TabPanel>



      </Tabs>
      
      

    </div>
  );
};

export default Dashboard ;
