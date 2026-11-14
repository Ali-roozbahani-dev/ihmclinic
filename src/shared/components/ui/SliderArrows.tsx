interface SliderArrowsProps {
  /** solid: دایره سبز پر‌شده؛ ghost: فقط فلش، بدون پس‌زمینه. */
  variant?: 'solid' | 'ghost';
  onPrevious?: () => void;
  onNext?: () => void;
}

const arrowBase =
  'absolute top-1/2 z-4 grid size-[30px] -translate-y-1/2 cursor-pointer place-items-center rounded-full p-0 text-[26px] leading-5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#198f78] disabled:cursor-default disabled:opacity-35';

const arrowVariants = {
  solid: 'bg-[#075f58] text-white',
  ghost: 'bg-transparent text-[#225956]',
};

export default function SliderArrows({ variant = 'solid', onPrevious, onNext }: SliderArrowsProps) {
  const arrowClass = `${arrowBase} ${arrowVariants[variant]}`;

  return (
    <>
      <button
        className={`${arrowClass} right-0`}
        aria-label="اسلاید قبلی"
        type="button"
        onClick={onPrevious}
      >
        ‹
      </button>
      <button
        className={`${arrowClass} left-0`}
        aria-label="اسلاید بعدی"
        type="button"
        onClick={onNext}
      >
        ›
      </button>
    </>
  );
}
