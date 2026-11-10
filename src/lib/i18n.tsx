import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";
const KEY = "meu-lang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "en") setLangState("en");
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(KEY, l);
  }, []);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext).lang;
}

export function useSetLang() {
  return useContext(LangContext).setLang;
}

/** Pick the string for the active language. */
export function useT() {
  const lang = useLang();
  return <T,>(es: T, en: T) => (lang === "en" ? en : es);
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const lang = useLang();
  const setLang = useSetLang();
  const btn = (l: Lang, label: string, full: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={full}
      lang={l}
      className={`px-2 py-1 font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 ${
        lang === l ? "text-on-surface font-semibold" : "text-on-surface-variant hover:text-on-surface"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label={lang === "en" ? "Language" : "Idioma"} className={`flex items-center rounded border border-outline-variant ${className}`}>
      {btn("es", "ES", "Español")}
      <span className="text-outline-variant" aria-hidden>|</span>
      {btn("en", "EN", "English")}
    </div>
  );
}
