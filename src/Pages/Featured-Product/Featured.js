import React from 'react';
import left from '../../img/left.png'
import arrow1 from '../../img/arrow2-fill.png'
import arrow2 from '../../img/arrow1.png'
import preOrder1 from '../../img/image.png'
import preOrder2 from '../../img/image (1).png'
import preOrder3 from '../../img/image (2).png'

const Featured = () => {
    return (
        <div className='m-28'>
            <h1 className='banner-h1 text-center text-3xl mt-16'>Featured Product For <br />Pre-Order</h1>
            <div className='flex justify-end'><span className='me-5 font-bold'>Discover Our Products</span>
            <img src={left} alt="" /></div>
            <div className='flex items-center mt-10'>
            <div className='flex'>
                <img className='me-3  w-10 h-10' src={arrow1} alt="" />
                <img className='me-3  w-10 h-10' src={arrow2} alt="" />
            </div>
            <div className='text-center'>
                <img className='m-auto' src={preOrder1} alt="" />
                <h3 className='text-[#3B3849] font-bold text-lg'>VERSACE</h3>
                <p className='text-[#3B3849] my-5'>EROS - W - <small className='text-gray-500'>Women</small></p>
                <p className='text-[#0E4B80]'>$285.00 USD</p>
                <button className='bg-[#001439] text-white mt-10 rounded-full px-5 py-2 font-bold'>ORDER NOW</button>
            </div>
            <div className='text-center'>
                <img className='m-auto' src={preOrder2} alt="" />
                <h3 className='text-[#3B3849] font-bold text-lg'>N.5 CHANEL</h3>
                <p className='text-[#3B3849] my-5'>EAU DE PARFUM - M -  <small className='text-gray-500'>Man</small></p>
                <p className='text-[#0E4B80]'>$285.00 USD</p>
                <button className='bg-[#001439] text-white mt-10 rounded-full px-5 py-2 font-bold'>ORDER NOW</button>
            </div>
            <div className='text-center'>
                <img className='m-auto' src={preOrder3} alt="" />
                <h3 className='text-[#3B3849] font-bold text-lg'>GABRIELLE</h3>
                <p className='text-[#3B3849] my-5'>CHANEL PARIS- M -  <small className='text-gray-500'>Man</small></p>
                <p className='text-[#0E4B80]'>$285.00 USD</p>
                <button className='bg-[#001439] text-white mt-10 rounded-full px-5 py-2 font-bold'>ORDER NOW</button>
            </div>
            </div>
            
        </div>
    );
};

export default Featured;