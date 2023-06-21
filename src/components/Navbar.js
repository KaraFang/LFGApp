import React from 'react'
import logo from '../assets/images/logo.svg';
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';
import { useState } from 'react';
import { navLinks } from './links';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className="w-64" />

      <div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-mono font-normal cursor-pointer
                      text-[20px] rounded-xl py-1 px-5 border border-d4red
                      hover:bg-d4red hover:text-stone-950
                      mr-5 text-d4red`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`font-mono font-normal cursor-pointer
                      text-[20px] rounded-xl py-1 px-5
                      bg-d4red text-stone-950 hover:scale-110 
                      `}
          >
            Login
          </li>
        </ul>
      </div>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          alt="menu"
          src={toggle ? close : menu}
          className="w-[32px] h-[32px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 
                    bg-stone-950 shadow-d4red shadow-md
                    absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl
                    sidebar
                    `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          <li
            className={`font-mono font-normal cursor-pointer text-[20px] mr-0 mb-4 text-d4red`}
          >
            Login
          </li>
            {navLinks.map((nav, links) => (
              <li
                key={nav.id}
                className={`font-mono font-normal cursor-pointer text-[20px] ${
                  links === navLinks.length - 1 ? "mr-0" : "mb-4"
                }
                text-d4red`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar