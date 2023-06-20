import React from 'react';
import './banner.css'
import { Carousel } from '@material-tailwind/react';
import camera from '../../img/camera.png'
import lens1 from '../../img/lens-1.png'
import lens2 from '../../img/lens.png'
import Slider from '../Review/Slider';
import Trending from '../Trending/Trending';
import Footer from '../Shared/Footer';
import Category from '../Category/Category';
import Featured from '../Featured-Product/Featured';

const Banner = () => {
    return (
      <div className="banner">
        <div className="text-center text-xs py-3">
          <a
            className="link banner-link me-6 no-underline active:border-b-2 border-blue-gray-900"
            href=""
          >
            Jewelry & Accessories
          </a>
          <a
            className="link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Clothing & Shoes
          </a>
          <a
            className="link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Home & Living
          </a>
          <a
            className="link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Wedding & Party
          </a>
          <a
            className="link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Toys & Entertainment
          </a>
          <a
            className="link banner-link me-6  no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Art & Collectibles
          </a>
          <a
            className="link banner-link me-6  no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Craft Supplies & Tools
          </a>
          <a
            className="link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900"
            href=""
          >
            Vintage
          </a>
        </div>
        <div className="mt-12">
          <div className="hero hero-banner">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="ms-16">
                <div className="text-center">
                  <img src={lens1} alt="" />
                  <p className="my-5">
                    Fuji 14mm <br />
                    Lens
                  </p>
                </div>
                <div className="text-center">
                  <img src={lens2} alt="" />
                  <p className="my-5">
                    Camera <br />
                    Stand
                  </p>
                </div>
              </div>
              <Carousel
                transition={{ duration: 0 }}
                className="rounded-xl w-96"
              >
                <img
                  src={camera}
                  alt="image 1"
                  className="h-full w-full object-cover w-96  rounded-full border-cyan-400 border-8"
                />
                <img
                  src={camera}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src={camera}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
              <div className="mt-64 ms-[-40px]">
                Start from <br />
                <span className="money">110.00$</span>
              </div>
              <div>
                <p className='text-sm font-bold'>100% QUALITY, 100% SATISFACTION</p>
                <h1 className="text-5xl banner-h1 font-bold my-5">
                  Where the world <br /> comes to shop.
                </h1>
                <p>
                  Life is hard enough already. Let us make it a little <br />
                  easier, Vision of Snipshop for a better outlook.
                </p>
                <button className="btn btn-primary shop-now rounded-full px-10 my-10">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Trending></Trending>
        <Category></Category>
        <Featured></Featured>
        <Footer></Footer>
      </div>
    );
};

export default Banner;