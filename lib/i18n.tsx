"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en, type Dictionary } from "@/locales/en";
import { ar } from "@/locales/ar";

export type Locale = "en" | "ar";
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, ar };

const STORAGE_KEY = "frutin-locale";

interface LanguageContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with English ("en"/LTR) so server and client render the
  // same markup on first paint (no hydration mismatch). A stored preference
  // is applied in an effect right after mount.
  const [locale, setLocaleState] = useState<Locale>("en");

  // Apply a stored language preference once after mount. Client-only, so no
  // server/client mismatch. The set-state-in-effect lint rule is intentionally
  // bypassed here: this is the standard hydration-safe pattern for reading
  // browser storage (reading localStorage during render/initializer would
  // produce markup that differs from the server render).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if ((stored === "ar" || stored === "en") && stored !== locale) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(stored);
      }
      // First-time visitors stay on English (the default).
    } catch {
      // Browser storage unavailable: keep the English default.
    }
    // Run once on mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang>/<html dir>, metadata, and persistence in sync.
  // This runs only on the client, so there is no server/client mismatch.
  useEffect(() => {
    const dict = dictionaries[locale];
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.title = dict.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", dict.meta.description);
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Browser storage unavailable: language still works for the session.
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value: LanguageContextValue = {
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    t: dictionaries[locale],
    setLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
