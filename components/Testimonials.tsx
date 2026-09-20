"use client";
import Title from "./Ui/Title";
import testemonialsImg from "@/assets/images/testemonials-1.png";
import testemonialsIcon from "@/assets/images/testemonials-2.png";
import { testimonialsData } from "@/data/testimonialsData";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(
    testimonialsData[0],
  );

  const handleTestimonialClick = (left: boolean) => {
    const currentTestimonialIndex = testimonialsData.findIndex(
      (testimonial) => testimonial.name === currentTestimonial.name,
    );

    if (left) {
      const prevTestimonialIndex = currentTestimonialIndex - 1;

      if (prevTestimonialIndex === -1) {
        setCurrentTestimonial(testimonialsData[testimonialsData.length - 1]);
        return;
      }

      setCurrentTestimonial(testimonialsData[prevTestimonialIndex]);
      return;
    }

    const nextTestimonialIndex = currentTestimonialIndex + 1;

    if (nextTestimonialIndex === testimonialsData.length) {
      setCurrentTestimonial(testimonialsData[0]);
      return;
    }

    setCurrentTestimonial(testimonialsData[nextTestimonialIndex]);
  };
  return (
    <section className="section-padding">
      <div className="custom-container ">
        <Title
          heading="Testimonials"
          subHeading="Our Customer Feedback"
          isCenter={true}
          isLeaf={false}
          subHeadingClassName="text-primary! mb-10 sm:mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 ">
          <div className="relative w-70 mx-auto h-60 sm:w-90  rounded-2xl md:rounded-r-4xl overflow-hidden md:w-full md:h-full md:mx-0">
            <Image
              src={testemonialsImg}
              alt=""
              fill
              className=" object-cover"
            />
          </div>
          <div className="p-6 md:p-8 bg-[#F5F7EB] rounded-r-4xl">
            {
              <>
                <div className="">{currentTestimonial.desc}</div>
                <div className="flex justify-between  mt-8">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-primary">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm md:text-base  text-green-500 ">
                      {currentTestimonial.title}
                    </p>
                    <div className="flex gap-2 md:gap-3 mt-2 md:mt-5">
                      <button
                        onClick={() => handleTestimonialClick(true)}
                        className="custom-green-arrow-btn"
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        onClick={() => handleTestimonialClick(false)}
                        className="custom-green-arrow-btn"
                      >
                        <FaArrowRight />
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
