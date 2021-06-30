import React from "react";
import first from "../../img/first.jpeg";
import second from "../../img/second.png";
import third from "../../img/third.png";
import fourth from "../../img/fourth.png";
import fifth from "../../img/fifth.png";
import sixth from "../../img/sixth.png";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Pagination, Autoplay, Navigation]);

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
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <img src={first} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText first">
            <h1>
              Where Students
              <br />
              are Achievers
            </h1>
          </div>
          <img src={second} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText second">
            <h1>
              Students today,
              <br />
              Leaders tomorrow
            </h1>
          </div>
          <img src={third} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText third">
            <h1>
              Become the
              <br />
              Best Version
              <br />
              of You.
            </h1>
          </div>
          <img src={fourth} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText fourth">
            <p>A tradition of</p>
            <h1>Excellence</h1>
          </div>
          <img src={fifth} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText fifth">
            <h1>
              Once a RegScian
              <br />
              Always a RegScian
            </h1>
          </div>
          <img src={sixth} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainCarousel;
