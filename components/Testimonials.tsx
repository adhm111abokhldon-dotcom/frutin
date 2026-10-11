"use client";
import Title from "./Ui/Title";
import testemonialsImg from "@/assets/images/testemonials-1.png";
import testemonialsIcon from "@/assets/images/testemonials-2.png";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n";
const Testimonials = () => {
  const { t } = useLanguage();
  const clients = t.testimonials.clients;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = clients[currentIndex % clients.length];

  const handleTestimonialClick = (left: boolean) => {
    if (left) {
      setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };
  return (
    <section id="testimonials" className="section-padding scroll-mt-20">
      <div className="custom-container ">
        <Title
          heading={t.testimonials.eyebrow}
          subHeading={t.testimonials.title}
          isCenter={true}
          isLeaf={false}
          subHeadingClassName="text-primary! mb-10 sm:mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 ">
          <div className="relative w-70 mx-auto h-60 sm:w-90  rounded-2xl md:rounded-r-4xl rtl:md:rounded-r-none rtl:md:rounded-l-4xl overflow-hidden md:w-full md:h-full md:mx-0">
            <Image
              src={testemonialsImg}
              alt={t.testimonials.imageAlt}
              fill
              className=" object-cover"
            />
          </div>
          <div className="p-6 md:p-8 bg-[#F5F7EB] rounded-2xl md:rounded-r-4xl rtl:md:rounded-r-2xl rtl:md:rounded-l-4xl">
            {
              <>
                <div className="">{currentTestimonial.quote}</div>
                <div className="flex justify-between  mt-8">
                  <div className="flex flex-col gap-1">
                    <h4
                      className="text-xl lg:text-2xl font-bold text-primary"
                      lang="en"
                    >
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm md:text-base  text-green-500 ">
                      {currentTestimonial.role}
                    </p>
                    <div className="flex gap-2 md:gap-3 mt-2 md:mt-5">
                      <button
                        type="button"
                        aria-label={t.testimonials.previous}
                        onClick={() => handleTestimonialClick(true)}
                        className="custom-green-arrow-btn"
                      >
                        <FaArrowLeft className="mirror-rtl" />
                      </button>
                      <button
                        type="button"
                        aria-label={t.testimonials.next}
                        onClick={() => handleTestimonialClick(false)}
                        className="custom-green-arrow-btn"
                      >
                        <FaArrowRight className="mirror-rtl" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={testemonialsIcon} alt="" className="max-w-30" />
                  </div>
                </div>
              </>
            }
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
