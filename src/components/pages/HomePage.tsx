'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { hero, mission, programs, volunteer, nav } from '@/content/site';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="kn-line" lang="kn">
            ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ
          </div>
          <h1>{t(hero.title)}</h1>
          <p className="lead">{t(hero.lead)}</p>
          <div className="cta-row">
            <Link href="/donate/" className="btn btn-primary">
              {t(hero.ctaDonate)}
            </Link>
            <Link href="/programs/" className="btn btn-secondary">
              {t(hero.ctaPrograms)}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>{t(mission.heading)}</h2>
          <p>{t(mission.body)}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2>{t(nav.programs)}</h2>
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
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>{t(volunteer.heading)}</h2>
          <p>{t(volunteer.body)}</p>
          <Link href="/contact/" className="btn btn-primary">
            {t(volunteer.cta)}
          </Link>
        </div>
      </section>
    </>
  );
}
