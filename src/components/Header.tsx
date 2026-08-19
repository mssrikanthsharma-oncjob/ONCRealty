'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { siteName, tagline, nav } from '@/content/site';

const links = [
  { href: '/', label: nav.home },
  { href: '/about/', label: nav.about },
  { href: '/programs/', label: nav.programs },
  { href: '/gallery/', label: nav.gallery },
  { href: '/contact/', label: nav.contact },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-name">{t(siteName)}</span>
          <span className="brand-tag">{t(tagline)}</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : ''}>
              {t(link.label)}
            </Link>
          ))}
          <Link href="/donate/" className="donate-link">
            {t(nav.donate)}
          </Link>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
              EN
            </button>
            <button className={lang === 'kn' ? 'on' : ''} onClick={() => setLang('kn')} lang="kn">
              ಕನ್ನಡ
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
