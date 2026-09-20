import Image from "next/image";
import coverImage from "@/assets/images/hero-bg-img.png";
import heroImage from "@/assets/images/hero-1.png";
import Title from "./Ui/Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import Arrow from "@/assets/icons/Arrow";
import HeroIcon from "@/assets/icons/HeroIcon";

const Hero = () => {
  return (
    <section className="relative  overflow-hidden w-full h-60 sm:h-70 md:h-80 lg:h-90  xl:h-100 bg-cover bg-center bg-no-repeat">
      <Image src={coverImage} alt="" fill />
      <div className="custom-container flex h-full relative z-20">
        {/* left side */}
        <div className="w-[50%] h-full flex flex-col justify-center">
          <Title
            isLeaf={true}
            isCenter={false}
            heading="100% Quality Foods"
            subHeading="Our Organic Vegetable"
            subHeadingClassName="mb-4 lg:mb-7 xl:mb-10 leading-6! lg:text-5xl! sm:leading-8! md:leading-12! lg:leading-15!"
          />
          <div className=" relative  w-fit">
            <button type="button" className="custom-green-btn group">
              get a quote{" "}
              <FaAngleDoubleRight className="group-hover:scale-[1.2] transition-transform duration-300" />
            </button>
            <div className="absolute  top-2.5 -right-25 sm:-right-32.5 md:-right-37.5 lg:-right-45">
              <Arrow className="w-25 h-6 sm:w-30 sm:h-8 md:w-35 md:h-10 lg:w-48 lg:h-11  xl:w-41.5 xl:h-12.75" />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-[50%] h-full flex z-20  items-center">
          <div className="">
            <Image
              src={heroImage}
              width={650}
              height={470.93}
              alt="Fresh organic fruits and vegetables"
              className="object-contain relative z-40 "
            />
            <div className="absolute z-30  bottom-0 -right-5 sm:right-0 ">
              <HeroIcon className="w-35 sm:w-40 md:w-45 lg:w-55 xl:w-70 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
