'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { nav, programs, volunteer, hero } from '@/content/site';

export default function ProgramsPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="wrap page-head">
        <h1>{t(nav.programs)}</h1>
        <p className="lead">{t(hero.lead)}</p>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="cards">
            {programs.map((program) => (
              <div className="card" key={program.slug}>
                <span className="emoji" aria-hidden="true">
                  {program.emoji}
                </span>
                <h3>{t(program.name)}</h3>
                <p>{t(program.summary)}</p>
              </div>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: '2rem', justifyContent: 'flex-start' }}>
            <Link href="/donate/" className="btn btn-primary">
              {t(hero.ctaDonate)}
            </Link>
            <Link href="/contact/" className="btn btn-secondary">
              {t(volunteer.cta)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
