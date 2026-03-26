import z from "zod";

export const clientManagementSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(1, "Pincode is required"),
  country: z.string().min(1, "Country is required"),
  contactPerson: z.string().min(1, "Contact Person is required"),
  contactPersonPhone: z.string().min(1, "Contact Person Phone is required"),
  gst: z.string().min(1, "GST is required"),
  company: z.string().min(1, "Company is required"),
  source: z.string().min(1, "Source is required"),
});

export type ClientManagementInput = z.infer<typeof clientManagementSchema>;

export type ClientManagement = ClientManagementInput & {
  id: string;
  createdAt: string;
};

export type ClientManagementResponse = {
  message: string;
  data: ClientManagement[];
};

export type ClientManagementUpdateInput = Partial<ClientManagementInput>;
