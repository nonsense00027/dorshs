import React from "react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import award1 from "../../../img/awards/award1.jpg";
import award2 from "../../../img/awards/award2.jpg";
import award3 from "../../../img/awards/award3.jpg";
import award4 from "../../../img/awards/award4.jpg";
import award5 from "../../../img/awards/award5.jpg";
import award6 from "../../../img/awards/award6.jpg";
import AwardCard from "./AwardCard";
import { Container } from "@material-ui/core";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const awards = [
  {
    image: award1,
    title: "Japan East Asia Network of Students and Youth",
    delegates: [
      "AUDREY MARIZ O. PADILLA",
      "JAN ANDREI ABIEL F. APELO",
      "HEROLD PALACASI",
      "ADDY RYZANNE O. PADILLA",
    ],
  },

  {
    image: award2,
    title:
      "PHILIPPINE YOUTH LEADERSHIP PROGRAM - NORTHERN ILLINOIS UNIVERSITY ",
    delegates: ["SOPHIA O. SEBASTIAN 2018", "CLARISSA O. CAYANONG 2014"],
  },
  {
    image: award3,
    title: "ASIAN RAPTORS RESEARCH AND CONSERVATION NETWORK",
    held: "HELD AT BALI, INDONESIA. ",
    representatives: [
      "LEILA LOON",
      "KEANU SITJAR",
      "HEART SUZANNE PAJA (BEST PRESENTER) ",
    ],
  },
  {
    image: award4,
    title: "NATIONAL SCHOOLS PRESS CONFERENCE 2018",
    subtitle: "PAGSULAT NG ARTIKULONG PANG-AGHAM AT TEKNOLOHIYA CHAMPION",
  },
  {
    image: award5,
    title: "BRIGADA ESKWELA 2020",
    subtitle: "MOST SUSTAINED AWARDEE",
  },
  {
    image: award6,
    title: "NATIONAL YOUTH SCIENCE, TECHNOLOGY AND ENVIRONMENT SUMMER CAMP",
    subtitle: "MOVES UNTOLD: CHAMPION 2018",
    held: "HELD AT D'LEONOR RESORT, BUHANGIN, DAVAO CITY",
  },
];
function AwardsCarousel() {
  return (
    <Container>
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
        {awards.map((award) => (
          <SwiperSlide>
            <AwardCard
              title={award.title}
              subtitle={award.subtitle}
              held={award.held}
              delegates={award.delegates}
              representatives={award.representatives}
              img={award.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default AwardsCarousel;
