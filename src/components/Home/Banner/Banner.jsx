import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import im1 from "../../../assets/images/tajmohol.jpg";
import im2 from "../../../assets/images/Home15.jpg";
import im3 from "../../../assets/images/pic3.jpg";
import im4 from "../../../assets/images/pic5.jpg";
import im5 from "../../../assets/images/bankok.jpg";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: im1,
      title: "Discover the World's Hidden Gems",
      description:
        "Discover hidden gems and create unforgettable memories with our travel guides.",
    },
    {
      id: 2,
      image: im2,
      title: "Explore Dream, Discover",
      description: "Your ultimate adventure starts here—explore the world with us.",
    },
    {
      id: 3,
      image: im3,
      title: "Find Your Next Destination",
      description: "Unlock the secrets of the world's most beautiful places.",
    },
    {
      id: 4,
      image: im4,
      title: "Wander More, Worry Less",
      description: "Travel with ease and explore like never before.",
    },
    {
      id: 5,
      image: im5,
      title: "Adventure Awaits",
      description: "Step out and experience the beauty of the unknown.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full lg:h-[500px]">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute flex items-center h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525] p-6 lg:pl-20 md:pl-10 pl-4 rounded-xl">
                <div className="text-white">
                  <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3">
                    {slide.title}
                  </h1>
                  <p className="py-4">{slide.description}</p>
                  <div>
                    <button className="btn btn-error mr-4">Discover More</button>
                    <button className="btn btn-active btn-neutral">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
