'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { footer, contact } from '@/content/site';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p style={{ margin: 0 }}>{t(footer.rights)}</p>
        <p style={{ margin: '0.3rem 0 0' }}>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </footer>
  );
}
