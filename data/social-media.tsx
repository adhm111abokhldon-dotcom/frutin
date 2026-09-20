import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface SocialLink {
  name: string;
  href: string;
  Icon: IconType;
}

export const socialMedia: SocialLink[] = [
  { name: "Facebook", href: "https://www.facebook.com", Icon: FaFacebook },
  { name: "Twitter", href: "https://www.twitter.com", Icon: FaXTwitter },
  { name: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedin },
  { name: "YouTube", href: "https://www.youtube.com", Icon: FaYoutube },
];
