"use client";
import Link from "next/link";
import { socialMedia } from "@/data/social-media";
import { useLanguage } from "@/lib/i18n";

const socialHovers: Record<string, string> = {
  Facebook: "hover:text-blue-500",
  Twitter: "hover:text-blue-400",
  Instagram: "hover:text-pink-500",
  LinkedIn: "hover:text-blue-700",
  YouTube: "hover:text-red-600",
};

const TopBar = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-green-500 text-white py-2">
      <div className="custom-container sm:flex sm:justify-between items-center">
        <div className=" items-center gap-4 hidden xl:flex">
          {t.topBar.shippingNote}
        </div>
        <div className="flex sm:justify-between max-sm:justify-center max-xl:w-full items-center gap-4">
          <div className="max-sm:text-sm max-sm:text-center max-sm:w-full">
            {t.topBar.shippingNote}{" "}
            <span className="ps-2 max-lg:hidden" aria-hidden="true">
              |
            </span>
          </div>
          <div className="flex  items-center gap-4 max-sm:hidden">
            {socialMedia.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={`text-white ${socialHovers[name]} transition-colors duration-300`}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
