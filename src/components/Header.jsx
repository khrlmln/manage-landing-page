import React, { useState } from "react";
import Logo from "../assets/img/logo.svg";

function Header() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="container relative p-6 mx-auto">
        {/* <!-- Flex container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="pt-2">
            <img src={Logo} alt="logo" />
          </div>
          {/* <!-- Menu Items --> */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/* <!-- Button --> */}
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>

          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
