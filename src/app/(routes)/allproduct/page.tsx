
import Product from '@/components/Product/Product';
import ProductTwo from '@/components/ProductTwo/ProductTwo';
import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const Allproduct = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="bg-[url(/images/all.jpg)] bg-cover bg-center h-[50vh]">
        <div className="pt-40">
          <h1 className="text-2xl pl-10 text-white font-serif">All Products</h1>
        </div>
      </div>

      {/* Filters and Sorting Section */}
      <div className="flex flex-col md:flex-row justify-between p-4 gap-3 ">
        {/* Filters */}
        <div className="flex">
          <ul className="flex gap-2 font-serif">
            <li className='flex'>Category<IoMdArrowDropdown size={20}/></li>
            <li className='flex'>Product type<IoMdArrowDropdown size={20}/></li>
            <li className='flex'>Price<IoMdArrowDropdown size={20}/></li>
            <li className='flex'>Brand<IoMdArrowDropdown size={20}/></li>
          </ul>
        </div>

        {/* Sorting */}
        <div className="flex items-center">
          <ul className="flex gap-4 font-serif">
            <li>Sorting by:</li>
            <li className='flex'>Date added<IoMdArrowDropdown size={20}/></li>
          </ul>
        </div>
      </div>
      <ProductTwo/>
      <Product/>
     
    </div>
  );
};

export default Allproduct;
