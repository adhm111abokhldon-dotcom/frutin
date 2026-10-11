"use client";
import WhyChooseUsBg from "@/assets/images/why-choose-us-bg.png";
import WhyChooseUsBgSmall from "@/assets/images/why-choose-us-bg-small.jpeg";
import Image from "next/image";
import Title from "./Ui/Title";
import WhyChooseUsImg from "@/assets/images/why-choose-us.png";
import { WhyChooseUsIcons } from "@/data/WhyChooseUsData";
import { useLanguage } from "@/lib/i18n";
const WhyChooseUs = () => {
  const { t } = useLanguage();
  return (
    <section id="why-choose-us" className="section-padding scroll-mt-20">
      <div className="custom-container  py-12 md:py-16 lg:py-20 relative ">
        <Image
          src={WhyChooseUsBg}
          alt=""
          className="max-md:hidden object-cover  rounded-4xl"
          fill
        />
        <Image
          src={WhyChooseUsBgSmall}
          alt=""
          className="md:hidden   rounded-3xl   px-4"
          fill
        />
        <div className="relative z-20">
          <Title
            heading={t.whyChooseUs.eyebrow}
            subHeading={t.whyChooseUs.title}
            subHeadingClassName="mb-10 sm:mb-8"
            isCenter={true}
            isLeaf={false}
          />
        </div>
        {/* desktop */}
        <div className="grid max-md:hidden  grid-cols-3 gap-8 relative z-20">
          {/* left side */}
          <div className="flex flex-col gap-10">
            {t.whyChooseUs.items.slice(0, 3).map((service, i) => {
              const Icon = WhyChooseUsIcons[i % WhyChooseUsIcons.length];
              return (
                <div className="flex items-center gap-4" key={service.title}>
                  <Icon className="w-12.5 h-12.5 shrink-0" />

                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-white">
                      {service.title}
                    </h4>
                    <p className="text-base text-[#BDBDBD]">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* middle side */}
          <div className="h-full flex items-center justify-center">
            <Image src={WhyChooseUsImg} alt={t.whyChooseUs.imageAlt} />
          </div>
          {/* right side */}{" "}
          <div className="flex flex-col gap-10">
            {t.whyChooseUs.items.slice(3).map((service, i) => {
              const Icon = WhyChooseUsIcons[(i + 3) % WhyChooseUsIcons.length];
              return (
                <div className="flex items-center gap-4" key={service.title}>
                  <Icon className="w-12.5 h-12.5 shrink-0" />

                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-white">
                      {service.title}
                    </h4>
                    <p className="text-base text-[#BDBDBD]">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* mobile */}
        <div className="grid max-sm:ps-4  md:hidden  justify-center  gap-8 relative z-20">
          <div className="flex flex-col gap-10">
            {t.whyChooseUs.items.map((service, i) => {
              const Icon = WhyChooseUsIcons[i % WhyChooseUsIcons.length];
              return (
                <div className="flex items-center gap-3" key={service.title}>
                  <Icon className="w-12.5 h-12.5 shrink-0" />
                  <div className="flex flex-col gap-2">
                    <h4 className="max-[400px]:text-sm text-base font-bold text-white">
                      {service.title}
                    </h4>
                    <p className="max-[400px]:text-sm text-[#5F6369]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
