'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Lang, L } from '@/content/site';

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: L) => string;
}

const LanguageContext = createContext<LanguageValue>({
  lang: 'en',
  setLang: () => {},
  t: (text) => text.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem('onc-lang');
    if (saved === 'kn' || saved === 'en') setLangState(saved);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem('onc-lang', next);
    document.documentElement.lang = next;
  };

  const t = (text: L) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
