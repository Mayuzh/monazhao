// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FcLikePlaceholder } from "react-icons/fc";

import './styles.css'; 

const Navbar = () => {
  return (
    <nav className="bg-pink-50 py-6 drop-shadow-lg fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="text-pink-950 text-3xl font-semibold flex flex-row">
          <FcLikePlaceholder size={36} className='mx-4'/>
          <div className="monazhao-logo">MONA ZHAO</div>
        </Link>
        <div className="nav-options space-x-5 text-pink-950">
          <ScrollLink
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
            to="publications"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
            activeClass='active'
          >
            Publications
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true} 
            duration={500}
            spy={true}
            activeClass='active'
          >
            Contact
          </ScrollLink>
          <a href={require(`../images/Resume.pdf`)} target="_blank" className="">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
