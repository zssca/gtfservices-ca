export const companyAdvantages = [
  {
    title: "Excellent Quality",
    description: "Pursuit of excellence in quality with every product delivered. Strict quality control and advanced manufacturing. Products meet the highest industry standards. Built to perform, built to last."
  },
  {
    title: "Proven Supply Reliability", 
    description: "We keep common SKUs on hand and move quickly on custom orders."
  },
  {
    title: "Service Built for Industrial and Commercial Sites",
    description: "Quote support, cross-references, and application guidance."
  },
  {
    title: "ISO-Certified Production",
    description: "GTFS filters are produced in ISO 9001–certified facilities to our specifications."
  }
] as const;

export type CompanyAdvantage = typeof companyAdvantages[number];
