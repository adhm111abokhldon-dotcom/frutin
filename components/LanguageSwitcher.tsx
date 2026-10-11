"use client";

import { useLanguage } from "@/lib/i18n";

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useLanguage();

  const base =
    "rounded-full px-2.5 py-1 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer";
  const active = "bg-green-500 text-white shadow-sm";
  const inactive =
    "text-secondary-color hover:bg-green-50 hover:text-green-600";

  return (
    <div
      role="group"
      aria-label={t.switcher.label}
      className="flex items-center gap-0.5 rounded-full border border-black/10 bg-white p-0.5"
    >
      <button
        type="button"
        lang="en"
        aria-pressed={locale === "en"}
        title={t.switcher.switchToEnglish}
        aria-label={t.switcher.switchToEnglish}
        onClick={() => setLocale("en")}
        className={`${base} ${locale === "en" ? active : inactive}`}
      >
        EN
      </button>
      <button
        type="button"
        lang="ar"
        aria-pressed={locale === "ar"}
        title={t.switcher.switchToArabic}
        aria-label={t.switcher.switchToArabic}
        onClick={() => setLocale("ar")}
        className={`${base} ${locale === "ar" ? active : inactive}`}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
