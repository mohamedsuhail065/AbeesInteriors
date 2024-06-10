import React from 'react'
import './Section3.css'


function Section3() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row pt-4 pb-4 align-items-center'>
                    <div className='col-lg-4 col col-md-4 col-sm-12 text-center '>
                        <img className='address-icon mb-3' src='https://cdn-icons-png.flaticon.com/512/2086/2086058.png' alt='office-icon' />
                        <h3> Our Office</h3>
                        <p> Address<br />
                            Mala-Gov.Hospital road<br />
                            Thrissur <br />
                            Kerala
                        </p>
                    </div>
                    <div className='col-lg-4 col col-md-4 col-sm-12 text-center'>
                    <img className='address-icon mb-3' src='https://cdn-icons-png.flaticon.com/512/646/646094.png' alt='mail-icon' />
                        <h3>Email Us</h3>
                        <a href='/'> info@abheesinteriors.com</a> <br />
                        <a href='/'>saju@abheesinteriors.com</a>
                    </div>
                    <div className='col-lg-4 col col-md-4 col-sm-12 text-center'>
                        <img className='address-icon mb-3' src='https://cdn-icons-png.flaticon.com/512/126/126509.png' alt='phone-icon' />
                        <h3> Call Us</h3>
                        +91 9544595880<br />
                        +91 7907534215<br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3