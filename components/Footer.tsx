"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { socialMedia } from "@/data/social-media";
import { BrandLogo } from "./Header";

const socialColors: Record<string, string> = {
  Facebook: "text-white/80 hover:text-blue-400",
  Twitter: "text-white/80 hover:text-blue-300",
  Instagram: "text-white/80 hover:text-pink-400",
  LinkedIn: "text-white/80 hover:text-blue-300",
  YouTube: "text-white/80 hover:text-red-400",
};

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="mt-15 bg-green-900 text-white">
      <div className="custom-container grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link href="/#home" aria-label="Frutin — home" className="w-fit">
            <BrandLogo />
          </Link>
          <p className="text-sm leading-7 text-white/80">{t.footer.tagline}</p>
          <div className="flex items-center gap-3 text-xl">
            {socialMedia.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={`${socialColors[name] ?? "text-white/80 hover:text-white"} transition-colors duration-300`}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Site navigation (verified section anchors) */}
        <nav aria-label={t.footer.navLabel}>
          <h3 className="mb-4 text-base font-bold">{t.footer.linksTitle}</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            {t.nav.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-white/80 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact teaser: links to the real #contact section; social
            channels are the only configured contact details in the repo. */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold">{t.footer.contactTitle}</h3>
          <p className="text-sm leading-7 text-white/80">{t.footer.contactText}</p>
          <Link href="/#contact" className="custom-orange-btn w-fit normal-case">
            {t.footer.contactCta}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="custom-container flex items-center justify-center py-4 text-xs text-white/70 sm:text-sm">
          <p>
            © {year} <span lang="en">Frutin</span>. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
