import React, { useContext } from "react";
import "./trending.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import img1 from "../../img/image-removebg-preview (55) 1.png"
import img2 from "../../img/image-removebg-preview (57) 1.png"
import img3 from "../../img/image-removebg-preview (58) 1.png"
import img4 from "../../img/image-removebg-preview (59) 1.png"
import img5 from "../../img/image-removebg-preview (60) 1.png"
import { themeContext } from "../../Context";

const Trending = () => {
    return (
        <div className="mt-52">
            <h1 className='banner-h1 text-center text-3xl mt-16'>Shop Our Trending Products</h1>
            <p className='text-center text-lg text-gray-700 my-8'>Life is hard enough already. Let us make it a <br />little easier.</p>
            <div className='text-center text-xs py-3'>
                <a className='link banner-link me-6 no-underline active:border-b-2 border-blue-gray-900' href="">Fashion</a>
                <a className='link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900' href="">Technology</a>
                <a className='link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900' href="">Interiors</a>
                <a className='link banner-link me-6 no-underline  active:border-b-2 border-blue-gray-900' href="">Food & Drink</a>
            </div>
            <div>
            <div className="portfolio ms-24 mt-10" id="portfolio">

      {/* slider */}
      <Swiper
        
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="w-64 h-40 flex bg-gradient-to-r from-[#ECF1FD] to-[#C0D4FE] rounded-xl p-5">
            <div className="w-full">
                <h3 className="text-lg font-bold">Seven Zero Five</h3>
                <p>Starting</p>
                <p className="mt-5 font-bold  text-yellow-900">$10.00</p>
            </div>
            <div>
            <img className="h-48 w-auto ms-12 mt-[-70px]" src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-64 h-40 flex bg-gradient-to-r from-[#ECF1FD] to-[#C0D4FE] rounded-xl p-5">
            <div className="w-full">
                <h3 className="text-lg font-bold">Clock</h3>
                <p>Starting</p>
                <p className="mt-5 font-bold  text-yellow-900">$25.00</p>
            </div>
            <div>
            <img className="h-48 w-auto ms-12 mt-[-70px]" src={img2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-64 h-40 flex bg-gradient-to-r from-[#ECF1FD] to-[#C0D4FE] rounded-xl p-5">
            <div className="w-full">
                <h3 className="text-lg font-bold">Curology</h3>
                <p>Starting</p>
                <p className="mt-5 font-bold  text-yellow-900">$12.00</p>
            </div>
            <div>
            <img className="h-48 w-auto ms-12 mt-[-70px]" src={img3} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-64 h-40 flex bg-gradient-to-r from-[#ECF1FD] to-[#C0D4FE] rounded-xl p-5">
            <div className="w-full">
                <h3 className="text-lg font-bold">Chair</h3>
                <p>Starting</p>
                <p className="mt-5 font-bold  text-yellow-900">$16.00</p>
            </div>
            <div>
            <img className="h-48 w-auto ms-12 mt-[-70px]" src={img4} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-64 h-40 flex bg-gradient-to-r from-[#ECF1FD] to-[#C0D4FE] rounded-xl p-5">
            <div className="w-full">
                <h3 className="text-lg font-bold">Curology</h3>
                <p>Starting</p>
                <p className="mt-5 font-bold  text-yellow-900">$60.00</p>
            </div>
            <div>
            <img className="h-48 w-auto ms-12 mt-[-70px]" src={img5} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
            </div>
        </div>
    );
};

export default Trending;