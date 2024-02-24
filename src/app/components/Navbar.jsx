"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

{/* <img
// className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[300px] lg:h-[300px]"
className="bg-white rounded-full"
src="../../terminal-icon.png"
alt=""
width={48}
height={48}
/> */}

const Navbar = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button 
                onClick={ () => setNavbarOpen(true) }
                className="flex items-center px-3 py-2 border rounded border-salte-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ) : (
              <button
                onClick={ () => setNavbarOpen(false) }
                className="flex items-center px-3 py-2 border rounded border-salte-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      { navbarOpen ? <MenuOverlay links={navLinks}/> : null }
    </nav>
  );
};

export default Navbar;