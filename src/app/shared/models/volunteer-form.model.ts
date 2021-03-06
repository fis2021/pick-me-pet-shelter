export interface VolunteerForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  workDays: string [];
  uidUser: string;
  accepted: boolean;
  rejected: boolean;
  id?: string;
  wantJob: boolean;
}
