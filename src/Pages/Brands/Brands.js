import React from 'react';
import logos from '../../img/Logos.png'
import vector from '../../img/Vector 1.png'
import left from '../../img/left.png'
import './brands.css'

const Brands = () => {
    return (
      <div className="bg-[#F4FCFF] py-32">
        <div class="">
          <div class=" flex flex-col md:flex-row justify-around">
            <div className="logos p-5">
              <img src={logos} class="max-w-sm rounded-lg" />
            </div>
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
          </div>
        </div>
      </div>
    );
};

export default Brands;