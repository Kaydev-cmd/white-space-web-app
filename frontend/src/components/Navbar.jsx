import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";

// Work on useState Menu

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="bg-[#043873]">
        <div className="container">
          <div className="flex p-4 justify-between items-center">
            <a href="/" className="flex items-center gap-1">
              <img
                src="/images/home/Logo Icon.png"
                alt="Logo"
                className="w-4 h-4"
              />
              <h1 className="text-[18px] text-white lowercase font-bold">
                Whitespace
              </h1>
            </a>
            <ul className="links flex gap-8 text-white md:gap-3 sm:hidden">
              <li>
                <a href="#products" className="flex items-center">
                  Products
                  <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a href="#solutions" className="flex items-center">
                  Solutions
                  <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a href="#resources" className="flex items-center">
                  Resources
                  <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a href="#pricing" className="flex items-center">
                  Pricing
                  <IoIosArrowDown />
                </a>
              </li>
            </ul>

            {/* Mobile Links */}
            {/* <div className={handleNav}>
              <ul className="mobile-links absolute top-14 bg-[#043873] text-white p-8 w-[100%]">
                <li className="relative left-[16%] p-2">
                  <a href="#products" className="">
                    Products
                  </a>
                </li>
                <li className="relative left-[16%] p-2">
                  <a href="#solutions" className="">
                    Solutions
                  </a>
                </li>
                <li className="relative left-[16%] p-2">
                  <a href="#resources" className="">
                    Resources
                  </a>
                </li>
                <li className="relative left-[16%] p-2">
                  <a href="#pricing" className="">
                    Pricing
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="flex items-center gap-4">
              <button className="login-btn bg-[#FFE492] text-[#043873] py-2 px-4 rounded-md font-medium hover:opacity-[.9] sm:hidden">
                Login
              </button>
              <button className="try-white-space-btn flex items-center gap-1 bg-[#4F9CF9] py-2 px-4 text-white rounded-md hover:opacity-[.9] lg:hidden">
                Try Whitespace free
                <IoIosArrowRoundForward />
              </button>
            </div>
            <TbMenuDeep size={30} color="fff" className="hidden sm:flex" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
