import React from 'react';
import ReactModal from '../../ReactModal/ReactModal';



import './Product.css'

const Product = (props) => {

    const { setCutCount } = props
    const { title, image } = props.prod

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className='col-md-4'>
            <div className="card p-2 border">
                <img className='w-50 m-auto' src={image} alt="" />
                <h1>{title.slice(0, 10)}</h1>
                <div className='d-flex justify-content-around'>
                    <button onClick={setCutCount} className='btn btn-success '>Add to cart</button>
                    <button className='btn btn-primary '>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal prod={props.prod}></ReactModal>

                </div>
            </div>

        </div>
    );
};

export default Product;