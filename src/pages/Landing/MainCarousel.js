import React from "react";
import main1 from "../../img/main1.jpg";
import main2 from "../../img/main2.jpg";
import main3 from "../../img/main3.jpg";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, Autoplay]);

function MainCarousel() {
  return (
    <Swiper
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      speed={600}
      loop
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={main1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={main2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={main3} />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainCarousel;
