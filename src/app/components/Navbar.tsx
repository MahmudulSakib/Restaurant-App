"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="relative bg-[var(--color-black)] font-(family-name:--font-base) flex justify-between items-center w-full px-10 py-5 max-sm:px-5">
      {/* Restaurant Logo */}
      <div className="">
        <Image
          className=""
          src="/assets/gericht.png"
          width={140}
          height={60}
          alt="logo"
        />
      </div>
      {/* Desktop Navigation */}
      <div className="text-white justify-center items-center gap-10 max-lg:hidden lg:flex">
        <Link className="hover:text-[var(--color-golden)]" href="#home">
          Home
        </Link>
        <Link className="hover:text-[var(--color-golden)]" href="#about">
          About
        </Link>
        <Link className="hover:text-[var(--color-golden)]" href="#menu">
          Menu
        </Link>
        <Link className="hover:text-[var(--color-golden)]" href="#awards">
          Awards
        </Link>
        <Link className="hover:text-[var(--color-golden)]" href="#contact">
          Contact
        </Link>
      </div>
      {/* Auth Navigation */}
      <div className="text-white flex flex-row justify-center items-center gap-3 max-sm:hidden lg:flex">
        <Link
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[var(--color-golden)] hover:border-b-2 hover:border-[var(--color-golden)]"
          href="#login"
        >
          Log In / Registraiton
        </Link>
        <div className="mr-3 ml-3 h-[30px] w-[1px] bg-white" />
        <Link
          className="mr-3 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[var(--color-golden)] hover:border-b-2 hover:border-[var(--color-golden)]"
          href="#booking"
        >
          Book Table
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="hidden max-lg:block text-white">
        <GiHamburgerMenu
          className="cursor-pointer"
          size={30}
          onClick={() => setToggleMenu(true)}
        />
      </div>
      {toggleMenu && (
        <div className="hidden absolute top-0 left-0 inset-0 w-full h-[100vh] z-50 bg-[var(--color-black)] p-5 flex-col justify-center items-center gap-10 text-white hover:text-[var-(--color-golden)] text-4xl max-lg:flex slide-bottom">
          <MdOutlineRestaurantMenu
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
          <Link
            className="hover:text-[var(--color-golden)]"
            onClick={() => setToggleMenu(false)}
            href="#home"
          >
            Home
          </Link>
          <Link
            className="hover:text-[var(--color-golden)]"
            onClick={() => setToggleMenu(false)}
            href="#about"
          >
            About
          </Link>
          <Link
            className="hover:text-[var(--color-golden)]"
            onClick={() => setToggleMenu(false)}
            href="#menu"
          >
            Menu
          </Link>
          <Link
            className="hover:text-[var(--color-golden)]"
            onClick={() => setToggleMenu(false)}
            href="#awards"
          >
            Awards
          </Link>
          <Link
            className="hover:text-[var(--color-golden)]"
            onClick={() => setToggleMenu(false)}
            href="#contact"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
