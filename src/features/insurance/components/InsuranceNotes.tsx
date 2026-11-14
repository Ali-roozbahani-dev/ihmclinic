import Link from 'next/link';
import { FileText, PhoneCall } from 'lucide-react';

/** کارت‌های پایین صفحه: راهنمای تماس و مدارک موردنیاز. */
export default function InsuranceNotes() {
  return (
    <div className="insurance-notes">
      <section>
        <PhoneCall size={36} />

        <div>
          <p>
            برای اطمینان از پوشش خدمات با ما
            <br />
            تماس بگیرید.
          </p>

          <Link className="insurance-primary" href="/contact">
            تماس با ما
          </Link>
        </div>
      </section>

      <section>
        <FileText size={36} />

        <div>
          <h2>مدارک مورد نیاز</h2>

          <ul>
            <li>کارت شناسایی</li>
            <li>کارت بیمه</li>
            <li>در صورت نیاز، معرفی نامه یا مجوز مربوطه</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
