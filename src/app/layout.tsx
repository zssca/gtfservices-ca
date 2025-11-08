import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { StructuredData, organizationStructuredData, websiteStructuredData } from "@/components/structured-data";
import { BreadcrumbProvider } from "@/contexts/breadcrumb-context";
import { ClientSiteHeader } from "@/components/client-site-header";
import { getNavigation } from "@/lib/data";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Global Tech Fluid Services - Industrial Filters",
  description: "Leading provider of industrial filters. Delivering efficient & durable filtration solutions with advanced production technology.",
  keywords: "industrial filters, dust collector cartridges, air filtration, polyester filters, cellulose filters, gas turbine filters, filtration solutions",
  authors: [{ name: "Global Tech Fluid Services" }],
  creator: "Global Tech Fluid Services",
  publisher: "Global Tech Fluid Services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gtfservices.ca",
    title: "Global Tech Fluid Services - Industrial Filters",
    description: "Leading provider of industrial filters. Delivering efficient & durable filtration solutions.",
    siteName: "Global Tech Fluid Services"
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Tech Fluid Services - Industrial Filters",
    description: "Leading provider of industrial filters. Delivering efficient & durable filtration solutions."
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = await getNavigation();
  
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
      </head>
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <BreadcrumbProvider>
          <ClientSiteHeader navItems={navigation.mainNav} />
          <main className="flex-1 flex flex-col">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <SiteFooter footerNav={navigation.footerNav} />
        </BreadcrumbProvider>
      </body>
    </html>
  );
}
