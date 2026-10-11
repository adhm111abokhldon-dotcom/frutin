"use client";
import aboutUsImg from "@/assets/images/about-us.png";
import Image from "next/image";
import Link from "next/link";
import Title from "../Ui/Title";
import Check from "@/assets/icons/Check";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n";

const AboutUsTop = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="w-full section-padding scroll-mt-20">
      <div className="custom-container flex  gap-6">
        {/* left side */}
        <div className="w-[40%] max-sm:hidden flex items-center">
          <Image src={aboutUsImg} alt={t.about.imageAlt} />
        </div>
        {/* right side */}
        <div className="flex flex-col sm:w-[60%]  gap-5 md:gap-7 lg:gap-9">
          {/* desktop title */}
          <div className="max-sm:hidden">
            <Title
              isCenter={false}
              heading={t.about.eyebrow}
              subHeading={t.about.title}
              isLeaf={false}
              subHeadingClassName="text-primary!   leading-10! xl:text-4xl!"
            />
          </div>
          {/* mobile title */}
          <div className="sm:hidden">
            <Title
              isCenter={true}
              heading={t.about.eyebrow}
              subHeading={t.about.title}
              isLeaf={false}
              subHeadingClassName="text-primary!   "
            />
          </div>
          <p className="text-sm md:text-base text-[#5F6369]">
            {t.about.description}
          </p>
          <div className="grid-cols-2 sm:grid-cols-1 grid max-[440px]:grid-cols-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-5 ">
              {t.about.checklist.map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <Check className="w-7.5 h-7 shrink-0" />
                  <h4 className="text-sm font-bold">{text}</h4>
                </div>
              ))}
            </div>
            <div className=" flex w-full max-[440px]:hidden sm:hidden justify-center items-center ">
              <Image
                src={aboutUsImg}
                alt={t.about.imageAlt}
                width={140}
                height={140}
                className="object-cover "
              />
            </div>
          </div>

          <div className=" w-fit">
            <Link href="/#services" className="custom-green-btn px-4! py-3! group">
              {t.about.cta}{" "}
              <FaAngleDoubleRight className="mirror-rtl group-hover:scale-[1.2] rtl:group-hover:-scale-x-[1.2] transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTop;
