"use client";
import Title from "./Ui/Title";
import Image from "next/image";
import { HowWeWorkIcons, HowWeWorkImages } from "@/data/HowWeWorkData";

import { useLanguage } from "@/lib/i18n";

const HowWeWork = () => {
  const { t } = useLanguage();
  return (
    <section id="how-we-work" className="section-padding scroll-mt-20">
      <div className="custom-container">
        <Title
          isCenter={true}
          isLeaf={false}
          heading={t.howWeWork.eyebrow}
          subHeading={t.howWeWork.title}
          subHeadingClassName="text-primary! mb-10 sm:mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 ">
          {t.howWeWork.steps.map((step, index) => {
            const counter = index + 1;
            const StepIcon = HowWeWorkIcons[index % HowWeWorkIcons.length];

            return (
              <div
                className="flex items-center justify-center flex-col gap-4"
                key={step.title}
              >
                <div className=" h-45 w-45 relative mb-6">
                  <div className=" rotate-45  rounded-4xl overflow-hidden">
                    <Image
                      src={HowWeWorkImages[index % HowWeWorkImages.length]}
                      alt={t.howWeWork.imageAlt}
                      className=" scale-110 -rotate-45 "
                    />
                  </div>
                  <div className="absolute z-20 -top-2 -left-3 rtl:-left-auto rtl:-right-3 rtl:left-auto">
                    <StepIcon className="w-18 h-18" />
                  </div>
                </div>

                <div className="flex items-center flex-col gap-4">
                  <h4 className="text-sm sm:text-base md:text-lg">
                    {t.howWeWork.step}{" "}
                    <span className="text-sm sm:text-base md:text-lg ms-0.5">
                      0{counter}
                    </span>
                  </h4>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                    {step.title}
                  </h4>
                  <p className="text-base  max-lg:max-w-80  max-lg:text-center text-[#5F6369]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
