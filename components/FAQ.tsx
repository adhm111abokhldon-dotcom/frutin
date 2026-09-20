"use client";
import { FAQData } from "@/data/FAQData";
import Title from "./Ui/Title";
import Image from "next/image";
import FAQBg from "@/assets/images/FAQ-bg.png";
import FAQBgSmall from "@/assets/images/FAQ-bg-small.jpeg";
import FAQImg from "@/assets/images/FAQ.png";
import { useState } from "react";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  return (
    <section>
      <div className="section-padding">
        <div className="custom-container gap-7 relative py-12 md:py-16 lg:py-20 grid-cols-1  grid sm:grid-cols-2">
          <Image src={FAQBg} alt="" className="max-md:hidden" fill />
          <Image src={FAQBgSmall} alt="" className="md:hidden" fill />
          <div className="relative z-10 flex flex-col gap-10 items-center ">
            <div className="max-sm:hidden">
              <Title
                heading="Looking For Answers?"
                subHeading="If You Have Any Questions? (FAQ)"
                subHeadingClassName="text-primary!"
                isCenter={false}
                isLeaf={false}
              />
            </div>
            <div className="sm:hidden">
              <Title
                heading="Looking For Answers?"
                subHeading="If You Have Any Questions? (FAQ)"
                subHeadingClassName="text-primary!"
                isCenter={true}
                isLeaf={false}
              />
            </div>
            <div className="relative">
              <Image src={FAQImg} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 relative z-20">
            {FAQData.map((faq, index) => (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen === index
                    ? "border-primary/40 bg-white shadow-sm"
                    : "border-black/10 bg-white/60 hover:border-primary/30"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    isOpen === index ? setIsOpen(null) : setIsOpen(index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <h4 className="text-sm font-bold text-primary sm:text-base md:text-lg">
                    {faq.question}
                  </h4>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                      isOpen === index
                        ? "rotate-45 border-primary bg-primary text-white"
                        : "border-primary/30 text-primary"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-[#5F6369] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
