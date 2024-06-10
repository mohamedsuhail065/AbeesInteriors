import React, { useState } from 'react'
import './/Section4.css';
import { Carousel, Card } from 'react-bootstrap';
import office1 from '../images/office1.jpg';
import office2 from '../images/office2.jpg';
import office3 from '../images/office3.jpg';
import office4 from '../images/office4.jpg';
import office5 from '../images/office5.jpg';
import office6 from '../images/office6.jpg';
import living1 from '../images/living1.jpg';
import living2 from '../images/living2.jpg';
import living3 from '../images/living3.jpg';
import living4 from '../images/living4.jpg';
import t1 from '../images/toilet1.jpg';
import t2 from '../images/toilet2.jpg';
import t3 from '../images/toilet3.jpg';
import t4 from '../images/toilet4.jpg';
import t5 from '../images/toilet5.jpg';
import t6 from '../images/toilet6.png';
import b1 from '../images/bd1.jpg';
import b2 from '../images/bd2.jpg';
import b3 from '../images/bd3.jpg';
import b4 from '../images/bd4.jpg';
import b5 from '../images/bd5.png';
import b6 from '../images/bd6.png';



function Section4() {

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  const handleSelect1 = (selectedIndex1, e) => {
    setIndex1(selectedIndex1);
  };
  const handleSelect2 = (selectedIndex2, e) => {
    setIndex2(selectedIndex2);
  };
  const handleSelect3 = (selectedIndex3, e) => {
    setIndex3(selectedIndex3);
  };
  const handleSelect4 = (selectedIndex4, e) => {
    setIndex4(selectedIndex4);
  };


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 text-center title-design my-3'>
            <h3>Office Room </h3>
          </div>
        </div>
        <div className='row slider-row px-4'>
          <div className='col-lg-4 col-md-6 col-sm-12 bg-primary design-name-section'>
            <h5 className='text-light text-center mt-5'>Office Room</h5>
            <h3 className='text-dark text-center'>Office Room Designs</h3>
          </div>
          <div className='col-lg-8 col-md-6 col-sm-12 my-auto'>
            <Carousel activeIndex={index1} onSelect={handleSelect1} interval={null}>
              <Carousel.Item>
                <div className='image-wrapper d-flex'>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office1} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office2} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office3} />
                  </Card>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <div className='image-wrapper d-flex'>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office4} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office5} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office6} />
                  </Card>
                </div>
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-lg-12 text-center title-design py-3'>
            <h3>Living Room </h3>
          </div>
        </div>
        <div className='row slider-row px-4'>
          <div className='col-lg-4 col-md-6 col-sm-12 bg-primary design-name-section'>
            <h5 className='text-light text-center mt-5'>Living Room</h5>
            <h3 className='text-dark text-center'>Living Room Designs</h3>
          </div>
          <div className='col-lg-8 col-md-6 col-sm-12 my-auto'>
            <Carousel activeIndex={index2} onSelect={handleSelect2} interval={null}>
              <Carousel.Item>
                <div className='image-wrapper d-flex'>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={living1} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={living2} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={living3} />
                  </Card>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <div className='image-wrapper d-flex'>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office4} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office5} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={office6} />
                  </Card>
                </div>
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
        <hr />
        <div className='row '>
          <div className='col-lg-12 text-center title-design'>
            <h3>Toilet </h3>
          </div>
        </div>
        <div className='row slider-row px-4  '>
          <div className='col-lg-4 col-md-6 col-sm-12 bg-primary design-name-section align-items-center justify-content-center'>
            <h5 className='text-light text-center mt-5'>Toilet</h5>
            <h3 className='text-dark text-center'>Toilet Designs</h3>
          </div>
          <div className='col-lg-8 col-md-6 col-sm-12 my-auto slider-col'>
            <Carousel activeIndex={index3} onSelect={handleSelect3} interval={null}>
              <Carousel.Item>
                <div className='image-wrapper d-flex '>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={t1} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={t2} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={t3} />
                  </Card>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <div className='image-wrapper d-flex'>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={t4} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={t5} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={t6} />
                  </Card>
                </div>
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
        <hr />
        <div className='row '>
          <div className='col-lg-12 text-center title-design'>
            <h3>Bedroom </h3>
          </div>
        </div>
        <div className='row slider-row px-4  '>
          <div className='col-lg-4 col-md-6 col-sm-12 bg-primary design-name-section  '>
            <h5 className='text-light text-center mt-5'>Bedroom</h5>
            <h3 className='text-dark text-center'>Bedroom Designs</h3>
          </div>
          <div className='col-lg-8 col-md-6 col-sm-12 my-auto slider-col'>
            <Carousel activeIndex={index4} onSelect={handleSelect4} interval={null}>
              <Carousel.Item>
                <div className='image-wrapper d-flex '>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={b1} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={b2} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 mx-2 wrapper-images' src={b3} />
                  </Card>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <div className='image-wrapper d-flex'>
                  <Card>
                    <Card.Img className='col-lg-4 wrapper-images' src={b4} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 wrapper-images' src={b5} />
                  </Card>
                  <Card>
                    <Card.Img className='col-lg-4 wrapper-images' src={b6} />
                  </Card>
                </div>
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Section4