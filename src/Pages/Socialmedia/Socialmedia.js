import React from 'react';
import left from '../../img/left.png'
import image from '../../img/image 49.png'
import sunglass from '../../img/image 50.png'
import shoe from '../../img/image 51.png'
import watch from '../../img/image 52.png'
import rectangle from '../../img/Rectangle 17.png'
import fb from '../../img/facebook.png'
import insta from '../../img/instagram.png'
import twt from '../../img/twiter.png'

const Socialmedia = () => {
    return (
        <div className="bg-[#F4FCFF] py-32">
        <div class="">
          <div class=" flex flex-col md:flex-row justify-around items-center">
            <div className="">
              <h1 class="banner-h1 text-start text-3xl mt-16">
                Explore Most Popular <br />
                Brands
              </h1>
              <p class="py-10">
                Life is hard enough already. Let us <br />
                make it a little easier.
              </p>
              <div className="flex">
                <span className="me-5 font-bold">Discover Our Products</span>
                <img src={left} alt="" />
              </div>
            </div>
            <div className="logos p-16">
              <img src={rectangle} class="" />
              <img src={image} class="rounded-lg me-[-60px] mt-[-420px]" />
              <div className='flex mt-[-90px] ms-[-50px]'>
                <div>
                <img className='me-4' src={sunglass} alt="" />
                <img src={fb} className='mt-[-140px] ms-5' alt="" />
                <p className='font-bold mt-20 ms-5'>$12.00</p>
                </div>
                <div>
                <img className='me-4' src={shoe} alt="" />
                <img src={insta} className='mt-[-140px] ms-5' alt="" />
                <p className='font-bold mt-20 ms-5'>$12.00</p>
                </div>
                <div>
                <img className='me-4' src={watch} alt="" />
                <img src={twt} className='mt-[-140px] ms-5' alt="" />
                <p className='font-bold mt-20 ms-5'>$12.00</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
};

export default Socialmedia;