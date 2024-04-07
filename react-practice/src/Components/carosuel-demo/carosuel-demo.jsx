import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import './CarouselPage.css'

export function CarosuelDemo() {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>LORD SHIVA</h3>
            <p>Shiva is everything and everyone; he is the Universe itself.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
    
          <Carousel.Caption>
            <h3>LORD SHIVA</h3>
            <p>Mahadev is a part of the present, the past, and the future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>LORD SHIVA AND GODDESS PARVATI</h3>
            <p>
            Shiva is here and everywhere. He is everywhere and everywhere at the same time.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      )
}


