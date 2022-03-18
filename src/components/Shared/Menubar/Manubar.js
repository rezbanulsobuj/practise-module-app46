import React from 'react';

import './Manubar.css'

const Manubar = (props) => {
    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-2 logo-container'>Logo</div>
                    <div className='col-md-10 menu-container d-flex justify-content-end'>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Cart <sup>{props.count}</sup></li>
                        <li>Login</li>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Manubar;