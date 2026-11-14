import type { LucideIcon } from 'lucide-react';

interface WhyUsCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export default function WhyUsCard({ icon: Icon, title, text }: WhyUsCardProps) {
  return (
    <article className="rounded-[20px] bg-white px-[18px] py-6 text-center shadow-[0_5px_18px_rgba(22,93,73,0.08)] max-[760px]:px-2.5 max-[760px]:py-[18px]">
      <div className="mx-auto mb-3 grid size-[58px] place-items-center rounded-full bg-[#dff3e9] text-[#08735c]">
        <Icon size={28} aria-hidden="true" />
      </div>
      <h3 className="mb-[7px] text-[16px] text-[#164941] max-[760px]:text-[14px]">{title}</h3>
      <p className="text-[12px] leading-[1.9] text-[#64756e] max-[760px]:text-[11px]">{text}</p>
    </article>
  );
}
