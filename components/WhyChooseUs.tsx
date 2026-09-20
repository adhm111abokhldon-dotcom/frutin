import WhyChooseUsBg from "@/assets/images/why-choose-us-bg.png";
import WhyChooseUsBgSmall from "@/assets/images/why-choose-us-bg-small.jpeg";
import Image from "next/image";
import Title from "./Ui/Title";
import { WhyChooseUsData } from "@/data/WhyChooseUsData";
import WhyChooseUsImg from "@/assets/images/why-choose-us.png";
const WhyChooseUs = () => {
  return (
    <section className="section-padding">
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
            heading="Why Choose Us"
            subHeading="Savor The Purity, Taste The Difference!"
            subHeadingClassName="mb-10 sm:mb-8"
            isCenter={true}
            isLeaf={false}
          />
        </div>
        {/* desktop */}
        <div className="grid max-md:hidden  grid-cols-3 gap-8 relative z-20">
          {/* left side */}
          <div className="flex flex-col gap-10">
            {WhyChooseUsData.slice(0, 3).map((service) => (
              <div className="flex items-center gap-4" key={service.title}>
                <service.icon className="w-12.5 h-12.5" />

                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-white">
                    {service.title}
                  </h4>
                  <p className="text-base text-[#BDBDBD]">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* middle side */}
          <div className="h-full flex items-center justify-center">
            <Image src={WhyChooseUsImg} alt="" />
          </div>
          {/* right side */}{" "}
          <div className="flex flex-col gap-10">
            {WhyChooseUsData.slice(3).map((service) => (
              <div className="flex items-center gap-4" key={service.title}>
                <service.icon className="w-12.5 h-12.5" />

                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-white">
                    {service.title}
                  </h4>
                  <p className="text-base text-[#BDBDBD]">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* mobile */}
        <div className="grid max-sm:ps-4  md:hidden  justify-center  gap-8 relative z-20">
          <div className="flex flex-col gap-10">
            {WhyChooseUsData.map((service) => (
              <div className="flex items-center gap-3" key={service.title}>
                <service.icon className="w-12.5 h-12.5" />
                <div className="flex flex-col gap-2">
                  <h4 className="max-[400px]:text-sm text-base font-bold text-white">
                    {service.title}
                  </h4>
                  <p className="max-[400px]:text-sm text-[#5F6369]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
