"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between p-4 items-center  ">
        <h1 className="text-[#22202E] ml-10 text-xl">Avion</h1>

        <nav className="hidden md:hidden lg:block ">
          <ul className="flex flex-row  justify-center gap-8 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <nav className=" md:block lg:hidden">
            <ul className="flex flex-col text-center items-center gap-4 p-4 bg-white text-black absolute mt-10 left-0 right-20 w-full rounded-lg shadow-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex gap-4 pr-10">
          <CiSearch size={20} />
          <Link href={"/cart"}>
            <MdOutlineShoppingCart size={20} />
          </Link>

          <FaUserCircle size={20} />

          <button title="button" onClick={toggleMenu}>
            {!isOpen ? (
              <IoMdMenu size={20} className="md:block lg:hidden" />
            ) : (
              <RxCross2 size={20} className="md:block lg:hidden" />
            )}
          </button>
        </div>
      </header>

      <div className="p-5 bg-[#F9F9F9] hidden md:hidden lg:block">
        <ul className="flex text-center justify-center gap-5">
          <li>
            <Link href={"/brand"}>All Furniture</Link>
          </li>
          <li>
            <Link href={""}>Plant pots</Link>
          </li>
          <li>
            <Link href={""}>Ceramics</Link>
          </li>
          <li>
            <Link href={""}>Tables</Link>
          </li>
          <li>
            <Link href={"/dandychair"}>Chairs</Link>
          </li>
          <li>
            <Link href={""}>Crockery</Link>
          </li>
          <li>
            <Link href={""}>Tableware</Link>
          </li>
          <li>
            <Link href={""}>Cutlery</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;