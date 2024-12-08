import React from "react";
import Image from "next/image";

const ProductTwo = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/one.jpg"
            alt="product1"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">The Dandy chair</h2>
          <p>£250</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/two.jpg"
            alt="product2"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">Rustic Vase Set</h2>
          <p>£155</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/three.jpg"
            alt="product3"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">The Silky Vase</h2>
          <p>£125</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/four.jpg"
            alt="product4"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">The Lucy Lamp</h2>
          <p>£399</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/p1.jpg"
            alt="product1"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">The Dandy chair</h2>
          <p>£250</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/all.jpg"
            alt="product2"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">Rustic Vase Set</h2>
          <p>£155</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/p3.jpg"
            alt="product3"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">The Silky Vase</h2>
          <p>£125</p>
        </div>

        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/p4.jpg"
            alt="product4"
            width={305}
            height={375}
            className="w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B]">The Lucy Lamp</h2>
          <p>£399</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTwo;
