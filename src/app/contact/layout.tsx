import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Global Tech Fluid Services | Filtration & Pump Support",
  description: "Contact Global Tech Fluid Services for expert technical consultation, custom filtration and pump solutions, and quotes. Business hours Mon–Fri 08:00–17:00 (MT) with fast response times and competitive pricing.",
  keywords: "contact global tech fluid services, technical support filtration, pump support, custom filter solutions, industrial pumps, industrial filter quotes, expert consultation, business hours",
  openGraph: {
    title: "Contact Global Tech Fluid Services - Filtration & Pump Experts",
    description: "Get expert technical consultation and custom filtration and pump solutions. Fast response times and competitive pricing guaranteed.",
    type: "website",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}