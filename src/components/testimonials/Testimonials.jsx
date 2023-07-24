import React, { useState } from 'react';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './testimonials.css';

const Testimonials = () => {
  return (
    <secion className="testimonials container section">
        <h2 className="section__title">My Clients Say</h2>
        <span className="section__subtitle">Testimonials</span>

        <Swiper className="testimonials__container container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }    
        }}
        modules={[Pagination]}        
        >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonial__card">
                        <img src={image} alt="" className='testimonial__img'/>

                        <h3 className="testimonial__name">
                            {title}
                        </h3>

                        <p className="testimonial__description">
                            {description}
                        </p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </secion>
  )
}

export default Testimonials