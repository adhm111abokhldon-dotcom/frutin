"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import swiperFirstImg from "@/assets/images/about-us-2.png";
import swiperSecondImg from "@/assets/images/about-us-3.png";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import Arrow from "@/assets/icons/Arrow";

const swiperData = [
  {
    heading: "Get Extra",
    headingSpan: "50% off",
    desc: "Fresh Vegetable & Organic Fruits",
    img: swiperFirstImg,
  },
  {
    heading: "Get Extra",
    headingSpan: "50% off",
    desc: "Organic Vegetable & Fresh Fruits",
    img: swiperSecondImg,
  },
  {
    heading: "Get Extra",
    headingSpan: "50% off",
    desc: "Fresh Vegetable & Organic Fruits",
    img: swiperFirstImg,
  },
  {
    heading: "Get Extra",
    headingSpan: "50% off",
    desc: "Organic Vegetable & Fresh Fruits",
    img: swiperSecondImg,
  },
  {
    heading: "Get Extra",
    headingSpan: "50% off",
    desc: "Fresh Vegetable & Organic Fruits",
    img: swiperFirstImg,
  },
  {
    heading: "Get Extra",
    headingSpan: "50% off",
    desc: "Organic Vegetable & Fresh Fruits",
    img: swiperSecondImg,
  },
];

const AboutUsBtm = () => {
  return (
    <section className="section-padding w-full">
      <div className="custom-container  h-50 md:h-70">
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 15 },
            380: { slidesPerView: 2 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiperData.map((slide, index) => (
            <SwiperSlide
              className="relative overflow-hidden! rounded-4xl!"
              key={index}
            >
              <Image
                src={slide.img}
                alt="slide relative rounded-4xl! -z-10 background"
                className="object-cover"
                fill
              />
              <div
                className="flex text-sm md:text-base relative z-10 rounded-4xl! flex-col p-4 sm:p-5 md:p-8
              lg:p-10 w-full items-start"
              >
                <h4 className="text-primary font-bold mb-6.5">
                  {slide.heading}
                  <span className="text-green-500! font-bold ps-0.5">
                    {slide.headingSpan}
                  </span>
                </h4>
                <p className="mb-6 md:mb-9 md:text-xl xl:text-2xl text-primary font-bold">
                  {slide.desc}
                </p>
                <div className=" relative z-20 w-fit">
                  <button className="custom-green-btn group">
                    shop now{" "}
                    <FaAngleDoubleRight className="group-hover:scale-[1.2] transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUsBtm;
