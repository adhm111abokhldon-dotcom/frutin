"use client";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
// material ui imports
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { socialMedia } from "@/data/social-media";
import { useLanguage } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export const BrandLogo = ({
  className = "text-2xl",
}: {
  className?: string;
}) => {
  // Wordmark stays in the Latin script in both languages (no Arabic glyphs
  // in Lobster): identical font, size, and color, so the switch never
  // changes the logo's visual identity.
  const { t } = useLanguage();
  return (
    <div className={`title-font ${className}`} lang="en" dir="ltr">
      {t.header.brand}
    </div>
  );
};

const socialColors: Record<string, string> = {
  Facebook: "text-blue-500",
  Twitter: "text-blue-400",
  Instagram: "text-pink-500",
  LinkedIn: "text-blue-700",
  YouTube: "text-red-600",
};

const Header = () => {
  const { t, dir } = useLanguage();
  const [open, setOpen] = useState(false);

  // Close the drawer on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="custom-container flex justify-between items-center gap-3 py-4">
      <Link href="/#home" aria-label="Frutin — home">
        <BrandLogo />
      </Link>

      {/* desktop */}
      <nav aria-label="Primary" className="max-md:hidden">
        <ul className="flex gap-4">
          {t.nav.map((link) => (
            <li
              key={link.id}
              className="text-secondary-color hover:underline  md:text-lg xl:text-xl transition-all duration-300"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* mobile */}

      <Drawer
        anchor={dir === "rtl" ? "left" : "right"}
        className="h-screen!"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: false }}
        slotProps={{
          backdrop: { invisible: false },
        }}
      >
        <div className="w-70 max-h-screen! relative">
          <button
            type="button"
            aria-label={t.header.closeMenu}
            onClick={() => setOpen(false)}
            className="absolute top-3 z-50 cursor-pointer start-auto end-2"
          >
            <IoCloseSharp className="text-3xl text-red-500" />
          </button>
          <div
            className="title-font text-3xl text-center py-4"
            lang="en"
            dir="ltr"
          >
            Frutin
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-2 mb-5">
            {t.nav.map((link) => (
              <div
                key={link.id}
                className="bg-gray-100 hover:bg-gray-200 ps-4 py-3 flex items-center"
              >
                <Link
                  className="w-full h-full"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <Divider />

          {/* social media */}
          <div className="flex items-center mt-14 sm:mt-12 gap-4 text-2xl w-full justify-center ">
            {socialMedia.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={socialColors[name]}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </Drawer>

      {/* language switcher */}
      <div className="hidden md:flex items-center gap-2">
        <div className="ms-2">
          <LanguageSwitcher />
        </div>
      </div>
      {/* menu*/}

      <div className="flex items-center gap-2 md:hidden">
        <LanguageSwitcher />
        <button
          type="button"
          aria-label={t.header.openMenu}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <MdMenu className="text-3xl text-secondary-color" />
        </button>
      </div>
    </div>
  );
};

export default Header;
