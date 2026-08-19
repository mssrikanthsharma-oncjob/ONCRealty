// ---------------------------------------------------------------------------
// ALL site text lives in this one file, in English (en) and Kannada (kn).
// Items marked TODO are placeholders — replace them with the trust's real
// details (mission text from onctrust.in, programs, contact, bank details).
// ---------------------------------------------------------------------------

export type Lang = 'en' | 'kn';
export type L = Record<Lang, string>;

export const siteName: L = {
  en: 'O Nanna Chetana Charitable Trust',
  kn: 'ಓ ನನ್ನ ಚೇತನ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್',
};

export const siteShortName: L = { en: 'ONC Trust', kn: 'ಒಎನ್‌ಸಿ ಟ್ರಸ್ಟ್' };

// Inspired by Kuvempu's poem the trust is named after.
export const tagline: L = {
  en: 'Awakening the spirit of service',
  kn: 'ಸೇವಾ ಚೇತನವನ್ನು ಜಾಗೃತಗೊಳಿಸೋಣ',
};

export const nav = {
  home: { en: 'Home', kn: 'ಮುಖಪುಟ' } as L,
  about: { en: 'About', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' } as L,
  programs: { en: 'Programs', kn: 'ಕಾರ್ಯಕ್ರಮಗಳು' } as L,
  gallery: { en: 'Gallery', kn: 'ಗ್ಯಾಲರಿ' } as L,
  donate: { en: 'Donate', kn: 'ದೇಣಿಗೆ' } as L,
  contact: { en: 'Contact', kn: 'ಸಂಪರ್ಕ' } as L,
};

export const hero = {
  title: {
    en: 'Learning beyond books, for rural India',
    kn: 'ಗ್ರಾಮೀಣ ಭಾರತಕ್ಕಾಗಿ, ಪುಸ್ತಕದ ಆಚೆಗಿನ ಕಲಿಕೆ',
  } as L,
  lead: {
    en: 'O Nanna Chetana Charitable Trust helps children in rural India learn beyond books through gamified applied education, nurtures their talents and personality, and serves the community through care for the needy, health support and a greener earth.',
    kn: 'ಓ ನನ್ನ ಚೇತನ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್ ಗ್ರಾಮೀಣ ಭಾರತದ ಮಕ್ಕಳಿಗೆ ಆಟದ ಮೂಲಕ ಅನ್ವಯಿಕ ಶಿಕ್ಷಣ ನೀಡಿ ಪುಸ್ತಕದ ಆಚೆಗಿನ ಕಲಿಕೆಗೆ ದಾರಿ ಮಾಡುತ್ತದೆ; ಅವರ ಪ್ರತಿಭೆ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವವನ್ನು ಬೆಳೆಸುತ್ತದೆ; ಅಗತ್ಯವಿರುವವರ ಸೇವೆ, ಆರೋಗ್ಯ ನೆರವು ಮತ್ತು ಹಸಿರು ಭೂಮಿಗಾಗಿ ಶ್ರಮಿಸುತ್ತದೆ.',
  } as L,
  ctaDonate: { en: 'Donate', kn: 'ದೇಣಿಗೆ ನೀಡಿ' } as L,
  ctaPrograms: { en: 'See our work', kn: 'ನಮ್ಮ ಕೆಲಸ ನೋಡಿ' } as L,
};

export const mission = {
  heading: { en: 'Our mission', kn: 'ನಮ್ಮ ಧ್ಯೇಯ' } as L,
  body: {
    en: 'The trust takes its name from Kuvempu’s poem “O Nanna Chetana” — a call for the spirit to rise beyond boundaries. In that spirit, we work to educate children in rural India through applied, gamified learning that goes beyond books; to develop their personality through the six quotients (6Qs); to nurture their talents in sports, art, music and literature; and to serve the community — the needy, the sick, and the earth itself.',
    kn: 'ಕುವೆಂಪು ಅವರ “ಓ ನನ್ನ ಚೇತನ” ಕವನದಿಂದ ಸ್ಫೂರ್ತಿ ಪಡೆದ ನಮ್ಮ ಟ್ರಸ್ಟ್, ಗ್ರಾಮೀಣ ಭಾರತದ ಮಕ್ಕಳಿಗೆ ಆಟದ ಮೂಲಕ ಅನ್ವಯಿಕ ಶಿಕ್ಷಣ ನೀಡಿ ಪುಸ್ತಕದ ಆಚೆಗಿನ ಕಲಿಕೆಗೆ ದಾರಿ ಮಾಡುತ್ತದೆ; ಆರು ಗುಣಗಳ (6Q) ಮೂಲಕ ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ; ಕ್ರೀಡೆ, ಕಲೆ, ಸಂಗೀತ, ಸಾಹಿತ್ಯದ ಪ್ರತಿಭೆಗೆ ಪ್ರೋತ್ಸಾಹ; ಜೊತೆಗೆ ಅಗತ್ಯವಿರುವವರ, ರೋಗಿಗಳ ಮತ್ತು ಪರಿಸರದ ಸೇವೆ — ಇದೇ ನಮ್ಮ ಧ್ಯೇಯ.',
  } as L,
};

export const objectives = {
  heading: { en: 'Our objectives', kn: 'ನಮ್ಮ ಉದ್ದೇಶಗಳು' } as L,
  items: [
    {
      en: 'To educate students and children in rural India through physical and virtual gamified programs and seminars on applied education — so learning goes beyond books and develops genuine interest.',
      kn: 'ಗ್ರಾಮೀಣ ಭಾರತದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರತ್ಯಕ್ಷ ಮತ್ತು ಆನ್‌ಲೈನ್ ಆಟದ (ಗೇಮಿಫೈಡ್) ಕಾರ್ಯಕ್ರಮ ಹಾಗೂ ವಿಚಾರ ಸಂಕಿರಣಗಳ ಮೂಲಕ ಅನ್ವಯಿಕ ಶಿಕ್ಷಣ ನೀಡುವುದು — ಕಲಿಕೆ ಪುಸ್ತಕದ ಆಚೆಗೂ ಸಾಗಿ ನಿಜವಾದ ಆಸಕ್ತಿ ಬೆಳೆಯಲಿ.',
    },
    {
      en: 'To promote learning activities where children can relate what they study to the practical world — connecting the dots between lessons, real-world experience and their own interests.',
      kn: 'ಮಕ್ಕಳು ಕಲಿತದ್ದನ್ನು ನಿಜ ಜೀವನದ ಅನುಭವದೊಂದಿಗೆ ಜೋಡಿಸುವ ಕಲಿಕಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಉತ್ತೇಜಿಸಿ, ವಿವಿಧ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಬೆಳೆಸುವುದು.',
    },
    {
      en: 'To conduct personality development programs and seminars focused on the six quotients (6Qs) — Intelligence, Adversity, Physical, Emotional, Spiritual and Creative — helping children understand each quotient’s impact on daily life and build a strong personality.',
      kn: 'ಬುದ್ಧಿ, ಸಂಕಷ್ಟ ನಿರ್ವಹಣೆ, ದೈಹಿಕ, ಭಾವನಾತ್ಮಕ, ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸೃಜನಶೀಲ — ಈ ಆರು ಗುಣಗಳ (6Q) ಮೇಲೆ ಕೇಂದ್ರಿತ ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸಿ, ಸದೃಢ ವ್ಯಕ್ತಿತ್ವ ರೂಪಿಸುವುದು.',
    },
    {
      en: 'To identify children in rural India with talent in sports, art, music and literature, and motivate them with the right direction and support — building self-esteem and mental alertness while reducing stress and anxiety.',
      kn: 'ಗ್ರಾಮೀಣ ಭಾರತದಲ್ಲಿ ಕ್ರೀಡೆ, ಕಲೆ, ಸಂಗೀತ ಮತ್ತು ಸಾಹಿತ್ಯದಲ್ಲಿ ಪ್ರತಿಭೆ ಇರುವ ಮಕ್ಕಳನ್ನು ಗುರುತಿಸಿ, ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲದೊಂದಿಗೆ ಪ್ರೋತ್ಸಾಹಿಸುವುದು.',
    },
    {
      en: 'To instil cleanliness among children — of mind, body, home, neighbourhood, city and country — keeping them healthy and preserving the environment.',
      kn: 'ಮನಸ್ಸು, ದೇಹ, ಮನೆ, ಬಡಾವಣೆ, ನಗರ ಮತ್ತು ದೇಶದ ಸ್ವಚ್ಛತೆಯ ಅಭ್ಯಾಸವನ್ನು ಮಕ್ಕಳಲ್ಲಿ ಬೆಳೆಸುವುದು — ಆರೋಗ್ಯ ಮತ್ತು ಪರಿಸರ ರಕ್ಷಣೆಗಾಗಿ.',
    },
    {
      en: 'To save the earth by planting more trees that keep air, soil and water clean; to conserve birds and animals for a healthy ecological balance; and to encourage farmers to adopt innovative agricultural practices and technologies.',
      kn: 'ಗಾಳಿ, ಮಣ್ಣು, ನೀರನ್ನು ಶುದ್ಧವಾಗಿಡಲು ಹೆಚ್ಚು ಗಿಡ ನೆಡುವುದು; ಪರಿಸರ ಸಮತೋಲನಕ್ಕಾಗಿ ಪಕ್ಷಿ-ಪ್ರಾಣಿಗಳ ಸಂರಕ್ಷಣೆ; ರೈತರಿಗೆ ನವೀನ ಕೃಷಿ ಪದ್ಧತಿ ಮತ್ತು ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರೋತ್ಸಾಹ.',
    },
    {
      en: 'To help orphaned children and the aged through orphanages and old age homes; to organise blood and hair donation camps and create awareness; to distribute clothes, food and stationery to poor children; and to offer scholarships and monetary aid to needy students and scholars in India.',
      kn: 'ಅನಾಥ ಮಕ್ಕಳು ಮತ್ತು ವೃದ್ಧರಿಗೆ ಅನಾಥಾಶ್ರಮ, ವೃದ್ಧಾಶ್ರಮಗಳ ಮೂಲಕ ನೆರವು; ರಕ್ತದಾನ ಮತ್ತು ಕೇಶದಾನ ಶಿಬಿರ ಹಾಗೂ ಜಾಗೃತಿ; ಬಡ ಮಕ್ಕಳಿಗೆ ಬಟ್ಟೆ, ಆಹಾರ, ಲೇಖನ ಸಾಮಗ್ರಿ ವಿತರಣೆ; ಅಗತ್ಯವಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಧನಸಹಾಯ.',
    },
    {
      en: 'To guide people suffering from mental-health issues and addictions to rehabilitation care; to support visually and physically challenged individuals; to connect the bedridden and chronically ill poor to palliative care centres; and to work with other NGOs during pandemics to provide medical relief.',
      kn: 'ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಮಸ್ಯೆ ಮತ್ತು ವ್ಯಸನಗಳಿಂದ ಬಳಲುವವರಿಗೆ ಪುನರ್ವಸತಿ ಆರೈಕೆಗೆ ಮಾರ್ಗದರ್ಶನ; ದೃಷ್ಟಿ ಮತ್ತು ದೈಹಿಕ ವಿಕಲಚೇತನರಿಗೆ ಬೆಂಬಲ; ಹಾಸಿಗೆ ಹಿಡಿದ ಬಡ ರೋಗಿಗಳಿಗೆ ಪ್ಯಾಲಿಯೇಟಿವ್ ಆರೈಕೆ ಕೇಂದ್ರಗಳ ಸಂಪರ್ಕ; ಸಾಂಕ್ರಾಮಿಕ ಸಂದರ್ಭದಲ್ಲಿ ಇತರ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ ವೈದ್ಯಕೀಯ ನೆರವು.',
    },
    {
      en: 'To give relief to the poor and distressed during natural calamities in India; to establish institutions for religious, cultural and social advancement; and to provide donations or contributions to other charitable trusts in India.',
      kn: 'ಪ್ರಕೃತಿ ವಿಕೋಪದ ಸಂದರ್ಭದಲ್ಲಿ ಬಡವರಿಗೆ ಮತ್ತು ಸಂಕಷ್ಟದಲ್ಲಿರುವವರಿಗೆ ಪರಿಹಾರ; ಧಾರ್ಮಿಕ, ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಪ್ರಗತಿಗಾಗಿ ಸಂಸ್ಥೆಗಳ ಸ್ಥಾಪನೆ; ಭಾರತದ ಇತರ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್‌ಗಳಿಗೆ ದೇಣಿಗೆ.',
    },
  ] as L[],
};

export interface Program {
  slug: string;
  name: L;
  summary: L;
  emoji: string;
}

export const programs: Program[] = [
  {
    slug: 'gamified-learning',
    emoji: '🎲',
    name: { en: 'Gamified Applied Learning', kn: 'ಆಟದ ಮೂಲಕ ಅನ್ವಯಿಕ ಕಲಿಕೆ' },
    summary: {
      en: 'Physical and virtual gamified programs and seminars on applied education for rural students — connecting lessons to the practical world, so learning goes beyond books.',
      kn: 'ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರತ್ಯಕ್ಷ ಮತ್ತು ಆನ್‌ಲೈನ್ ಗೇಮಿಫೈಡ್ ಕಾರ್ಯಕ್ರಮಗಳು — ಪಾಠವನ್ನು ನಿಜ ಜೀವನದೊಂದಿಗೆ ಜೋಡಿಸಿ, ಪುಸ್ತಕದ ಆಚೆಗಿನ ಕಲಿಕೆ.',
    },
  },
  {
    slug: '6q-personality',
    emoji: '🧠',
    name: { en: '6Q Personality Development', kn: '6Q ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ' },
    summary: {
      en: 'Programs on the six quotients — Intelligence, Adversity, Physical, Emotional, Spiritual and Creative — so children understand each one’s impact and grow into strong personalities.',
      kn: 'ಬುದ್ಧಿ, ಸಂಕಷ್ಟ ನಿರ್ವಹಣೆ, ದೈಹಿಕ, ಭಾವನಾತ್ಮಕ, ಆಧ್ಯಾತ್ಮಿಕ, ಸೃಜನಶೀಲ — ಆರು ಗುಣಗಳ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಸದೃಢ ವ್ಯಕ್ತಿತ್ವ ನಿರ್ಮಾಣ.',
    },
  },
  {
    slug: 'rural-talent',
    emoji: '🏅',
    name: { en: 'Rural Talent Support', kn: 'ಗ್ರಾಮೀಣ ಪ್ರತಿಭೆಗೆ ಪ್ರೋತ್ಸಾಹ' },
    summary: {
      en: 'Identifying children talented in sports, art, music and literature, and motivating them with the right direction and support — building self-esteem and reducing stress.',
      kn: 'ಕ್ರೀಡೆ, ಕಲೆ, ಸಂಗೀತ, ಸಾಹಿತ್ಯದ ಪ್ರತಿಭಾವಂತ ಮಕ್ಕಳನ್ನು ಗುರುತಿಸಿ ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲ ನೀಡುವುದು.',
    },
  },
  {
    slug: 'clean-green',
    emoji: '🌳',
    name: { en: 'Cleanliness & Green Earth', kn: 'ಸ್ವಚ್ಛತೆ ಮತ್ತು ಹಸಿರು ಭೂಮಿ' },
    summary: {
      en: 'Cleanliness habits from mind to country; tree planting for clean air, soil and water; conservation of birds and animals; and innovative practices for farmers.',
      kn: 'ಮನಸ್ಸಿನಿಂದ ದೇಶದವರೆಗೆ ಸ್ವಚ್ಛತೆ; ಗಿಡ ನೆಡುವಿಕೆ; ಪಕ್ಷಿ-ಪ್ರಾಣಿ ಸಂರಕ್ಷಣೆ; ರೈತರಿಗೆ ನವೀನ ಕೃಷಿ ಪದ್ಧತಿಗಳ ಪ್ರೋತ್ಸಾಹ.',
    },
  },
  {
    slug: 'care-giving',
    emoji: '🤝',
    name: { en: 'Care & Giving', kn: 'ಆರೈಕೆ ಮತ್ತು ದಾನ' },
    summary: {
      en: 'Help for orphaned children and the aged; blood and hair donation camps; clothes, food and stationery for poor children; scholarships and monetary aid for needy students.',
      kn: 'ಅನಾಥ ಮಕ್ಕಳು ಮತ್ತು ವೃದ್ಧರಿಗೆ ನೆರವು; ರಕ್ತದಾನ-ಕೇಶದಾನ ಶಿಬಿರ; ಬಟ್ಟೆ, ಆಹಾರ, ಲೇಖನ ಸಾಮಗ್ರಿ ವಿತರಣೆ; ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಧನಸಹಾಯ.',
    },
  },
  {
    slug: 'health-relief',
    emoji: '🩺',
    name: { en: 'Health & Relief', kn: 'ಆರೋಗ್ಯ ಮತ್ತು ಪರಿಹಾರ' },
    summary: {
      en: 'Guidance to rehabilitation for mental health and addiction; support for the visually and physically challenged; palliative care connections; and relief during pandemics and natural calamities.',
      kn: 'ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮತ್ತು ವ್ಯಸನ ಮುಕ್ತಿಗೆ ಮಾರ್ಗದರ್ಶನ; ವಿಕಲಚೇತನರಿಗೆ ಬೆಂಬಲ; ಪ್ಯಾಲಿಯೇಟಿವ್ ಆರೈಕೆ ಸಂಪರ್ಕ; ವಿಪತ್ತಿನ ಸಂದರ್ಭದಲ್ಲಿ ಪರಿಹಾರ.',
    },
  },
];

export const donate = {
  heading: { en: 'Support our work', kn: 'ನಮ್ಮ ಸೇವೆಗೆ ಕೈಜೋಡಿಸಿ' } as L,
  lead: {
    en: 'Every rupee goes to the field — meals, school kits, medicines. Choose whichever way is easiest for you.',
    kn: 'ನೀಡುವ ಪ್ರತಿ ರೂಪಾಯಿಯೂ ನೇರವಾಗಿ ಸೇವೆಗೆ — ಊಟ, ಶಾಲಾ ಕಿಟ್, ಔಷಧಿಗಳಿಗೆ ಬಳಕೆಯಾಗುತ್ತದೆ.',
  } as L,
  upiHeading: { en: 'UPI', kn: 'ಯುಪಿಐ' } as L,
  // TODO: replace with the trust's real UPI ID and add public/upi-qr.png
  upiId: 'onctrust@upi',
  upiNote: {
    en: 'Scan the QR code from any UPI app (GPay, PhonePe, Paytm) or pay to the UPI ID below.',
    kn: 'ಯಾವುದೇ ಯುಪಿಐ ಆ್ಯಪ್‌ನಿಂದ (ಜಿಪೇ, ಫೋನ್‌ಪೇ, ಪೇಟಿಎಂ) ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕೆಳಗಿನ ಯುಪಿಐ ಐಡಿಗೆ ಪಾವತಿಸಿ.',
  } as L,
  bankHeading: { en: 'Bank transfer', kn: 'ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ' } as L,
  // TODO: replace with the trust's real bank account details
  bank: {
    accountName: 'O Nanna Chetana Charitable Trust',
    accountNumber: 'XXXXXXXXXXXX',
    ifsc: 'XXXX0XXXXXX',
    bankBranch: { en: 'Bank & branch: to be added', kn: 'ಬ್ಯಾಂಕ್ ಮತ್ತು ಶಾಖೆ: ಸೇರಿಸಲಾಗುವುದು' } as L,
  },
  taxNote: {
    // TODO: confirm 80G / 12A registration numbers and update this line
    en: 'After donating, please send a screenshot to our contact number or email so we can send you a receipt. Details of 80G tax exemption will be updated here.',
    kn: 'ದೇಣಿಗೆ ನೀಡಿದ ನಂತರ ರಶೀದಿಗಾಗಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ನಮ್ಮ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್‌ಗೆ ಕಳುಹಿಸಿ. 80ಜಿ ತೆರಿಗೆ ವಿನಾಯಿತಿ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ನವೀಕರಿಸಲಾಗುವುದು.',
  } as L,
};

export const volunteer = {
  heading: { en: 'Volunteer with us', kn: 'ಸ್ವಯಂಸೇವಕರಾಗಿ' } as L,
  body: {
    en: 'Time is as valuable as money. If you can run a gamified learning session, mentor children, join a tree-planting drive, or help at a donation camp, we would love to have you.',
    kn: 'ಹಣದಷ್ಟೇ ಸಮಯವೂ ಅಮೂಲ್ಯ. ಕಲಿಕಾ ಕಾರ್ಯಕ್ರಮ ನಡೆಸುವುದು, ಮಕ್ಕಳಿಗೆ ಮಾರ್ಗದರ್ಶನ, ಗಿಡ ನೆಡುವ ಅಭಿಯಾನ, ಅಥವಾ ದಾನ ಶಿಬಿರದಲ್ಲಿ ನೆರವು — ನಿಮ್ಮ ಸಹಭಾಗಿತ್ವಕ್ಕೆ ಸ್ವಾಗತ.',
  } as L,
  cta: { en: 'I want to volunteer', kn: 'ನಾನು ಸ್ವಯಂಸೇವಕನಾಗುತ್ತೇನೆ' } as L,
};

export const contact = {
  heading: { en: 'Contact us', kn: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' } as L,
  // TODO: replace with the trust's real contact details
  email: 'contact@onctrust.in',
  phone: '+91 XXXXX XXXXX',
  address: {
    en: 'Address to be added, Karnataka, India',
    kn: 'ವಿಳಾಸ ಸೇರಿಸಲಾಗುವುದು, ಕರ್ನಾಟಕ, ಭಾರತ',
  } as L,
  emailLabel: { en: 'Email', kn: 'ಇಮೇಲ್' } as L,
  phoneLabel: { en: 'Phone / WhatsApp', kn: 'ದೂರವಾಣಿ / ವಾಟ್ಸಾಪ್' } as L,
  addressLabel: { en: 'Address', kn: 'ವಿಳಾಸ' } as L,
};

export const gallery = {
  heading: { en: 'Gallery', kn: 'ಗ್ಯಾಲರಿ' } as L,
  lead: {
    en: 'Moments from our activities. Photos will be added here as our work is documented.',
    kn: 'ನಮ್ಮ ಚಟುವಟಿಕೆಗಳ ಕ್ಷಣಗಳು. ಕಾರ್ಯಕ್ರಮಗಳ ಫೋಟೋಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುವುದು.',
  } as L,
  comingSoon: { en: 'Photos coming soon', kn: 'ಫೋಟೋಗಳು ಶೀಘ್ರದಲ್ಲಿ' } as L,
};

export const about = {
  heading: { en: 'About the trust', kn: 'ಟ್ರಸ್ಟ್ ಬಗ್ಗೆ' } as L,
  nameStory: {
    en: '“O nanna chetana, aagu nee aniketana” — O my spirit, become boundless. Kuvempu’s words ask the spirit to rise beyond every boundary. Our trust was founded in that spirit: service that does not stop at the boundaries of caste, creed, religion or language.',
    kn: '“ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ” — ಕುವೆಂಪು ಅವರ ಈ ಸಾಲುಗಳು ಎಲ್ಲ ಎಲ್ಲೆಗಳನ್ನೂ ಮೀರಿ ಬೆಳೆಯಲು ಚೇತನಕ್ಕೆ ಕರೆ ನೀಡುತ್ತವೆ. ಅದೇ ಸ್ಫೂರ್ತಿಯಲ್ಲಿ — ಜಾತಿ, ಮತ, ಧರ್ಮ, ಭಾಷೆಯ ಎಲ್ಲೆಗಳಿಲ್ಲದ ಸೇವೆಗಾಗಿ — ನಮ್ಮ ಟ್ರಸ್ಟ್ ಸ್ಥಾಪನೆಯಾಗಿದೆ.',
  } as L,
  trusteesHeading: { en: 'Trustees', kn: 'ಟ್ರಸ್ಟಿಗಳು' } as L,
  trusteesNote: {
    // TODO: add trustee names and short profiles
    en: 'Trustee profiles will be added here.',
    kn: 'ಟ್ರಸ್ಟಿಗಳ ಪರಿಚಯವನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುವುದು.',
  } as L,
  transparencyHeading: { en: 'Transparency', kn: 'ಪಾರದರ್ಶಕತೆ' } as L,
  transparencyNote: {
    // TODO: add registration number, 12A/80G status, annual reports
    en: 'Registration details and annual reports will be published on this page.',
    kn: 'ನೋಂದಣಿ ವಿವರಗಳು ಮತ್ತು ವಾರ್ಷಿಕ ವರದಿಗಳನ್ನು ಈ ಪುಟದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುವುದು.',
  } as L,
};

export const footer = {
  rights: {
    en: '© 2026 O Nanna Chetana Charitable Trust. All rights reserved.',
    kn: '© 2026 ಓ ನನ್ನ ಚೇತನ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  } as L,
};
