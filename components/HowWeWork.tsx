import Title from "./Ui/Title";
import { HowWeWorkData } from "@/data/HowWeWorkData";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <section className="section-padding">
      <div className="custom-container">
        <Title
          isCenter={true}
          isLeaf={false}
          heading="How We Make Quality Foods"
          subHeading="How We Work It?"
          subHeadingClassName="text-primary! mb-10 sm:mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 ">
          {HowWeWorkData.map((service, index) => {
            const counter = index + 1;

            return (
              <div
                className="flex items-center justify-center flex-col gap-4"
                key={service.title}
              >
                <div className=" h-45 w-45 relative mb-6">
                  <div className=" rotate-45  rounded-4xl overflow-hidden">
                    <Image
                      src={service.img}
                      alt=""
                      className=" scale-110 -rotate-45 "
                    />
                  </div>
                  <div className="absolute z-20 -top-2 -left-3">
                    <service.icon className="w-18 h-18" />
                  </div>
                </div>

                <div className="flex items-center flex-col gap-4">
                  <h4 className="text-sm sm:text-base md:text-lg">
                    STEP{" "}
                    <span className="text-sm sm:text-base md:text-lg ms-0.5">
                      0{counter}
                    </span>
                  </h4>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                    {service.title}
                  </h4>
                  <p className="text-base  max-lg:max-w-80  max-lg:text-center text-[#5F6369]">
                    {service.desc}
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
