"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import swiperFirstImg from "@/assets/images/about-us-2.png";
import swiperSecondImg from "@/assets/images/about-us-3.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n";

const promoImages = [swiperFirstImg, swiperSecondImg];

const AboutUsBtm = () => {
  const { t, locale } = useLanguage();
  const slides = Array.from({ length: 6 }, (_, index) => ({
    ...t.promo.slides[index % t.promo.slides.length],
    img: promoImages[index % promoImages.length],
  }));
  return (
    <section className="section-padding w-full">
      <div className="custom-container  h-50 md:h-70">
        <Swiper
          key={locale}
          dir={locale === "ar" ? "rtl" : "ltr"}
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
          {slides.map((slide, index) => (
            <SwiperSlide
              className="relative overflow-hidden! rounded-4xl!"
              key={`${slide.description}-${index}`}
            >
              <Image
                src={slide.img}
                alt={t.promo.imageAlt}
                className="object-cover"
                fill
              />
              <div
                className="flex text-sm md:text-base relative z-10 rounded-4xl! flex-col p-4 sm:p-5 md:p-8
              lg:p-10 w-full items-start text-start"
              >
                <h4 className="text-primary font-bold mb-6.5">
                  {slide.heading}
                  <span className="text-green-500! font-bold ps-0.5">
                    {slide.highlight}
                  </span>
                </h4>
                <p className="mb-6 md:mb-9 md:text-xl xl:text-2xl text-primary font-bold">
                  {slide.description}
                </p>
                <div className=" relative z-20 w-fit">
                  <Link
                    href="/#contact"
                    aria-label={`${t.promo.cta} — ${slide.description}`}
                    className="custom-green-btn group"
                  >
                    {t.promo.cta}{" "}
                    <FaAngleDoubleRight className="mirror-rtl group-hover:scale-[1.2] rtl:group-hover:-scale-x-[1.2] transition-transform duration-300" />
                  </Link>
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
