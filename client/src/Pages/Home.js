import React from 'react'
import Section3 from '../components/Address-section/Section3';
import Section2 from '../components/Carousel-section/Section2';
import Section4 from '../components/Designs-section/Section4';
import Section6 from '../components/Footer-section/Section6';
import Section5 from '../components/Gallery-section/Section5';
import Header from '../components/Top-Section/header';




function Home() {
  return (
    <> 
          <Header/>
           <Section2 />
           <Section3 />
           <Section4 />
           {/* <Section5 /> */}
           <Section6 />
    </>

  )
}

export default Home