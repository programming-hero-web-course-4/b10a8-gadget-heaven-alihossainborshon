import React from 'react';
import { NavLink} from 'react-router-dom';

const Categories = ({categories}) => {
  
  return (
    <div className=''>
      {
        categories.map((category => (
          <NavLink
           key={category.category}
           to={`/category/${category.category}`}
           className="flex flex-col p-4 border-2 rounded-2xl my-5 bg-[#07515b8d]"
          ><div className='btn'>{category.category}</div></NavLink>
        )))
      }
      
    </div>
  );
};

export default Categories;