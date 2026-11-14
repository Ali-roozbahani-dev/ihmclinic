'use client';

import { useState } from 'react';
import CharityIntro from './components/CharityIntro';
import CharityNoticeModal from './components/CharityNoticeModal';
import DonationForm from './components/DonationForm';
import HeroSection from '@/shared/components/ui/HeroSection';

const NOTICE_MESSAGE = 'برای هماهنگی کمک و دریافت اطلاعات پرداخت، با پذیرش درمانگاه تماس بگیرید.';

export default function CharityPage() {
  const [noticeOpen, setNoticeOpen] = useState(false);

  return (
    <div className="inner-page charity-page">
      <HeroSection
      src="/images/shared/hero-wave-mint.png" 
      ariaLabel="کمک به خیریه"
      />

      <section className="inner-content final-directory">
        <div className="charity-panel">
          <CharityIntro />
          <DonationForm onSubmitted={() => setNoticeOpen(true)} />
        </div>

        {noticeOpen && <CharityNoticeModal message={NOTICE_MESSAGE} onClose={() => setNoticeOpen(false)} />}
      </section>
    </div>
  );
}
