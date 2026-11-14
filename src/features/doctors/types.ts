
export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  specialty: string;
  medicalCode: string;
  contractual: boolean;
  privilege: string | null;
  city: string;
  licenseExpiry: string;
  image: string;
}

export type DoctorSort = 'related' | 'name';

