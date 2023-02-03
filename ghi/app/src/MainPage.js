import React from 'react';
import { Carousel } from 'react-bootstrap';




function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://seater.rent/wp-content/uploads/2022/05/Audi-RS3-Limousine_5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>2022 Audi RS3</h3>
          <p>From $62,000</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8gGGtVxcSH9d_qg99UrWmpHDNPcdlfagKPWzSvpHRXG12Ynj1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>2021 911 Carrera</h3>
          <p>From $106,000</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dealeraccelerate.com/motorcar/1/610/3001/1920x1440/2013-mercedes-benz-c63-amg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>2022 Mercedez Benz C63 AMG</h3>
          <p>From $80,000 </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider
