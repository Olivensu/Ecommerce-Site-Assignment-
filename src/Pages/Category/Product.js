import React from 'react';
import add from '../../img/Add button.png'
const product = (props) => {
    const {id,title, thumbnail, price} = props.product;
    return (
        <div className=''>
            <img  className='w-full h-44 rounded-2xl' src={thumbnail} alt="" />
            <div className='text-start my-5'>
            <p className='font-bold text-lg '>{title}</p>
            </div>
            <div className='flex justify-between'><h4 className='mt-5 text-gray-500'>${price} &nbsp; &nbsp;<del className='text-orange-700'> ${price + 150}</del></h4>
            <img src={add} alt="" />
            </div>
        </div>
    );
};

export default product;