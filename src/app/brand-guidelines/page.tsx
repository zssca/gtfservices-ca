'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Image from 'next/image'
import { 
  Palette, 
  Type, 
  ImageIcon, 
  MessageSquare, 
  FileText, 
  Download,
  CheckCircle,
  XCircle,
  Info,
  Settings,
  Wrench,
  BarChart3,
  Filter,
  Zap,
  Shield,
  Headphones,
  CheckCircle2
} from 'lucide-react'



const BrandGuidelinesPage = () => {
  // Smooth scroll function for anchor links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -80; // Account for sticky header if any
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Add scroll progress indicator
  const [scrollProgress, setScrollProgress] = React.useState(0)
  
  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-primary"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      {/* Hero Header */}
      <section className="hero-section content-section-xl relative overflow-hidden" aria-labelledby="hero-title">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-7xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Version 2.0
            </Badge>              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-96 h-32 flex items-center justify-center">
                  <Image 
                    src="/gtfs-logo.png" 
                    alt="GTFS Logo" 
                    width={360}
                    height={120}
                    className="max-w-full max-h-full object-contain"
                    style={{ aspectRatio: 'auto' }}
                    priority
                  />
                </div>
              </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-6 sm:mb-8 leading-tight">
              Global Tech Fluid Services
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-medium text-primary bg-primary/10 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full inline-block max-w-full text-center">
              Delivering Efficient & Durable Filtration Solutions
            </p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23000000%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
      </section>

      {/* Table of Contents */}
      <main id="main-content">
      <section className="section-secondary content-section" aria-labelledby="toc-title">
        <div className="container mx-auto px-4">
          <Card className="max-w-7xl mx-auto border-[--border]">
            <CardHeader className="text-center pb-8">
              <CardTitle id="toc-title" className="text-2xl sm:text-3xl font-black text-primary">
                Table of Contents
              </CardTitle>
              <Separator className="w-24 h-1 bg-primary mx-auto mt-4" />
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Navigate through our comprehensive brand guidelines using the sections below
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { title: 'Brand Overview', href: '#overview', icon: Info },
                  { title: 'Logo & Visual Identity', href: '#logo', icon: ImageIcon },
                  { title: 'Color System', href: '#colors', icon: Palette },
                  { title: 'Typography System', href: '#typography', icon: Type },
                  { title: 'Business Cards', href: '#business-cards', icon: FileText },
                  { title: 'Imagery & Photography', href: '#imagery', icon: ImageIcon },
                  { title: 'Iconography System', href: '#iconography', icon: Settings },
                  { title: 'Brand Voice & Communication', href: '#voice', icon: MessageSquare },
                  { title: 'Brand Applications', href: '#applications', icon: FileText },
                  { title: 'Digital Assets & Templates', href: '#digital', icon: Download },
                  { title: 'Marketing Materials', href: '#marketing', icon: FileText },
                  { title: 'Implementation Guidelines', href: '#guidelines', icon: CheckCircle },
                  { title: 'Brand Asset Library', href: '#downloads', icon: Download },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="group block p-4 sm:p-6 bg-card rounded-lg border-[--border] focus:outline-none focus:ring-2 focus:ring-primary"
                    role="button"
                    aria-label={`Navigate to ${item.title} section`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brand Overview */}
      <section id="overview" className="section-primary content-section" aria-labelledby="overview-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 id="overview-title" className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Brand Overview
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              The comprehensive foundation of Global Tech Fluid Services&apos; visual identity and brand strategy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  With advanced production technology and stringent quality control, committed to enhancing industrial cleanliness and environmental protection. Our mission is to deliver innovative, reliable industrial filtration solutions that optimize operational efficiency and maximize cost-effectiveness for our clients across diverse industrial sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Brand Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Excellent Quality', desc: 'Pursuit of excellence in quality with every product delivered, strict quality control and advanced manufacturing' },
                    { title: 'Efficient Service', desc: 'Customer First, Quality Oriented, Continuous Improvement, and Shared Value principle' },
                    { title: 'Rapid Logistics', desc: 'High-quality products with fast and reliable logistics, prioritizing customer needs' },
                    { title: 'Industry Leadership', desc: 'Products meet the highest industry standards, built to perform and built to last' },
                  ].map((value, index) => (
                    <div key={index} className="p-4 sm:p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border mt-12 max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Target Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Primary Market</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Industrial facility managers, procurement officers, and technical engineers in powder coating, welding, woodworking, metalworking, pharmaceutical, cement, mining, chemical processing, automotive, aerospace, and food processing industries.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Secondary Market</h4>
                  <p className="text-sm text-muted-foreground">
                    Environmental compliance officers, sustainability managers, maintenance supervisors, and industrial consultants.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Geographic Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Primary operations across Canada with expansion opportunities in North American markets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mt-8 max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Brand Positioning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                GTFS positions itself as a specialized provider of industrial filtration systems and pumps, combining advanced production technology with stringent quality control to deliver efficient and durable solutions across diverse industrial sectors.
              </p>
              <div className="bg-muted/50 rounded-lg border border-border p-4">
                <h4 className="font-semibold text-primary mb-3">Competitive Advantage:</h4>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Leading manufacturer of high-performance filter cartridges and comprehensive dust collector systems, plus precision industrial pumps and pump systems with filtration efficiency up to 99.99%.&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mt-8 max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Industry Context & Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Market Size</h4>
                  <p className="text-sm text-muted-foreground">
                    Serving diverse industries including powder coating, welding, woodworking, metalworking, pharmaceutical, cement, mining, chemical processing, automotive, and aerospace applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Trends</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sustainability regulations driving demand</li>
                    <li>• IoT integration in monitoring systems</li>
                    <li>• Predictive maintenance adoption</li>
                    <li>• Energy efficiency optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Competitive Landscape</h4>
                  <p className="text-sm text-muted-foreground">
                    Dominated by international players (Flowserve, Grundfos, KSB). GTFS differentiates through local expertise and customized solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Logo & Visual Identity */}
      <section id="logo" className="section-secondary content-section" aria-labelledby="logo-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="logo-title" className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Logo & Visual Identity
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The visual cornerstone of our brand presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Logo Variations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-card border border-border rounded-lg text-center p-4">
                  <div className="w-48 h-16 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/gtfs-logo.png" 
                      alt="GTFS Logo displayed on light background - Primary version" 
                      width={144}
                      height={48}
                      className="max-w-full max-h-full object-contain"
                      style={{ aspectRatio: 'auto' }}
                      loading="lazy"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Primary (Light Backgrounds)</p>
                </div>
                <div className="bg-primary rounded-lg text-center p-4">
                  <div className="w-48 h-16 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/gtfs-logo.png" 
                      alt="GTFS Logo displayed on dark background - Reversed white version" 
                      width={144}
                      height={48}
                      className="max-w-full max-h-full object-contain"
                      style={{ aspectRatio: 'auto' }}
                      loading="lazy"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </div>
                  <p className="text-sm text-primary-foreground">Reversed (Dark Backgrounds)</p>
                </div>
                <div className="bg-accent rounded-lg text-center p-4">
                  <div className="w-48 h-16 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/gtfs-logo.png" 
                      alt="GTFS Logo displayed on brand color background - White version" 
                      width={144}
                      height={48}
                      className="max-w-full max-h-full object-contain"
                      style={{ aspectRatio: 'auto' }}
                      loading="lazy"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </div>
                  <p className="text-sm text-accent-foreground">Brand Color Background</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Logo Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border border-dashed border-muted-foreground/30 p-4 sm:p-8 rounded-lg text-center">
                  <div className="w-60 h-20 mx-auto flex items-center justify-center relative overflow-hidden">
                    <Image 
                      src="/gtfs-logo.png" 
                      alt="GTFS Logo construction guide showing proper spacing and alignment" 
                      width={180}
                      height={60}
                      className="max-w-full max-h-full object-contain"
                      style={{ aspectRatio: 'auto' }}
                      loading="lazy"
                      sizes="(max-width: 768px) 180px, 240px"
                    />
                    <div className="absolute inset-0 border border-accent opacity-50 rounded-lg"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Logo Don&apos;ts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { 
                    text: "Don't rotate", 
                    icon: XCircle, 
                    desc: "Maintain proper orientation",
                    logoStyle: "rotate-45"
                  },
                  { 
                    text: "Don't stretch", 
                    icon: XCircle, 
                    desc: "Keep original proportions",
                    logoStyle: "scale-x-150 scale-y-75"
                  },
                  { 
                    text: "Don't change colors", 
                    icon: XCircle, 
                    desc: "Use approved color versions only",
                    logoStyle: "filter hue-rotate-90"
                  },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-destructive/10 border border-destructive/40 rounded-lg text-center relative">
                    
                    <div className="w-auto h-28 bg-muted rounded-lg flex items-center justify-center mb-3 overflow-hidden relative mx-auto px-4">
                      {/* Logo with incorrect transformation */}
                      <Image 
                        src="/gtfs-logo.png" 
                        alt={`Example of incorrect logo usage - ${item.text}`}
                        width={96}
                        height={32}
                        className={`w-auto max-w-full max-h-full object-contain transform ${
                          item.logoStyle === "rotate-45" ? "rotate-45" :
                          item.logoStyle === "scale-x-150 scale-y-75" ? "scale-x-150 scale-y-75" :
                          item.logoStyle === "filter hue-rotate-90" ? "filter hue-rotate-90 saturate-200 brightness-125" : ""
                        }`}
                        style={{ aspectRatio: 'auto' }}
                        loading="lazy"
                        sizes="72px"
                      />
                      
                      {/* Large red X overlay to show this is wrong */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-destructive text-3xl font-bold opacity-80 drop-shadow-none">✕</div>
                      </div>
                    </div>
                    
                    <item.icon className="w-6 h-6 text-destructive mx-auto mb-2" />
                    <p className="text-sm text-destructive font-medium">{item.text}</p>
                    <p className="text-xs text-destructive/70">{item.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Color System */}
      <section id="colors" className="section-primary content-section" aria-labelledby="colors-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="colors-title" className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Color System
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Our comprehensive color palette reflects technical precision and industrial strength
            </p>
          </div>

          <Tabs defaultValue="primary" className="max-w-7xl mx-auto" aria-label="Color palette categories">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
              <TabsTrigger value="accent">Accent</TabsTrigger>
              <TabsTrigger value="neutral">Neutral</TabsTrigger>
            </TabsList>

            <TabsContent value="primary" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { 
                    name: 'Ocean Blue', 
                    color: 'bg-primary', 
                    hex: '#1E40AF', 
                    rgb: '30, 64, 175',
                    hsl: '217, 71%, 40%',
                    cmyk: '83, 63, 0, 31',
                    usage: 'Primary brand color, headers, call-to-actions, logo' 
                  },
                  { 
                    name: 'Sky Blue', 
                    color: 'bg-accent', 
                    hex: '#3B82F6', 
                    rgb: '59, 130, 246',
                    hsl: '217, 91%, 60%',
                    cmyk: '76, 47, 0, 4',
                    usage: 'Links, highlights, secondary buttons, accents' 
                  },
                  { 
                    name: 'Steel Blue', 
                    color: 'bg-muted', 
                    hex: '#F1F5F9', 
                    rgb: '241, 245, 249',
                    hsl: '210, 40%, 98%',
                    cmyk: '3, 2, 0, 2',
                    usage: 'Supporting elements, backgrounds, subtle accents' 
                  },
                ].map((colorItem, index) => (
                  <Card key={index} className="border-border overflow-hidden pt-0">
                    <div className={`h-32 ${colorItem.color} flex items-center justify-center`}>
                                        <span className={`font-semibold text-lg ${colorItem.color === 'bg-muted' || colorItem.color === 'bg-accent' ? 'text-foreground' : 'text-primary-foreground'}`}>
                    {colorItem.hex}
                  </span>
                    </div>
                    <CardContent>
                      <h4 className="font-bold text-primary mb-3">{colorItem.name}</h4>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="text-xs bg-muted/50 p-2 rounded text-center font-medium">{colorItem.hex}</div>
                        <div className="text-xs bg-muted/50 p-2 rounded text-center font-medium">{colorItem.rgb}</div>
                        <div className="text-xs bg-muted/50 p-2 rounded text-center font-medium">{colorItem.hsl}</div>
                        <div className="text-xs bg-muted/50 p-2 rounded text-center font-medium">{colorItem.cmyk}</div>
                      </div>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">{colorItem.usage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="secondary" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: 'Graphite', color: 'bg-foreground', hex: '#1F2937', usage: 'Body text, secondary headers, navigation' },
                  { name: 'Slate', color: 'bg-muted-foreground', hex: '#6B7280', usage: 'Subtext, captions, metadata, form labels' },
                  { name: 'Silver', color: 'bg-border', hex: '#E5E7EB', usage: 'Disabled states, borders, dividers' },
                ].map((colorItem, index) => (
                  <Card key={index} className="border-border overflow-hidden pt-0">
                    <div className={`h-32 ${colorItem.color} flex items-center justify-center`}>
                                        <span className={`font-semibold text-lg ${colorItem.color === 'bg-border' ? 'text-foreground' : 'text-primary-foreground'}`}>
                    {colorItem.hex}
                  </span>
                    </div>
                    <CardContent>
                      <h4 className="font-bold text-primary mb-3">{colorItem.name}</h4>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">{colorItem.usage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="accent" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: 'Energy Orange', color: 'bg-destructive', hex: '#DC2626', usage: 'Alerts, urgent CTAs, error states' },
                  { name: 'Success Green', color: 'bg-green-500', hex: '#10B981', usage: 'Success states, confirmations, positive indicators' },
                  { name: 'Caution Amber', color: 'bg-yellow-500', hex: '#F59E0B', usage: 'Warnings, notifications, pending states' },
                ].map((colorItem, index) => (
                  <Card key={index} className="border-border overflow-hidden pt-0">
                    <div className={`h-32 ${colorItem.color} flex items-center justify-center`}>
                                        <span className={`font-semibold text-lg ${colorItem.color === 'bg-yellow-500' ? 'text-foreground' : 'text-primary-foreground'}`}>
                    {colorItem.hex}
                  </span>
                    </div>
                    <CardContent>
                      <h4 className="font-bold text-primary mb-3">{colorItem.name}</h4>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">{colorItem.usage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="neutral" className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {[
                  { name: 'White', color: 'bg-card', hex: '#FFFFFF', usage: 'Backgrounds, cards, content areas' },
                  { name: 'Light Gray', color: 'bg-muted', hex: '#F8FAFC', usage: 'Page backgrounds, section dividers' },
                  { name: 'Mid Gray', color: 'bg-border', hex: '#E2E8F0', usage: 'Borders, input fields, separators' },
                  { name: 'Dark Gray', color: 'bg-foreground', hex: '#0F172A', usage: 'Primary text, content text' },
                  { name: 'Black', color: 'bg-black', hex: '#000000', usage: 'High contrast text, emphasis' },
                ].map((colorItem, index) => (
                  <Card key={index} className="border-border overflow-hidden pt-0">
                    <div className={`h-24 ${colorItem.color} flex items-center justify-center`}>
                                        <span className={`font-semibold text-sm ${colorItem.color === 'bg-card' || colorItem.color === 'bg-muted' || colorItem.color === 'bg-border' ? 'text-foreground' : 'text-primary-foreground'}`}>
                    {colorItem.hex}
                  </span>
                    </div>
                    <CardContent>
                      <h4 className="font-bold text-primary mb-2 text-sm">{colorItem.name}</h4>
                      <p className="text-xs text-muted-foreground text-center">{colorItem.usage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="border-border mt-8 lg:mt-12 max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Color Usage Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-4">Accessibility Standards</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All color combinations meet WCAG 2.1 AA standards</li>
                    <li>• Minimum contrast ratio of 4.5:1 for body text</li>
                    <li>• Minimum contrast ratio of 3:1 for large text</li>
                    <li>• Color is never the sole indicator of meaning</li>
                    <li>• Test with color blindness simulators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-4">Application Rules</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Follow 60-30-10 rule: 60% neutral, 30% primary, 10% accent</li>
                    <li>• Primary color should dominate in brand applications</li>
                    <li>• Use accent colors sparingly for maximum impact</li>
                    <li>• Maintain consistency across all touchpoints</li>
                    <li>• Consider cultural color associations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="section-secondary content-section" aria-labelledby="typography-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="typography-title" className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Typography System
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Clear, professional typefaces ensuring optimal readability across all applications
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Primary Typeface</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p className="text-3xl font-bold text-primary mb-4">Roboto</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Weights Available:</strong> 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Usage:</strong> All digital and print applications, headers, body text, UI elements
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Fallback Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p className="text-2xl font-semibold text-primary mb-4">System UI Stack</p>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      &apos;Roboto&apos;, -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, &apos;Helvetica Neue&apos;, Arial, sans-serif
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Usage:</strong> Ensures consistent rendering when Roboto is unavailable
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl font-bold text-primary text-center mb-6 sm:mb-8">
                Typography Scale & Hierarchy
              </h3>
              
              {[
                { 
                  label: 'Display / H1 - Roboto 900 - 48px/57.6px - Letter Spacing: -0.03em', 
                  text: 'Engineering Excellence in Fluid Solutions', 
                  className: 'text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight' 
                },
                { 
                  label: 'H2 - Roboto 700 - 36px/46.8px - Letter Spacing: -0.02em', 
                  text: 'Industrial Filtration Systems', 
                  className: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight tracking-tight' 
                },
                { 
                  label: 'H3 - Roboto 500 - 28px/39.2px - Letter Spacing: -0.01em', 
                  text: 'Technical Expertise & Innovation', 
                  className: 'text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-tight tracking-tight' 
                },
                { 
                  label: 'H4 - Roboto 500 - 20px/30px - Letter Spacing: 0', 
                  text: 'Service Categories & Solutions', 
                  className: 'text-lg sm:text-xl lg:text-2xl font-medium text-foreground leading-tight' 
                },
                { 
                  label: 'Body Large - Roboto 400 - 18px/28.8px', 
                  text: 'Global Tech Fluid Services is an industrial filtration and pump solutions provider delivering comprehensive systems designed to optimize your operations.', 
                  className: 'text-base sm:text-lg text-foreground leading-relaxed' 
                },
                { 
                  label: 'Body - Roboto 400 - 16px/25.6px', 
                  text: 'Our advanced filtration systems and precision-engineered pump solutions help industrial facilities achieve optimal efficiency while reducing operational costs.', 
                  className: 'text-sm sm:text-base text-foreground leading-relaxed' 
                },
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-primary">
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-4 font-medium">
                      {item.label}
                    </div>
                    <div className={item.className}>
                      {item.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Typography Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Hierarchy:</strong> Maintain consistent scale relationships across all materials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Line Height:</strong> Use 1.6 ratio for body text, 1.2-1.4 for headings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Spacing:</strong> Apply consistent bottom margins between elements</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Contrast:</strong> Ensure sufficient color contrast for all text</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Web:</strong> Use rem units for scalability and accessibility</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Print:</strong> Convert to pt sizes with appropriate leading</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Minimum:</strong> 12px/14pt for body text, 16px/18pt preferred</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Mobile:</strong> Increase base size to 16px minimum for readability</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Print:</strong> Use serif fonts for body text in printed materials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Typography Examples */}
            <Card className="border-primary/20 mt-8">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Typography Examples in Context</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-2">Product Headers</h3>
                    <p className="text-muted-foreground">Use H2 (Roboto 700) for product category titles and main section headers.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="text-lg font-medium text-primary mb-2">Feature Descriptions</h4>
                    <p className="text-muted-foreground">Use Body Large (Roboto 400, 18px) for feature descriptions and key product information.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Use Body (Roboto 400, 16px) for general content, specifications, and supporting text.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Iconography */}
      <section id="iconography" className="section-primary content-section" aria-labelledby="iconography-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="iconography-title" className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Iconography System
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Consistent visual symbols that enhance communication and user experience
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Card className="border-border mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Icon Style Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Design Principles</h4>
                    <ul className="space-y-3">
                      {[
                        'Geometric construction with consistent stroke weight',
                        '24px base grid for optimal scalability',
                        '2px stroke weight for line icons',
                        'Rounded corners (2px radius) for friendliness',
                        'Balanced negative space for clarity',
                      ].map((principle, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Color Application</h4>
                    <ul className="space-y-3">
                      {[
                        'Primary: Ocean Blue (Primary)',
                        'Secondary: Graphite (Foreground)',
                        'Interactive: Sky Blue (Accent)',
                        'Status colors for system feedback',
                        'Always maintain sufficient contrast',
                      ].map((color, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{color}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-6">
              {[
                { icon: Settings, name: 'Settings' },
                { icon: Wrench, name: 'Tools' },
                { icon: BarChart3, name: 'Analytics' },
                { icon: Filter, name: 'Filtration' },
                { icon: Zap, name: 'Power' },
                { icon: Shield, name: 'Safety' },
                { icon: Headphones, name: 'Support' },
                { icon: CheckCircle2, name: 'Verified' },
              ].map((iconItem, index) => {
                const IconComponent = iconItem.icon;
                return (
                  <Card key={index} className="border-border text-center">
                    <CardContent>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">{iconItem.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Cards */}
      <section id="business-cards" className="section-primary content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Business Cards
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Professional business card designs showcasing our brand identity
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Front Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="relative inline-block">
                      <Image 
                        src="/gtfs-business-card-front.png" 
                        alt="GTFS Business Card Front Design showing company branding and contact information" 
                        width={400} 
                        height={250}
                        className="rounded-lg border border-border"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Primary business card design with company branding and contact information
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Back Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="relative inline-block">
                      <Image 
                        src="/gtfs-business-card-back.png" 
                        alt="GTFS Business Card Back Design with additional information and QR code" 
                        width={400} 
                        height={250}
                        className="rounded-lg border border-border"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Reverse side with additional information and QR code
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border mt-12 max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business Card Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Physical Specifications</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Dimensions: 3.5&quot; × 2&quot; (89mm × 51mm)</li>
                      <li>• Paper Stock: 16pt matte or satin finish</li>
                      <li>• Corners: Rounded 3mm radius</li>
                      <li>• Print: Full color CMYK + spot UV</li>
                      <li>• Finishing: Optional soft-touch coating</li>
                      <li>• Bleed: 0.125&quot; on all sides</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Design Elements</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                              <li>• Company logo prominently displayed</li>
                      <li>• Company name and tagline</li>
                      <li>• Contact person details</li>
                      <li>• QR code for digital contact</li>
                      <li>• Professional color scheme</li>
                      <li>• Clean, organized layout</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mt-8 max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business Card Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Primary Applications</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Sales meetings and presentations</li>
                      <li>• Trade shows and industry events</li>
                      <li>• Client consultations and site visits</li>
                      <li>• Networking events and conferences</li>
                      <li>• Professional associations and memberships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Distribution Guidelines</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Always carry sufficient quantity</li>
                      <li>• Present with both hands when possible</li>
                      <li>• Include in all business correspondence</li>
                      <li>• Store in protective card holder</li>
                      <li>• Update contact information regularly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Card Best Practices */}
            <Card className="border-border mt-8 max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Best Practices & Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Design Tips</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Keep information concise and readable</li>
                      <li>• Use high-quality printing for professional appearance</li>
                      <li>• Include QR code for digital contact sharing</li>
                      <li>• Maintain consistent branding with other materials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Professional Etiquette</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Exchange cards at the beginning of meetings</li>
                      <li>• Take time to read received cards</li>
                      <li>• Follow up with contacts within 48 hours</li>
                      <li>• Keep cards organized for easy reference</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Imagery Guidelines */}
      <section id="imagery" className="section-secondary content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Imagery & Photography
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Visual storytelling that communicates technical expertise and industrial reliability
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Card className="border-border">
                                <CardContent>
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Industrial equipment in operational environment - placeholder for actual photography" 
                      width={200} 
                      height={200}
                      className="opacity-50 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Industrial Equipment</h4>
                  <p className="text-sm text-muted-foreground">
                    High-quality industrial photography showcasing equipment in operational environments
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                                <CardContent>
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Technical close-up showing precision engineering details - placeholder for actual photography" 
                      width={200} 
                      height={200}
                      className="opacity-50 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Technical Close-ups</h4>
                  <p className="text-sm text-muted-foreground">
                    Precision engineering details that highlight quality and craftsmanship
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                                <CardContent>
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Professional technicians demonstrating expertise and safety practices - placeholder for actual photography" 
                      width={200} 
                      height={200}
                      className="opacity-50 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Team & Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional technicians demonstrating expertise and safety practices
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Photography Style Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Technical Characteristics</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Clean, well-lit industrial environments</li>
                      <li>• High resolution (minimum 300 DPI for print)</li>
                      <li>• Professional lighting emphasizing texture and detail</li>
                      <li>• Consistent color temperature (5500K-6500K)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Composition Principles</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Rule of thirds for dynamic composition</li>
                      <li>• Leading lines that draw attention to key elements</li>
                      <li>• Appropriate depth of field for context</li>
                      <li>• Minimal distracting background elements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section id="voice" className="section-secondary content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Brand Voice & Communication
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              How we speak to our audience across all touchpoints
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Brand Personality</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: 'Expert', desc: 'We demonstrate deep technical knowledge and industry expertise in every interaction.' },
                    { title: 'Reliable', desc: 'Our communication is consistent, dependable, and builds trust through transparency.' },
                    { title: 'Professional', desc: 'We maintain high standards while remaining approachable and human.' },
                  ].map((personality, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">{personality.title}</h4>
                      <p className="text-sm text-muted-foreground">{personality.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Communication Principles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: 'Clear & Direct', desc: 'We communicate complex technical concepts in straightforward, accessible language.' },
                    { title: 'Solution-Focused', desc: 'Every message emphasizes practical outcomes and tangible benefits for our clients.' },
                    { title: 'Confident', desc: 'We speak with authority backed by proven experience and results.' },
                  ].map((principle, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground">{principle.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="border-border max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Tone Guidelines by Context</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      context: 'Technical Documentation',
                      do: 'The filtration system reduces particulate contamination by 99.7%, extending equipment life by an average of 40%.',
                      dont: 'Our amazing filters eliminate virtually all contaminants for incredible performance.',
                    },
                    {
                      context: 'Sales & Marketing',
                      do: 'Reduce downtime and maintenance costs with our proven filtration solutions trusted by Canadian industry leaders.',
                      dont: 'You won\'t believe how awesome our revolutionary filters are!',
                    },
                    {
                      context: 'Customer Support',
                      do: 'I understand the urgency. Let me connect you with our technical team to resolve this within 2 hours.',
                      dont: 'That\'s not our problem. You\'ll have to wait until someone is available.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="font-semibold text-primary">{item.context}</h4>
                      <Alert>
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <AlertDescription className="text-sm">{item.do}</AlertDescription>
                      </Alert>
                      <Alert variant="destructive">
                        <XCircle className="h-4 w-4" />
                        <AlertDescription className="text-sm">{item.dont}</AlertDescription>
                      </Alert>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section id="applications" className="section-primary content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Brand Applications
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Practical implementation of our brand across all business touchpoints
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Card className="border-border mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Stationery & Business Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Letterhead Design</h4>
                    <div className="bg-muted/30 rounded-lg border border-border p-6">
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-24 h-8 flex items-center justify-center overflow-hidden">
                            <Image 
                              src="/gtfs-logo.png" 
                              alt="GTFS Logo" 
                              width={90}
                              height={30}
                              className="max-w-full max-h-full object-contain"
                              style={{ aspectRatio: 'auto' }}
                            />
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-4">Global Tech Fluid Services</div>
                        <div className="text-xs text-muted-foreground">Engineering Excellence in Fluid Solutions</div>
                        <Separator className="w-24 h-1 bg-primary mx-auto mt-4" />
                      </div>
                      <div className="mt-6 text-sm text-muted-foreground">
                        <p>[Date]</p>
                        <p className="mt-4">[Recipient Name]<br />[Company]<br />[Address]</p>
                        <p className="mt-4">Dear [Name],</p>
                        <p className="mt-4">[Letter content area. This template provides a professional foundation for all business correspondence while maintaining our brand identity.]</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Email Signature</h4>
                    <div className="bg-muted/30 rounded-lg border border-border p-6">
                      <div className="text-sm">
                        <div className="font-semibold text-primary mb-2">[Name Placeholder]</div>
                        <div className="text-muted-foreground mb-3">[Title Placeholder]</div>
                        <Separator className="w-16 h-0.5 bg-primary mb-3" />
                        <div className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <div className="w-16 h-5 flex items-center justify-center overflow-hidden">
                            <Image 
                              src="/gtfs-logo.png" 
                              alt="GTFS Logo" 
                              width={60}
                              height={20}
                              className="max-w-full max-h-full object-contain"
                              style={{ aspectRatio: 'auto' }}
                            />
                          </div>
                          <span>Global Tech Fluid Services</span>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div><strong>T:</strong> [Phone Placeholder]</div>
                          <div><strong>E:</strong> [Email Placeholder]</div>
                          <div><strong>W:</strong> [Website Placeholder]</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>



            <Card className="border-border mt-8 max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Additional Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Print Materials</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Brochures and catalogs</li>
                      <li>• Technical datasheets</li>
                      <li>• Case studies and reports</li>
                      <li>• Trade show materials</li>
                      <li>• Vehicle graphics and wraps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Digital Assets</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Email signatures and templates</li>
                      <li>• Digital advertisements</li>
                      <li>• Online forms and surveys</li>
                      <li>• Mobile app interfaces</li>
                      <li>• Video and multimedia content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Assets & Templates */}
      <section id="digital" className="section-secondary content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Digital Assets & Templates
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Comprehensive digital resources for consistent brand implementation
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Web & Digital Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Website Headers', desc: 'Responsive navigation templates with logo placement and brand colors' },
                      { title: 'Email Templates', desc: 'Professional email layouts for marketing and business communication' },
                      { title: 'Social Media Posts', desc: 'Platform-specific templates for LinkedIn, Facebook, and Instagram' },
                      { title: 'Digital Ads', desc: 'Banner templates for Google Ads, Facebook Ads, and display advertising' },
                    ].map((item, index) => (
                      <div key={index} className="p-4 sm:p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                        <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Design System Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Figma Components', desc: 'Reusable UI components and design tokens for digital products' },
                      { title: 'Adobe Creative Suite', desc: 'Photoshop, Illustrator, and InDesign templates and libraries' },
                      { title: 'Sketch Libraries', desc: 'Design system components for Sketch users and designers' },
                      { title: 'Design Tokens', desc: 'JSON files with color, typography, and spacing values' },
                    ].map((item, index) => (
                      <div key={index} className="p-4 sm:p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                        <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Digital Asset Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Web Assets</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Logo: SVG (vector), PNG (raster) in multiple sizes</li>
                      <li>• Icons: 24px, 32px, 48px in SVG and PNG formats</li>
                      <li>• Images: WebP format with fallback JPG versions</li>
                      <li>• Colors: CSS variables and design token files</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Social Media Assets</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Profile Pictures: 400x400px minimum resolution</li>
                      <li>• Cover Images: Platform-specific dimensions</li>
                      <li>• Post Templates: 1200x630px for optimal sharing</li>
                      <li>• Story Templates: 1080x1920px vertical format</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mt-8 max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Implementation Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Best Practices</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Always use vector formats (SVG) when possible</li>
                      <li>• Maintain consistent spacing and alignment</li>
                      <li>• Test across different devices and screen sizes</li>
                      <li>• Optimize file sizes for web performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Quality Standards</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Ensure accessibility compliance (WCAG 2.1 AA)</li>
                      <li>• Maintain brand consistency across all platforms</li>
                      <li>• Regular updates to reflect brand evolution</li>
                      <li>• Version control for all digital assets</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Guidelines */}
      <section id="guidelines" className="section-primary content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Implementation Guidelines
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Comprehensive standards for maintaining brand consistency across all applications
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Logo Implementation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { text: 'Maintain aspect ratio at all sizes', type: 'do' },
                    { text: 'Use approved color versions only', type: 'do' },
                    { text: 'Respect minimum clear space requirements', type: 'do' },
                    { text: 'Stretch, rotate, or skew the logo', type: 'dont' },
                    { text: 'Change colors or add effects', type: 'dont' },
                    { text: 'Place on busy or low-contrast backgrounds', type: 'dont' },
                  ].map((rule, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {rule.type === 'do' ? (
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      )}
                      <span className={`text-sm ${rule.type === 'do' ? 'text-muted-foreground' : 'text-destructive'}`}>
                        {rule.text}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Color Application</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { text: 'Use Ocean Blue as primary brand color', type: 'do' },
                    { text: 'Follow 60-30-10 color distribution rule', type: 'do' },
                    { text: 'Ensure WCAG accessibility compliance', type: 'do' },
                    { text: 'Use colors outside the approved palette', type: 'dont' },
                    { text: 'Rely solely on color to convey information', type: 'dont' },
                    { text: 'Use low contrast color combinations', type: 'dont' },
                  ].map((rule, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {rule.type === 'do' ? (
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      )}
                      <span className={`text-sm ${rule.type === 'do' ? 'text-muted-foreground' : 'text-destructive'}`}>
                        {rule.text}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Typography Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { text: 'Use Roboto for all brand applications', type: 'do' },
                    { text: 'Maintain consistent hierarchy and spacing', type: 'do' },
                    { text: 'Use appropriate font weights for emphasis', type: 'do' },
                    { text: 'Mix multiple typeface families', type: 'dont' },
                    { text: 'Use decorative or script fonts', type: 'dont' },
                    { text: 'Set body text smaller than 14px/12pt', type: 'dont' },
                  ].map((rule, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {rule.type === 'do' ? (
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      )}
                      <span className={`text-sm ${rule.type === 'do' ? 'text-muted-foreground' : 'text-destructive'}`}>
                        {rule.text}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="quality-control">
                <AccordionTrigger className="text-xl font-semibold text-primary">
                  Quality Control Checklist
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Pre-Production Review</h4>
                      <ul className="space-y-2">
                        {[
                          'Logo placement and sizing correct',
                          'Color values match brand specifications',
                          'Typography hierarchy properly applied',
                          'All text proofread for accuracy',
                          'Contact information verified',
                          'File formats appropriate for use',
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-4 h-4 border border-muted-foreground/30 rounded"></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Technical Specifications</h4>
                      <ul className="space-y-2">
                        {[
                          'Resolution meets output requirements',
                          'Color profile correctly assigned',
                          'Bleed and safety margins included',
                          'Fonts embedded or outlined',
                          'File size optimized for delivery',
                          'Backup files archived properly',
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-4 h-4 border border-muted-foreground/30 rounded"></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section id="marketing" className="section-accent content-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Marketing Materials
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Branded materials for promotional and educational purposes
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardContent className="text-center">
                  <div className="bg-muted rounded-lg mb-4 overflow-hidden h-48 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Product brochure template design showing tri-fold layout - placeholder for actual templates" 
                      width={300}
                      height={200}
                      className="object-cover max-w-full max-h-full"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ aspectRatio: 'auto' }}
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Product Brochures</h4>
                  <p className="text-sm text-muted-foreground">
                    Tri-fold and bi-fold brochure templates showcasing our complete product catalog
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="text-center">
                  <div className="bg-muted rounded-lg mb-4 overflow-hidden h-48 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Trade show banner design template - placeholder for actual banners" 
                      width={300}
                      height={200}
                      className="object-cover max-w-full max-h-full"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ aspectRatio: 'auto' }}
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Trade Show Materials</h4>
                  <p className="text-sm text-muted-foreground">
                    Banner stands, booth backdrops, and promotional materials for industry events
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="text-center">
                  <div className="bg-muted rounded-lg mb-4 overflow-hidden h-48 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Technical datasheet template showing product specifications - placeholder for actual templates" 
                      width={300}
                      height={200}
                      className="object-cover max-w-full max-h-full"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ aspectRatio: 'auto' }}
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Technical Datasheets</h4>
                  <p className="text-sm text-muted-foreground">
                    Standardized format for detailed product specifications and applications
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="text-center">
                  <div className="bg-muted rounded-lg mb-4 overflow-hidden h-48 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Case study layout template showing customer success stories - placeholder for actual templates" 
                      width={300}
                      height={200}
                      className="object-cover max-w-full max-h-full"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ aspectRatio: 'auto' }}
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Case Studies</h4>
                  <p className="text-sm text-muted-foreground">
                    Template for customer success stories and project highlights
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="text-center">
                  <div className="bg-muted rounded-lg mb-4 overflow-hidden h-48 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Vehicle wrap design template for service vehicles - placeholder for actual templates" 
                      width={300}
                      height={200}
                      className="object-cover max-w-full max-h-full"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ aspectRatio: 'auto' }}
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Vehicle Wraps</h4>
                  <p className="text-sm text-muted-foreground">
                    Service van and truck graphics templates with brand elements and contact info
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="text-center">
                  <div className="bg-muted rounded-lg mb-4 overflow-hidden h-48 flex items-center justify-center">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Safety signage and training materials template - placeholder for actual templates" 
                      width={300}
                      height={200}
                      className="object-cover max-w-full max-h-full"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ aspectRatio: 'auto' }}
                    />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Safety & Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Safety signage, training materials, and compliance documentation templates
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border mt-8 lg:mt-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Marketing Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Content Strategy</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• <strong>Focus:</strong> Technical expertise and proven results</li>
                      <li>• <strong>Evidence:</strong> Include statistics, certifications, testimonials</li>
                      <li>• <strong>Benefits:</strong> Emphasize operational improvements and cost savings</li>
                      <li>• <strong>Call-to-Action:</strong> Clear next steps for engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Visual Standards</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• <strong>Imagery:</strong> High-quality industrial photography</li>
                      <li>• <strong>Layout:</strong> Clean, organized information hierarchy</li>
                      <li>• <strong>Branding:</strong> Consistent logo placement and sizing</li>
                      <li>• <strong>Contact:</strong> Always include multiple contact methods</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mt-8 max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Marketing Material Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Print Specifications</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• Resolution: Minimum 300 DPI for print</li>
                      <li>• Color Profile: CMYK for print, RGB for digital</li>
                      <li>• Bleed: 0.125&quot; on all sides</li>
                      <li>• Paper Stock: Appropriate weight and finish</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Digital Specifications</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <li>• File Formats: PDF, PNG, JPG, SVG as appropriate</li>
                      <li>• Resolution: 72 DPI for web, 150+ for digital print</li>
                      <li>• Color Profile: sRGB for web, Adobe RGB for print</li>
                      <li>• File Size: Optimized for delivery method</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="section-accent content-section-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
              Brand Asset Library
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12">
              Download comprehensive brand resources and templates for consistent application
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Logo Package', 
                  desc: 'Complete logo set in SVG, PNG, EPS, and AI formats for all applications',
                  size: '2.4 MB',
                  formats: 'SVG, PNG, EPS, AI'
                },
                { 
                  title: 'Color Palettes', 
                  desc: 'ASE, CLR, and ACO files for Adobe Creative Suite and design applications',
                  size: '156 KB',
                  formats: 'ASE, CLR, ACO'
                },
                { 
                  title: 'Typography Kit', 
                  desc: 'Roboto font family with web fonts and installation files',
                  size: '8.7 MB',
                  formats: 'TTF, WOFF, WOFF2'
                },
                { 
                  title: 'Template Library', 
                  desc: 'PowerPoint, Word, and design templates for business applications',
                  size: '15.2 MB',
                  formats: 'PPTX, DOCX, INDD'
                },
                { 
                  title: 'Photography Guides', 
                  desc: 'Style guidelines and examples for consistent visual storytelling',
                  size: '3.1 MB',
                  formats: 'PDF, JPG'
                },
                { 
                  title: 'Digital Assets', 
                  desc: 'Web graphics, social media templates, and email signatures',
                  size: '6.8 MB',
                  formats: 'PSD, AI, SVG'
                },
              ].map((asset, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="text-center">
                    <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary mb-3">{asset.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{asset.desc}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>{asset.size}</span>
                      <span>{asset.formats}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Brand Guidelines</h3>
          <p className="text-muted-foreground mb-4">© 2025 Global Tech Fluid Services. All rights reserved.</p>
          <p className="text-muted-foreground mb-6">These brand guidelines are proprietary and confidential.</p>
          <Separator className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground mb-2">For questions about brand usage and implementation:</p>
          <p className="text-muted-foreground mb-2">
            <strong>Contact:</strong> sales@gtfservices.ca | <strong>Website:</strong> www.gtfservices.ca
          </p>
          <p className="text-muted-foreground">
            <strong>Version:</strong> 2.0 | <strong>Last Updated:</strong> August 2025
          </p>
        </div>
      </footer>

      </main>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary z-50"
        aria-label="Scroll to top of page"
        type="button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  )
}

export default BrandGuidelinesPage
