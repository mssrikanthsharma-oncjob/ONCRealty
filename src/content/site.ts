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
    en: 'Small acts of care, done every day',
    kn: 'ಪ್ರತಿದಿನವೂ ಒಂದೊಂದು ಸಣ್ಣ ಸೇವೆ',
  } as L,
  // TODO: replace with the trust's own mission statement from onctrust.in
  lead: {
    en: 'O Nanna Chetana Charitable Trust works with our community to support education, food security, health and dignity for those who need it most.',
    kn: 'ಓ ನನ್ನ ಚೇತನ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್ ಶಿಕ್ಷಣ, ಆಹಾರ, ಆರೋಗ್ಯ ಮತ್ತು ಘನತೆಯ ಬದುಕಿಗಾಗಿ ಅಗತ್ಯವಿರುವವರೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.',
  } as L,
  ctaDonate: { en: 'Donate', kn: 'ದೇಣಿಗೆ ನೀಡಿ' } as L,
  ctaPrograms: { en: 'See our work', kn: 'ನಮ್ಮ ಕೆಲಸ ನೋಡಿ' } as L,
};

export const mission = {
  heading: { en: 'Our mission', kn: 'ನಮ್ಮ ಧ್ಯೇಯ' } as L,
  // TODO: replace with the exact mission text from onctrust.in
  body: {
    en: 'The trust takes its name from Kuvempu’s poem “O Nanna Chetana” — a call for the spirit to rise beyond boundaries. In that spirit, we serve without distinction of caste, creed or religion, and work so that every person in our community can live with education, health and dignity.',
    kn: 'ಕುವೆಂಪು ಅವರ “ಓ ನನ್ನ ಚೇತನ” ಕವನದಿಂದ ಸ್ಫೂರ್ತಿ ಪಡೆದ ನಮ್ಮ ಟ್ರಸ್ಟ್, ಜಾತಿ, ಮತ, ಧರ್ಮದ ಭೇದವಿಲ್ಲದೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ. ನಮ್ಮ ಸಮುದಾಯದ ಪ್ರತಿಯೊಬ್ಬರೂ ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಮತ್ತು ಘನತೆಯಿಂದ ಬಾಳಬೇಕೆಂಬುದೇ ನಮ್ಮ ಗುರಿ.',
  } as L,
};

export const objectives = {
  heading: { en: 'Our objectives', kn: 'ನಮ್ಮ ಉದ್ದೇಶಗಳು' } as L,
  // TODO: replace with the actual objectives from the trust deed / onctrust.in
  items: [
    {
      en: 'Support the education of children from underprivileged families',
      kn: 'ಬಡ ಕುಟುಂಬಗಳ ಮಕ್ಕಳ ಶಿಕ್ಷಣಕ್ಕೆ ನೆರವು',
    },
    {
      en: 'Provide food and essential supplies to those in need',
      kn: 'ಅಗತ್ಯವಿರುವವರಿಗೆ ಆಹಾರ ಮತ್ತು ಅಗತ್ಯ ವಸ್ತುಗಳ ವಿತರಣೆ',
    },
    {
      en: 'Organise free health camps and health awareness drives',
      kn: 'ಉಚಿತ ಆರೋಗ್ಯ ಶಿಬಿರ ಮತ್ತು ಆರೋಗ್ಯ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು',
    },
    {
      en: 'Care for the elderly and support community welfare',
      kn: 'ವೃದ್ಧರ ಸೇವೆ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯಗಳು',
    },
  ] as L[],
};

export interface Program {
  slug: string;
  name: L;
  summary: L;
  emoji: string;
}

// TODO: replace with the trust's real programs
export const programs: Program[] = [
  {
    slug: 'education',
    emoji: '📚',
    name: { en: 'Education Support', kn: 'ವಿದ್ಯಾ ಸಹಾಯ' },
    summary: {
      en: 'School kits, fees and learning support for children whose families cannot afford them.',
      kn: 'ಶಾಲಾ ಕಿಟ್, ಶುಲ್ಕ ಮತ್ತು ಕಲಿಕೆಯ ನೆರವು — ಆರ್ಥಿಕವಾಗಿ ಹಿಂದುಳಿದ ಕುಟುಂಬಗಳ ಮಕ್ಕಳಿಗೆ.',
    },
  },
  {
    slug: 'anna-daana',
    emoji: '🍛',
    name: { en: 'Anna Daana — Food Distribution', kn: 'ಅನ್ನ ದಾನ' },
    summary: {
      en: 'Cooked meals and grocery kits for families, daily-wage workers and people on the street.',
      kn: 'ಕುಟುಂಬಗಳಿಗೆ, ದಿನಗೂಲಿ ಕಾರ್ಮಿಕರಿಗೆ ಮತ್ತು ನಿರಾಶ್ರಿತರಿಗೆ ಊಟ ಮತ್ತು ದಿನಸಿ ಕಿಟ್ ವಿತರಣೆ.',
    },
  },
  {
    slug: 'health',
    emoji: '🩺',
    name: { en: 'Health Camps', kn: 'ಆರೋಗ್ಯ ಶಿಬಿರ' },
    summary: {
      en: 'Free check-up camps with local doctors, plus help reaching hospitals when treatment is needed.',
      kn: 'ಸ್ಥಳೀಯ ವೈದ್ಯರೊಂದಿಗೆ ಉಚಿತ ತಪಾಸಣಾ ಶಿಬಿರಗಳು ಮತ್ತು ಚಿಕಿತ್ಸೆಗೆ ನೆರವು.',
    },
  },
  {
    slug: 'community',
    emoji: '🤝',
    name: { en: 'Elder & Community Care', kn: 'ವೃದ್ಧರ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆ' },
    summary: {
      en: 'Support for elders living alone and a helping hand wherever the community needs one.',
      kn: 'ಒಂಟಿಯಾಗಿರುವ ವೃದ್ಧರಿಗೆ ಆಸರೆ ಮತ್ತು ಸಮುದಾಯಕ್ಕೆ ಬೇಕಾದಲ್ಲಿ ಸಹಾಯಹಸ್ತ.',
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
    en: 'Time is as valuable as money. If you can join a food distribution, teach children for an hour, or help at a health camp, we would love to have you.',
    kn: 'ಹಣದಷ್ಟೇ ಸಮಯವೂ ಅಮೂಲ್ಯ. ಅನ್ನ ವಿತರಣೆ, ಮಕ್ಕಳಿಗೆ ಪಾಠ, ಅಥವಾ ಆರೋಗ್ಯ ಶಿಬಿರದಲ್ಲಿ ನೆರವು — ನಿಮ್ಮ ಸಹಭಾಗಿತ್ವಕ್ಕೆ ಸ್ವಾಗತ.',
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
