import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      {/* Cart Header - Product, Quantity, and Total */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 sm:mx-10 mt-6">
        <h1 className="text-lg md:text-2xl font-bold">Product</h1>
        <p className="text-md md:text-lg font-medium hidden md:block text-center">
          Quantity
        </p>
        <p className="text-md md:text-lg font-medium hidden md:block text-center">
          Total
        </p>
      </div>

      <hr className="border border-slate-200 my-4 sm:my-6 mx-4 sm:mx-10" />

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 sm:mx-10 mb-6">
        <div className="flex items-center gap-4">
          <Image
            src="/images/cart1.jpg"
            alt="Graystone vase"
            width={150}
            height={134}
            className="object-cover"
          />
          <div>
            <h2 className="text-md md:text-xl font-semibold">Graystone vase</h2>
            <p className="text-sm text-gray-500">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-lg font-medium text-gray-800">£85</p>
          </div>
        </div>
        <p className="hidden md:block text-center pt-10 mt-4 md:mt-0">1</p>
        <p className="hidden md:block text-center mt-4 md:mt-0">£125</p>
      </div>

      <hr className="border border-slate-200 my-4 sm:my-6 mx-4 sm:mx-10" />

      {/* Second Cart Item */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 sm:mx-10 mb-6">
        <div className="flex items-center gap-4">
          <Image
            src="/images/cart2.jpg"
            alt="Red velvet vase"
            width={150}
            height={134}
            className="object-cover"
          />
          <div>
            <h2 className="text-md md:text-xl font-semibold">Basic white vase</h2>
            <p className="text-sm text-gray-500">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-lg font-medium text-gray-800">£100</p>
          </div>
        </div>
        <p className="hidden md:block text-center pt-14 mt-4 md:mt-0">1</p>
        <p className="hidden md:block text-center mt-4 md:mt-0">£125</p>
      </div>

      <hr className="border border-slate-200 my-4 sm:my-6 mx-4 sm:mx-10" />

      {/* Cart Summary */}
      <div className="flex flex-col items-end gap-4 mx-4 sm:mx-10 mt-6">
        <div className="text-md md:text-xl font-semibold">
          <p>Subtotal: £185</p>
        </div>
        <p className="text-sm text-gray-500">
          Taxes and shipping are calculated at checkout.
        </p>
        <button className="bg-[#2A254B] text-white py-3 px-6 rounded-md text-sm md:text-base">
          Go to Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
