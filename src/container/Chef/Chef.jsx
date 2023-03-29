import React from 'react';

import './Chef.css';

import { images } from '../../constants';

import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repudiandae maxime voluptatum sit, quo ducimus ratione! Modi excepturi hic vero dignissimos sapiente dolorem nostrum cupiditate quod quam aliquam quidem saepe exercitationem tempora odit facere porro fuga, quo provident corporis nemo.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
