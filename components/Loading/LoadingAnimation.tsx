'use client';

import React from 'react';
import './Loader.css';

const LoadingAnimation = () => {
  return (
      <div className="flex w-full justify-center items-center"> 
    <div className="capybaraloader">
      <div className="capybara">
        <div className="capyhead">
          <div className="capyear">
            <div className="capyear2"></div>
          </div>
          <div className="capyear"></div>
          <div className="capymouth">
            <div className="capylips"></div>
            <div className="capylips"></div>
          </div>
          <div className="capyeye"></div>
          <div className="capyeye"></div>
        </div>
        <div className="capyleg"></div>
        <div className="capyleg2"></div>
        <div className="capyleg2"></div>
        <div className="capy"></div>
      </div>
      <div className="loader">
        <div className="loaderline"></div>
      </div>
    </div>
    </div>
  );
};

export default LoadingAnimation;