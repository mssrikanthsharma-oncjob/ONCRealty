'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { donate } from '@/content/site';

export default function DonatePage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="wrap page-head">
        <h1>{t(donate.heading)}</h1>
        <p className="lead">{t(donate.lead)}</p>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="donate-grid">
            <div className="donate-card">
              <h3>{t(donate.upiHeading)}</h3>
              <p>{t(donate.upiNote)}</p>
              {/* TODO: add the real UPI QR image at public/upi-qr.png and
                  uncomment: <img src="/upi-qr.png" alt="UPI QR code" width={220} /> */}
              <p>
                <span className="upi-id">{donate.upiId}</span>
              </p>
            </div>
            <div className="donate-card">
              <h3>{t(donate.bankHeading)}</h3>
              <table className="bank-table">
                <tbody>
                  <tr>
                    <td>A/c name</td>
                    <td>{donate.bank.accountName}</td>
                  </tr>
                  <tr>
                    <td>A/c number</td>
                    <td>{donate.bank.accountNumber}</td>
                  </tr>
                  <tr>
                    <td>IFSC</td>
                    <td>{donate.bank.ifsc}</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: '0.6rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                {t(donate.bank.bankBranch)}
              </p>
            </div>
          </div>
          <div className="note-box">{t(donate.taxNote)}</div>
        </div>
      </section>
    </>
  );
}
