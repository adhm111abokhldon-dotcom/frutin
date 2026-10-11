"use client";
import Image from "next/image";
import bgImg from "@/assets/images/services-bg.png";
import bgImgSmallScreen from "@/assets/images/services-bg-smallScreen.jpeg";
import Title from "./Ui/Title";
import ServicesFreshIcon from "@/assets/icons/ServicesFreshIcon";
import ServicesNaturalIcon from "@/assets/icons/ServicesNaturalIcon";
import ServicesOrganicIcon from "@/assets/icons/ServicesOrganicIcon";
import naturalBg from "@/assets/images/services-1.png";
import organicBg from "@/assets/images/services-2.png";
import freshBg from "@/assets/images/services-3.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const serviceIcons = [
  ServicesFreshIcon,
  ServicesOrganicIcon,
  ServicesNaturalIcon,
];
const serviceBgs = [freshBg, organicBg, naturalBg];

const OurServicesTop = () => {
  const { t } = useLanguage();
  return (
    <section
      id="services"
      className=" py-12! md:py-20! mt-15 md:mt-20 lg:mt-24  z-20  relative scroll-mt-20 "
    >
      <Image src={bgImg} alt="" fill className="max-sm:hidden" />
      <Image src={bgImgSmallScreen} alt="" fill className=" sm:hidden" />

      <div className="custom-container relative z-10">
        <Title
          isCenter={true}
          heading={t.services.eyebrow}
          subHeading={t.services.title}
          isLeaf={false}
          subHeadingClassName="text-primary! font-bold"
        />
        <div className="sm:w-full grid w-full  mx-auto  grid-cols-2 gap-5  md:gap-3 md:grid-cols-3 ">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.title}
                className={`mt-5  md:bg-white md:pb-6 md:rounded-4xl md:shadow-sm ${index === 2 ? "max-md:col-start-2" : ""}`}
              >
                <div className=" h-40 sm:h-50 relative ">
                  <Image
                    src={serviceBgs[index % serviceBgs.length]}
                    alt=""
                    fill
                  />
                  <Icon className="max-sm:w-20 h-auto absolute bottom-0 left-1/2 -translate-x-1/2" />
                </div>
                <div
                  className="flex w-full items-center justify-center flex-col gap-1 pt-3
             z-10"
                >
                  <h3 className="font-bold text-primary text-base sm:text-base md:text-lg lg:text-xl text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-center font-light!">
                    {service.desc}
                  </p>
                  <div className="w-full flex justify-center mt-3">
                    <Link
                      href="/#contact"
                      aria-label={`${t.services.moreAbout} ${service.title}`}
                      className="custom-orange-arrow-btn"
                    >
                      <FaArrowRight className="mirror-rtl" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesTop;
