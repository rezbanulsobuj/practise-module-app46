import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Allproduct.css'

const Allproduct = (props) => {
    const { setCutCount } = props
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [product])



    return (
        <div>

            <div className='row container'>
                {
                    product.map(prod => <Product prod={prod} key={prod.id} setCutCount={setCutCount} ></Product>)
                }
            </div>
        </div>
    );
};

export default Allproduct;