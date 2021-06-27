import React from "react";
import teachersData from "./teachersData";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import TeacherCard from "./TeacherCard";

SwiperCore.use([Pagination, Autoplay, Navigation]);

function Teachers() {
  return (
    <Swiper
      // autoplay={{
      //   delay: 6000,
      //   disableOnInteraction: false,
      // }}
      speed={600}
      loop
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {teachersData.map((teacher) => (
        <SwiperSlide>
          <TeacherCard
            name={teacher.name}
            position={teacher.position}
            category={teacher.category}
            img={teacher.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Teachers;
