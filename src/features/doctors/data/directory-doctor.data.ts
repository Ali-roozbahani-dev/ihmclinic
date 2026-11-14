import { doctors } from "./doctors.data";


export const specialtyOptions = [
  { value: 'all', label: 'همه تخصص‌ها' },
  ...Array.from(new Set(doctors.map((doctor) => doctor.specialty))).map(
    (specialty) => ({
      value: specialty,
      label: specialty,
    })
  ),
];

