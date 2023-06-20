import React from 'react';
import man from '../../img/man.png'
import arrow1 from '../../img/arrow2-fill.png'
import arrow2 from '../../img/arrow1.png'

const Review = () => {
    return (
        <div className="py-24">
        <div class="">
          <div class=" flex flex-col md:flex-row justify-around">
            <div className="logos bg-[#CEF0FF] p-5">
              <img src={man} class="max-w-sm rounded-lg" />
            </div>
            <div className="">
              <h1 class="banner-h1 text-start text-lg font-bold mt-16">
              Justin Pierre
              </h1>
              <p class="py-18 text-gray-500">
              Products Seller
              </p>
              <p className='my-10 font-bold'>“In 2 years, my business went from just me <br />and my Shop site to 40 employees, my own fulfillment <br />center and over 22 million dollars <br />in revenue.”</p>
              <div className='flex'>
                <img className='me-3  w-10 h-10' src={arrow1} alt="" />
                <img className='me-3  w-10 h-10' src={arrow2} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;