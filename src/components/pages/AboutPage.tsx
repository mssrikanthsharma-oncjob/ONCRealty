'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { about, mission, objectives } from '@/content/site';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="wrap narrow page-head">
        <h1>{t(about.heading)}</h1>
        <p className="lead">{t(about.nameStory)}</p>
      </div>

      <section className="section">
        <div className="wrap narrow">
          <h2>{t(mission.heading)}</h2>
          <p>{t(mission.body)}</p>

          <h2 style={{ marginTop: '2.2rem' }}>{t(objectives.heading)}</h2>
          <ul className="objectives-list">
            {objectives.items.map((item, i) => (
              <li key={i}>{t(item)}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: '2.2rem' }}>{t(about.trusteesHeading)}</h2>
          <p>{t(about.trusteesNote)}</p>

          <h2 style={{ marginTop: '2.2rem' }}>{t(about.transparencyHeading)}</h2>
          <p>{t(about.transparencyNote)}</p>
        </div>
      </section>
    </>
  );
}
