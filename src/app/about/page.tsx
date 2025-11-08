import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { 
  Award, 
  Users, 
  Building, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle,
  Target,
  Settings
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Global Tech Fluid Services | Industrial Filtration & Pumps",
  description: "Learn about Global Tech Fluid Services, a leading provider of industrial filtration and pump solutions. Discover our mission, values, certifications, and commitment to delivering efficient and durable systems worldwide.",
  keywords: "about global tech fluid services, industrial filtration company, industrial pumps, pump solutions, company mission values, ISO certified filtration",
  openGraph: {
    title: "About Global Tech Fluid Services - Filtration & Pump Solutions",
    description: "Discover our commitment to excellence in industrial filtration solutions with ISO certification and global reach.",
    type: "website",
  }
};

import { getCompanyAdvantages } from "@/lib/data";

export default async function AboutPage() {
  const advantages = await getCompanyAdvantages();

  return (
    <div className="page-background-muted">
      <PageContainer>
        <PageHeader
          title="About GTFS"
          description="GTFS is a Canadian brand and supplier of industrial filters for dust collection and air handling. We focus on reliable supply, responsive support, and practical pricing."
          breadcrumbs={[
            { title: "About" }
          ]}
        />

        {/* Company Overview */}
        <section className="section-primary content-section-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Local responsiveness: quick quotes, cross-references, and application help.
                </p>
                <p className="text-muted-foreground">
                  ISO-certified production: GTFS filters are produced in ISO 9001 facilities to our specifications.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">Reliable Supply — products where and when needed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">Responsive Service — fast support & quotes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="font-medium">ISO-based Quality — certified production facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Focused Expertise — industrial dust collection & air handling</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Image
                  src="/gtfs-logo.png"
                  alt="Global Tech Fluid Services Manufacturing"
                  width={500}
                  height={400}
                  className="object-contain max-w-full max-h-full"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Combined */}
        <section className="section-secondary content-section-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Mission:</strong> Industrial Filtration — Branded Supply, Local Support. GTFS supplies industrial filters manufactured in ISO 9001–certified facilities to our 
                  specifications. We focus on reliable supply, responsive support, and environmental protection.
                </p>
                <p className="text-muted-foreground">
                  <strong>Vision:</strong> To become Canada&apos;s most trusted supplier of industrial filtration solutions — known for 
                  responsive service, reliable supply, and practical value for every industrial site we support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Local responsiveness: quick quotes, cross-references, and application help</div>
                  <div>• ISO-certified production: GTFS filters are produced in ISO 9001 facilities to our specifications</div>
                  <div>• <strong>Focus on: Cross reference</strong> - helping you find the exact filter match you need</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Advantages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the filtration industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const icons = [Shield, Zap, Globe];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={advantage.title}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>


        {/* Quality Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meeting and exceeding international standards for quality and safety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001", description: "Quality Management System", icon: Award },
              { name: "OEM Standards", description: "Original Equipment Manufacturer", icon: CheckCircle }
            ].map((cert) => {
              const Icon = cert.icon;
              return (
                <Card key={cert.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted filtration solutions across diverse industrial sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Oil & gas", "Mining & minerals", "Wood products", "Agriculture & grain handling",
              "Food processing", "Metalworking", "Power generation"
            ].map((industry) => (
              <Card key={industry} className="text-center">
                <CardContent className="p-4">
                  <div className="text-sm font-medium">{industry}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <CTASection
          title="Ready to Work Together?"
          description="Discover how our expertise and quality products can improve your industrial filtration systems."
          primaryButton={{
            href: "/contact",
            text: "Contact Our Experts",
            variant: "secondary"
          }}
          secondaryButton={{
            href: "/polyester-air-filter-cartridge",
            text: "Browse Products",
            variant: "outline"
          }}
        />
      </PageContainer>
    </div>
  );
}