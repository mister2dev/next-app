'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/images/food1.jpg',
  '/images/food2.jpg',
  '/images/food3.jpg',
  '/images/food4.jpg',
  '/images/food5.jpg',
  '/images/food6.jpg',
  '/images/food7.jpg',
];

export default function Gallery2() {
  return (
    <div className="mx-auto p-6 sm:py-10 max-w-full sm:max-w-4xl">
      <h2 className="text-2xl font-semibold text-center mb-6">Notre Galerie</h2>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        touchEventsTarget={'container'}
        touchReleaseOnEdges={true}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={false}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg overflow-hidden sm:rounded-xl sm:overflow-hidden w-full max-w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Food ${index + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
