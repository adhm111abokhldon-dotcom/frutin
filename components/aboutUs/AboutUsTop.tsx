import aboutUsImg from "@/assets/images/about-us.png";
import Image from "next/image";
import Title from "../Ui/Title";
import Check from "@/assets/icons/Check";
import { FaAngleDoubleRight } from "react-icons/fa";

const aboutUsData = [
  "100% Organic Products",
  "Always Fresh & Natural Foods",
  "Environment Benefits",
  "No Synthetic Chemicals",
  "Best Prices",
];
const AboutUsTop = () => {
  return (
    <section className="w-full section-padding">
      <div className="custom-container flex  gap-6">
        {/* left side */}
        <div className="w-[40%] max-sm:hidden flex items-center">
          <Image src={aboutUsImg} alt="Food image" />
        </div>
        {/* right side */}
        <div className="flex flex-col sm:w-[60%]  gap-5 md:gap-7 lg:gap-9">
          {/* desktop title */}
          <div className="max-sm:hidden">
            <Title
              isCenter={false}
              heading="About Us company"
              subHeading="Organic Integrity Durable Impact Frutin’s Story"
              isLeaf={false}
              subHeadingClassName="text-primary!   leading-10! xl:text-4xl!"
            />
          </div>
          {/* mobile title */}
          <div className="sm:hidden">
            <Title
              isCenter={true}
              heading="About Us company"
              subHeading="Organic Integrity Durable Impact Frutin’s Story"
              isLeaf={false}
              subHeadingClassName="text-primary!   "
            />
          </div>
          <p className="text-sm md:text-base text-[#5F6369]">
            Some studies suggest that organic foods may have higher levels of
            certain nutrients and antioxidants compared to conventionally grown
            foods. However, this can vary depending on factors like soil quality
            and growing conditions.
          </p>
          <div className="grid-cols-2 sm:grid-cols-1 grid max-[440px]:grid-cols-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-5 ">
              {aboutUsData.map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <Check className="w-7.5 h-7" />
                  <h4 className="text-sm font-bold">{text}</h4>
                </div>
              ))}
            </div>
            <div className=" flex w-full max-[440px]:hidden sm:hidden justify-center items-center ">
              <Image
                src={aboutUsImg}
                alt="Food image"
                width={140}
                height={140}
                className="object-cover "
              />
            </div>
          </div>

          <div className=" w-fit">
            <button
              type="button"
              className="custom-green-btn px-4! py-3! group"
            >
              discover more{" "}
              <FaAngleDoubleRight className="group-hover:scale-[1.2] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTop;
