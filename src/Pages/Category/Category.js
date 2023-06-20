import React, { useEffect, useState } from 'react';
import Product from './Product';
import arrow from '../../img/arrow1-fill.png'
import arrow2 from '../../img/arrow2.png'
const Category = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=> res.json())
        .then(data => setProducts(data.products))
    },[])
    let next = 9;
    let before = 0;
    const nextProduct =()=>{
        next = next+9;
        before = before+9;
    }
    return (
        <div className='m-28'>
            <h1 className='banner-h1 text-start text-3xl mt-16'>Shop by Category</h1>
            <div className='flex justify-between'>
            <p className='text-start text-lg text-gray-700 my-8 '>Life is hard enough already. Let us <br />make it a little easier.</p>
            <div className='flex mt-10'>
                <button><img className='me-3 h-8 w-8' src={arrow2} alt="" /></button>
                <button onClick={nextProduct}><img className='me-3 h-8 w-8' src={arrow} alt="" /></button>
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-24 my-24'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>).slice(before,next)
                }
            </div>
        </div>
    );
};

export default Category;