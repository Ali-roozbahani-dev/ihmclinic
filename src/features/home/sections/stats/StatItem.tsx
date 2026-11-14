import type { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function StatItem({ icon: Icon, value, label }: StatItemProps) {
  return (
    <div className="flex min-h-[134px] w-[190px] flex-col items-center justify-center gap-[3px] rounded-[20px] shadow-[0_2px_12px_#0002] max-[760px]:min-h-[113px] max-[760px]:w-full">
      <Icon className="size-10 max-[760px]:w-[29px]" strokeWidth={1.5} />
      <strong className="text-[20px] max-[760px]:text-[16px]">{value}</strong>
      <span className="text-[13px] max-[760px]:text-center max-[760px]:text-[10px]">{label}</span>
    </div>
  );
}
