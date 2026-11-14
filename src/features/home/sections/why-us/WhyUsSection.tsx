import { benefits } from '../../data/why-us.data';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import WhyUsCard from './WhyUsCard';

export default function WhyUsSection() {
  return (
    <section
      className="mx-auto mt-2 mb-1 max-w-[1260px] rounded-[30px] bg-[#f4fbf7] px-6 pt-[30px] pb-[34px] max-[760px]:mx-3 max-[760px]:mt-1 max-[760px]:mb-0 max-[760px]:rounded-[23px] max-[760px]:px-3.5 max-[760px]:pt-6 max-[760px]:pb-7"
      aria-labelledby="why-us-title"
    >
      <SectionTitle eyebrow="انتخابی برای آرامش بیشتر" title="چرا درمانگاه ما؟" titleId="why-us-title" />
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[18px] max-[760px]:grid-cols-[repeat(2,1fr)] max-[760px]:gap-2.5">
        {benefits.map((benefit) => (
          <WhyUsCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}
