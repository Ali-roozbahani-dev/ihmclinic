import { features } from '../data/about.data';

export default function AboutFeatures() {
  return (
    <section
      className={[
        'relative z-3 mx-auto mt-[clamp(28px,3vw,42px)] grid w-[min(1180px,100%)] grid-cols-4 gap-4 px-[25px]',
        'max-[850px]:px-[15px] max-[760px]:mt-6 max-[760px]:w-[calc(100%-32px)] max-[540px]:grid-cols-2',
      ].join(' ')}
      aria-label="ویژگی‌های درمانگاه"
    >
      {features.map(({ title, text, icon: Icon }) => (
        <article
          key={title}
          className={[
            'rounded-2xl border border-[#e5eee9] bg-white px-4 py-[23px] text-center',
            'shadow-[0_8px_28px_rgb(18_69_48/9%)] hover:shadow-[0_14px_34px_rgb(18_69_48/14%)]',
            '[transition:box-shadow_.2s_ease,transform_.2s_ease] motion-reduce:transition-none',
            'max-[850px]:px-[9px] max-[850px]:py-[18px] max-[760px]:rounded-[14px]',
          ].join(' ')}
        >
          <Icon aria-hidden="true" strokeWidth={1.5} className="mx-auto block size-7 text-primary-dark" />
          <h3 className="mt-3.5 font-bold mb-[7px] text-[16px] max-[850px]:text-[13px]">{title}</h3>
          <p className="text-[11px] leading-[1.9] text-[#8590a4]">{text}</p>
        </article>
      ))}
    </section>
  );
}
