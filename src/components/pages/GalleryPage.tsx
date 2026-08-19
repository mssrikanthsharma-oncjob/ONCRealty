'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { gallery } from '@/content/site';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="wrap page-head">
        <h1>{t(gallery.heading)}</h1>
        <p className="lead">{t(gallery.lead)}</p>
      </div>

      <section className="section">
        <div className="wrap">
          {/* Replace these placeholders with real photos: put images in
              public/gallery/ and render them here with <img>. */}
          <div className="gallery-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="gallery-placeholder" key={i}>
                {t(gallery.comingSoon)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
