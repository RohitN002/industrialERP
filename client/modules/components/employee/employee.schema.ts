import z from "zod";

export const employeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  mobileNumber: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  gender: z.string().min(1, "Gender is required"),
  dateOfBirth: z.coerce.date().min(1, "Date of Birth is required"),
  departmentId: z.string().min(1, "Department is required"),
  fatherName: z.string().min(1, "Father Name is required"),
  motherName: z.string().min(1, "Mother Name is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(1, "Pincode is required"),
  country: z.string().min(1, "Country is required"),
  designationId: z.string().min(1, "Designation is required"),
  contactPerson: z.string().min(1, "Contact Person is required"),
  contactPersonPhone: z.string().min(1, "Contact Person Phone is required"),
});

export type EmployeeInput = z.infer<typeof employeeSchema>;

export interface EmployeeResponse {
  message: string;
  data: Employee[];
}

export interface Employee {
  message: string;
  data: {
    id: string;
    gender: string;
    dateOfBirth: Date;
    name: string;
    email: string;
    mobileNumber: string;
    address: string;
    departmentId: string;
    designationId: string;
    fatherName: string;
    motherName: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    contactPerson: string;
    contactPersonPhone: string;
    gst: string;
  };
}
