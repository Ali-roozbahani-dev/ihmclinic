import {
  Accessibility,
  Activity,
  Baby,
  Bone,
  Brain,
  FlaskConical,
  HeartPulse,
  Scan,
  ScanLine,
  SmilePlus,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

/** نگاشت کلید آیکون در داده‌ی خدمات به آیکون lucide. */
export const serviceIcons: Record<string, LucideIcon> = {
  scan: Scan,
  tooth: SmilePlus,
  heart: HeartPulse,
  flask: FlaskConical,
  'scan-line': ScanLine,
  brain: Brain,
  stethoscope: Stethoscope,
  baby: Baby,
  bone: Bone,
  activity: Activity,
  'user-round': UserRound,
  accessibility: Accessibility,
};

export const defaultServiceIcon: LucideIcon = Stethoscope;
