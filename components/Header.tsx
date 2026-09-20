"use client";
import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
// material ui imports
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { socialMedia } from "@/data/social-media";
const links = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Pages", href: "/pages" },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About Us",
    href: "/about-us",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

const socialColors: Record<string, string> = {
  Facebook: "text-blue-500",
  Twitter: "text-blue-400",
  Instagram: "text-pink-500",
  LinkedIn: "text-blue-700",
  YouTube: "text-red-600",
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <div className="w-70 max-h-screen! relative" onClick={toggleDrawer(false)}>
      <button
        type="button"
        aria-label="Close menu"
        className="absolute top-3 z-50 right-2 cursor-pointer"
      >
        <IoCloseSharp className="text-3xl text-red-500" />
      </button>
      <div className="title-font text-3xl text-center py-4">Frutin</div>

      <div className="flex flex-col gap-2 mb-5">
        {links.map((link) => (
          <div
            key={link.name}
            className="bg-gray-100 hover:bg-gray-200 ps-4 py-3 flex items-center"
          >
            <Link className="w-full h-full" href={link.href}>
              {link.name}
            </Link>
          </div>
        ))}
      </div>

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
  );

  return (
    <div className="custom-container flex justify-between items-center py-4">
      <div className="title-font text-2xl">Frutin</div>

      {/* desktop */}
      <div className="max-md:hidden">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li
              key={link.name}
              className="text-secondary-color hover:underline  md:text-lg xl:text-xl transition-all duration-300"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}

      <Drawer
        anchor="right"
        className="h-screen!"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>

      {/* cart and search btn */}
      <div className="hidden md:flex items-center gap-2">
        <button type="button" aria-label="Search" className="cursor-pointer">
          <IoMdSearch className="text-3xl text-secondary-color" />
        </button>
        <div className="flex justify-center items-center relative">
          <button type="button" aria-label="Cart" className="cursor-pointer">
            <IoMdCart className="text-3xl text-secondary-color" />
          </button>
          <div className=" w-5 h-5 p-1.5 bg-orange-500 absolute -top-2 -right-2.5  rounded-[50%] text-white text-[12px] flex justify-center items-center">
            0
          </div>
        </div>
      </div>
      {/* menu*/}

      <button
        type="button"
        aria-label="Open menu"
        className="md:hidden cursor-pointer"
        onClick={toggleDrawer(true)}
      >
        <MdMenu className="text-3xl text-secondary-color" />
      </button>
    </div>
  );
};

export default Header;
