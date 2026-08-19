'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { contact, volunteer } from '@/content/site';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="wrap narrow page-head">
        <h1>{t(contact.heading)}</h1>
      </div>

      <section className="section">
        <div className="wrap narrow">
          <ul className="contact-list">
            <li>
              <span className="label">{t(contact.emailLabel)}</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="label">{t(contact.phoneLabel)}</span>
              {contact.phone}
            </li>
            <li>
              <span className="label">{t(contact.addressLabel)}</span>
              {t(contact.address)}
            </li>
          </ul>

          <h2 style={{ marginTop: '2rem' }}>{t(volunteer.heading)}</h2>
          <p>{t(volunteer.body)}</p>
          <a
            className="btn btn-primary"
            href={`mailto:${contact.email}?subject=Volunteering%20with%20ONC%20Trust`}
          >
            {t(volunteer.cta)}
          </a>
        </div>
      </section>
    </>
  );
}
