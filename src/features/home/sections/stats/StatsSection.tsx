import { stats } from '../../data/stats.data';
import StatItem from './StatItem';

export default function StatsSection() {
  return (
    <section className="mx-auto grid max-w-[1260px] grid-cols-3 justify-items-center gap-[30px] px-6 pt-0 pb-7 max-[760px]:gap-2 max-[760px]:px-[18px] max-[760px]:pt-7 max-[760px]:pb-5">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </section>
  );
}
