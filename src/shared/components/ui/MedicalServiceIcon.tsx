import { Accessibility, Activity, Baby, Bone, Brain, FlaskConical, HeartPulse, Scan, ScanLine, SmilePlus, Stethoscope, UserRound, type LucideIcon } from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  ultrasound: Scan,
  dentistry: SmilePlus,
  cardiology: HeartPulse,
  laboratory: FlaskConical,
  radiology: ScanLine,
  neurology: Brain,
  general: Stethoscope,
  pediatrics: Baby,
  orthopedics: Bone,
  dermatology: Activity,
  gynecology: UserRound,
  physiotherapy: Accessibility,
};

export default function MedicalServiceIcon({ serviceId }: { serviceId: string }) {
  const Icon = icons[serviceId] ?? Stethoscope;
  return <Icon size={44} strokeWidth={1.6} aria-hidden="true" />;
}
