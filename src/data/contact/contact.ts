export const contactInfo = {
  email: "sales@gtfservices.ca",
  supportEmail: "sales@gtfservices.ca",
  website: "https://www.gtfservices.ca",
  phone: "+1 587-703-0091",
  address: {
    street: "To Be Updated",
    city: "To Be Updated",
    country: "Canada"
  },
  businessHours: {
    weekdays: "Mon–Fri 08:00–17:00 (MT)",
    saturday: "Saturday: Closed",
    sunday: "Sunday: Closed"
  }
} as const;

export type ContactInfo = typeof contactInfo;
