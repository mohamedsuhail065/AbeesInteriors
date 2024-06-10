import React from 'react'
import {Carousel} from 'react-bootstrap';
import image1 from '../images/r-architecture-TRCJ-87Yoh0-unsplash.jpg';
import image2 from '../images/vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg';
import './Section-2.css';

function Section2() {
  return (
   <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousal-image "
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-primary'>Creative Interior Design</h3>
          <h1>Make Your Place Better</h1>
          <button className='btn btn-primary'>Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousal-image "
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-primary'>Creative Interior Design</h3>
          <h1>Stay at Home in Peace.</h1>
          <button className='btn btn-primary'>Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
   </>
  )
}

export default Section2