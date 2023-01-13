import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { FiArrowUpRight } from "react-icons/fi"

import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { useOnlineStatus } from "../../hook/useDebugValue/useOnlineStatus.js";

import images from '../../constants/images';

import './Navbar.css';

function StatusBar() {
  const isOnline = useOnlineStatus();
  
  return (
    <h1 className="p__opensans" style={{marginLeft: "14px"}}>
      {isOnline ? '✅ Online store' : '❌ Disconnected store'}
    </h1>
  );
};

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img 
          src={images.gericht} 
          alt="app__logo" 
        />
        <StatusBar />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans active">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
          <FiArrowUpRight fontSize={14} />
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
          <FiArrowUpRight fontSize={14} />
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
          <FiArrowUpRight fontSize={14} />
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
          <FiArrowUpRight fontSize={14} />
        </li>
      </ul>

      <div className="app__navbar-login">
        <a 
          href="#login" 
          className="p__opensans"
        >
          Log In / Registration
        </a>
        <div />
        <a 
          href="/" 
          className="p__opensans"
        >
            Book Table
        </a>
      </div>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu 
          color="#fff" 
          fontSize={27} onClick={() => setToggleMenu(true)} 
        />
        {toggleMenu && (
          <div 
            className="app__navbar-smallscreen_overlay 
            flex__center slide-bottom"
          >
            <MdOutlineRestaurantMenu 
              fontSize={27} 
              className="overlay__close" 
              onClick={() => setToggleMenu(false)} 
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a 
                  href="#home" 
                  onClick={() => setToggleMenu(false)}>
                    Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={() => setToggleMenu(false)}>
                    Menu
                </a>
              </li>
              <li>
                <a 
                  href="#awards" 
                  onClick={() => setToggleMenu(false)}>
                    Awards
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;