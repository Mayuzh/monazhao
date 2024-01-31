// components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FcLikePlaceholder } from "react-icons/fc";
import { LuMenu } from "react-icons/lu";

import './styles.css'; 

const Navbar = () => {
  let [open,setOpen]=useState(false);
  return (
    <nav className="bg-pink-50 drop-shadow-lg fixed w-full top-0">
      <div className="bg-pink-50 max-w-7xl mx-auto flex lg:flex-row flex-col lg:justify-between lg:items-center lg:px-10 lg:my-0 lg:py-4 py-2">
        <Link to="/" className="text-pink-950 font-semibold flex flex-row lg:mx-0 mx-auto">
          <FcLikePlaceholder className='mx-4 my-auto md:size-8 size-6'/>
          <div className="monazhao-logo md:text-[30px] text-[24px]">MONA ZHAO</div>
        </Link>
        <div onClick={()=>setOpen(!open)} className='absolute top-4 left-4 cursor-pointer lg:hidden'>
          <LuMenu className='text-[24px]'/>
        </div>
        <div className={`nav-options text-pink-950 
        flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-7 lg:py-0 pt-10 pb-6 lg:pl-0 pl-8
        absolute lg:static bg-pink-50 lg:z-auto z-[-1] left-0 lg:w-auto w-full 
        transition-all duration-500 ${open ? 'top-6 opacity-100':'top-[-400px]'} lg:opacity-100`}>
          <ScrollLink
            onClick={()=>setOpen(!open)}
            to="home"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass='active'
          >
            Home
          </ScrollLink>
          <ScrollLink
            onClick={()=>setOpen(!open)}
            to="experiences"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass='active'
          >
            Experiences
          </ScrollLink>
          <ScrollLink
            onClick={()=>setOpen(!open)}
            to="projects"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass='active'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            onClick={()=>setOpen(!open)}
            to="publications"
            smooth={true}
            duration={500}
            offset={-200}
            spy={true}
            activeClass='active'
          >
            Publications
          </ScrollLink>
          <ScrollLink
            onClick={()=>setOpen(!open)}
            to="contact"
            smooth={true} 
            duration={500}
            offset={-120}
            spy={true}
            activeClass='active'
          >
            Contact
          </ScrollLink>
          <a onClick={()=>setOpen(!open)} href={require(`../images/Resume.pdf`)} target="_blank" className="">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
