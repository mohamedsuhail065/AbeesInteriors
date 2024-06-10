import React from 'react';
import './Section6.css';

function Section6() {
    return (
        <>
            <div className='container-fluid  bg-dark mt-5 px-5 pt-5 footer-container'>
                <div className='row mb-0'>
                    <div className='col-lg-3'>
                        <h3 className='text-primary'>Get in Touch</h3>
                        <p className='text-light'>📍Thrissur,Mala-Gov.Hospital<br />
                            road,kerala,India</p>
                        <p className='text-light'>☎️+91 9544595880,7907534215</p>
                        <p className='text-light'>✉️info@abheesinteriors.com</p>
                    </div>
                    <div className='col-lg-3'>
                        <h3 className='text-primary'>Quick Links</h3>
                        <a href='/' className='text-light'>Home</a><br />
                        <a href='/' className='text-light'>About Us</a>
                    </div>
                    <div className='col-lg-6'>
                        <h3 className='text-primary'>Popular Links</h3>
                        <a href='/' className='text-light'>Home</a><br />
                        <a href='/' className='text-light'>About Us</a> <br />
                        <a href='/' className='text-light'>Contact Us</a>
                    </div>
                </div>
                <div className='col-lg-12 mt-4'>
                <hr className='text-light my-4' />
                    <p className='text-light text-center'>© <a className='text-light' href='/'>Abhees Interior</a>. All Rights Reserved by abheesinterior.com</p>
                </div>   
            </div>
        </>
    )
}

export default Section6