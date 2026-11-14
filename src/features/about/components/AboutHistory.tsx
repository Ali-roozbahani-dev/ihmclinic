import { milestones } from '../data/about.data';

const itemClasses = [
  'relative px-[15px] pt-[26px] pb-[19px] text-center',
  // خط افقی تایم‌لاین
  'before:absolute before:top-3 before:right-0 before:left-0 before:h-0.5 before:bg-[#a9c8f5]',
  'first:before:right-1/2 last:before:left-1/2',
  'max-[540px]:before:right-0! max-[540px]:before:left-0!',
].join(' ');

export default function AboutHistory() {
  return (
    <section className="mx-auto w-[min(1180px,100%)] px-[38px] pt-[clamp(28px,3vw,42px)] max-[850px]:px-[22px] max-[760px]:w-[calc(100%-32px)] max-[760px]:pt-6">
      <h2 className="mb-5 text-[24px] max-[540px]:text-[20px]">تاریخچه کوتاه ما</h2>
      <ol className="grid grid-cols-4 rounded-xl bg-[#ffffffa8] max-[540px]:grid-cols-2 max-[540px]:gap-y-2.5">
        {milestones.map(({ title, text }) => (
          <li key={title} className={itemClasses}>
            <span
              aria-hidden="true"
              className="absolute top-[5px] left-[calc(50%-8px)] z-1 size-4 rounded-full bg-primary-dark"
            />
            <h3 className="mt-1 mb-2.5 text-[15px] font-bold">{title}</h3>
            <p className="text-[11px] leading-[1.9] text-[#8590a4] max-[540px]:text-[10px]">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
