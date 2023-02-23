
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/News.jpg'
import img2 from './img/buy&sell.jpg'
import img3 from './img/movies.jpg'
import './home.css'

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div style={{margin : "100px"}}>
  <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="img"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className='firstS'>
        <h3><b>BREAKING NEWS</b></h3>
        <p>ALL ABOUT YOUR LOCAL NEWS IN JUST ONE PAGE</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
      <div className='SecS'>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
      <div className='ThirS'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Home