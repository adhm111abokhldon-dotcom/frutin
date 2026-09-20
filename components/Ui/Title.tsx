import Image from "next/image";
import leafIcon from "@/assets/icons/leaf.svg";
import leafImg from "@/assets/images/leaf.png";

const Title = ({
  isCenter,
  heading,
  subHeading,
  isLeaf,
  subHeadingClassName,
}: {
  isCenter: boolean;
  heading: string;
  subHeading: string;
  isLeaf: boolean;
  subHeadingClassName: string;
}) => {
  return (
    <div className={` ${isCenter ? "custom-container" : ""}`}>
      <div
        className={` flex  items-center gap-2 sm:gap-4.5 mb-3 md:mb-5.5 ${isCenter ? "justify-center" : "text-left"}`}
      >
        <Image src={leafIcon} alt="" aria-hidden />
        <h4
          className={` text-orange-500 text-xs! sm:text-base! md:text-lg! lg:text-xl! font-lobster! font-bold `}
        >
          {heading}
        </h4>
      </div>
      <p
        className={`${subHeadingClassName} max-w-115 text-xl sm:text-2xl md:text-3xl lg:text-4xl!  font-lexend!
         text-white leading-6 sm:leading-10 lg:leading-13 font-bold
          ${isCenter ? "text-center mx-auto" : "text-left"}`}
      >
        {subHeading}{" "}
        {isLeaf && (
          <Image
            src={leafImg}
            alt=""
            aria-hidden
            className="w-8 md:w-10 lg:w-13 xl:w-15 inline"
          />
        )}
      </p>
    </div>
  );
};

export default Title;
