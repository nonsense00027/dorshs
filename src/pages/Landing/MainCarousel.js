import React from "react";
import main1 from "../../img/main1.jpg";
import main2 from "../../img/main2.jpg";
import main3 from "../../img/main3.jpg";
import first from "../../img/first.jpeg";
import second from "../../img/second.png";
import third from "../../img/third.png";
import fourth from "../../img/fourth.png";
import fifth from "../../img/fifth.png";
import sixth from "../../img/sixth.png";
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
        <div className="carousel__slideContainer">
          <img src={first} />
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
          <img src={second} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText second">
            <h1>
              Students today,
              <br />
              Learners tomorrow
            </h1>
          </div>
          <img src={third} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText third">
            <h1>
              Become the,
              <br />
              best version
              <br />
              of you.
            </h1>
          </div>
          <img src={fourth} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slideContainer">
          <div className="carousel__slideText fourth">
            <p>A tradition of</p>
            <h1>Excellence</h1>
          </div>
          <img src={fifth} />
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
          <img src={sixth} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainCarousel;
