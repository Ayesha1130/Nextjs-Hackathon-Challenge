import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      {/* Cart Header - Product, Quantity, and Total */}
      <div className=" grid-cols-1 md:grid-cols-3 gap-[30%] mx-10 mt-10 grid ">
        <h1 className="text-2xl font-bold">Product</h1>
        <p className="text-lg font-medium  hidden md:hidden lg:block">
          Quantity
        </p>
        <p className="text-lg font-medium  hidden md:hidden lg:block">Total</p>
      </div>

      <hr className="border border-slate-200 my-6 mx-10" />

      {/* Cart Item 1 */}
      <div className="flex justify-between items-center mx-10 mb-10">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/cart1.jpg"
            alt="Graystone vase"
            width="150"
            height="134"
            className="object-cover"
          />
          <div className="w-[179px]">
            <h2 className="text-xl font-semibold">Graystone vase</h2>
            <p className="text-sm text-gray-500">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-lg font-medium text-gray-800">£85</p>
          </div>
          <div className=" text-center   ml-[70%] md:hidden lg:block hidden">
            <p>1</p>
          </div>

          <div className=" text-center ml-[105%] md:hidden lg:block hidden">
            <p>£125</p>
          </div>
        </div>
      </div>

      <hr className="border border-slate-200 my-6 mx-10" />

      {/* Cart Item 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-10 mt-10">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/cart2.jpg"
            alt="Red velvet vase"
            width="150"
            height="134"
            className="object-cover"
          />
          <div className="w-[179px] font-serif">
            <h2 className="text-xl font-semibold">Basic white vase</h2>
            <p className="text-sm text-gray-500">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-lg font-medium text-gray-800">£100</p>
          </div>
        </div>
        <div className=" text-center ml-[-100px] mt-20  hidden md:hidden lg:block">
          <p>1</p>
        </div>

        <div className=" text-center mt-20 ml-[30%] md:hidden lg:block hidden">
          <p>£125</p>
        </div>
      </div>

      <hr className="border border-slate-200 my-6 mx-10" />

      {/* Cart Summary */}
      <div className="flex flex-col justify-end items-end gap-4 mx-10 mt-10 mb-10">
        <div className="text-xl font-semibold">
          <p>Subtotal: £185</p>
        </div>
        <p className="font-serif">Taxes and shipping are calculated at checkout</p>
        <button className="bg-[#2A254B] text-white py-[16px] px-[32px] font-serif">
          Go to Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
