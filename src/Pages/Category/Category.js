import React, { useEffect, useState } from 'react';
import Product from './Product';

const Category = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=> res.json())
        .then(data => setProducts(data.products))
    },[])
    
    return (
        <div className='m-28'>
            <h1 className='banner-h1 text-start text-3xl mt-16'>Shop by Category</h1>
            <p className='text-start text-lg text-gray-700 my-8'>Life is hard enough already. Let us <br />make it a little easier.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-24 my-24'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>).slice(0,9)
                }
            </div>
        </div>
    );
};

export default Category;