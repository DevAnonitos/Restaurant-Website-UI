import React from 'react';
import "./Header.css";

import { SubHeading } from '../../components';
import images from '../../constants/images';

const Header = () => {
  return (
    <>
      <div 
        id='home'
        className='app__header app__wrapper section__padding'
      >
        <div className='app__wrapper_info'>
            <SubHeading title="Chase the new flavour" />
          <h1 className='app__header-h1'>The key to Fine Dining</h1>
          <p 
            className="p__opensans" 
            style={{ margin: '2rem 0' }}
          >
            Sit tellus lobortis sed senectus vivamus molestie. 
            Condimentum volutpat morbi facilisis quam scelerisque sapien. 
            Et, penatibus aliquam amet tellus 
          </p>
          <button type="button" className="custom__button">Explore Menu</button>
        </div>

        <div className='app__wrapper_img'>
            <img src={images.welcome} alt="header_img" />
        </div>
      </div>
    </>
  )
}

export default Header