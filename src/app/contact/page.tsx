"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  FileText,
  Users,
  Award,
  CheckCircle,
  Headphones,
  Shield,
  Zap,
  TrendingUp,
  Globe2
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contact/contact";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  productInterest: "",
  message: "",
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string>("");
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const errorMessage =
          data?.error ||
          data?.message ||
          "Failed to send message. Please try again or contact us directly.";
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      setFormData({ ...initialFormData });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again or contact us directly.";
      setSubmitError(errorMessage);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageContainer>
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
            <p className="text-lg text-muted-foreground">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
          </div>
          <div className="space-y-4">
            <Button onClick={() => {
              setIsSubmitted(false);
              setFormData({ ...initialFormData });
            }}>
              Send Another Message
            </Button>
            <div className="text-sm text-muted-foreground">
              <p>Questions about your order? Call us at <strong>+1 587-703-0091</strong><br/>
              Shipping: Canada-wide (expedited available)</p>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <div className="page-background-muted">
    <PageContainer>
      <PageHeader
        title="Contact GTFS"
        description="Technical questions, quotes, or cross-references — tell us what you're running and we'll help you match it."
        breadcrumbs={[
          { title: "Contact" }
        ]}
      />

      <section className="section-primary content-section-lg">
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center text-2xl">
                <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and our team will respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className={cn(
                        "text-base",
                        errors.name ? "border-destructive" : ""
                      )}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className={cn(
                        "text-base",
                        errors.email ? "border-destructive" : ""
                      )}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productInterest">Product Interest</Label>
                  <Select
                    value={formData.productInterest}
                    onValueChange={(value) =>
                      handleInputChange("productInterest", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Polyester Air Filter Cartridges">Polyester Air Filter Cartridges</SelectItem>
                      <SelectItem value="Cellulose Air Filter Cartridges">Cellulose Air Filter Cartridges</SelectItem>
                      <SelectItem value="Gas Turbine Air Intake Filters">Gas Turbine Air Intake Filters</SelectItem>
                      <SelectItem value="Metal Pleated Bag Filters">Metal Pleated Bag Filters</SelectItem>
                      <SelectItem value="Panel Air Filters">Panel Air Filters</SelectItem>
                      <SelectItem value="Filter Media">Filter Media</SelectItem>
                      <SelectItem value="Dust Collection Systems">Dust Collection Systems</SelectItem>
                      <SelectItem value="Custom Solution">Custom Solution</SelectItem>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please describe your filtration requirements, application details, or any specific questions you have..."
                    rows={5}
                    required
                    className={cn(
                      "text-base resize-none",
                      errors.message ? "border-destructive" : ""
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Alert>
                  <FileText className="h-4 w-4" />
                  <AlertDescription>
                    For technical specifications or custom requirements, please include details about your application, 
                    flow rates, particle sizes, and operating conditions.
                  </AlertDescription>
                </Alert>

                {submitError && (
                  <Alert variant="destructive">
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full font-medium">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card className="">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription className="text-base">
                Multiple ways to reach our expert team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">
                      <a href="tel:+15877030091" className="">
                        +1 587-703-0091
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Technical Support & Sales
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      <a href={`mailto:${contactInfo.email}`} className="">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      General Inquiries
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Technical Support</div>
                    <div className="text-sm text-muted-foreground">
                      <a href={`mailto:sales@gtfservices.ca`} className="">
                        sales@gtfservices.ca
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Product Specifications & Custom Solutions
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-sm text-muted-foreground">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}<br />
                      {contactInfo.address.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      {contactInfo.businessHours.weekdays}<br />
                      {contactInfo.businessHours.saturday}<br />
                      {contactInfo.businessHours.sunday}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center text-2xl">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Why Choose GTF Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Headphones className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Expert technical consultation</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Custom filtration solutions</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">ISO certified quality</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Fast response times</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Competitive pricing</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Globe2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Global shipping available</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
      </section>

      {/* Office Locations & Service Areas */}
      <section className="section-secondary content-section-lg">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We serve customers across Canada with coast-to-coast shipping and local support.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Card className="">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center text-xl">
                <MapPin className="mr-3 h-6 w-6 text-primary" />
                Canada Coast-to-Coast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Western Canada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Central Canada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Eastern Canada</span>
                </div>
                <div className="text-xs text-muted-foreground mt-4 pt-3 border-t">
                  Standard shipping and local support available
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center text-xl">
                <Users className="mr-3 h-6 w-6 text-primary" />
                Industries Served
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Automotive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Pharmaceutical</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Food Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Chemical Processing</span>
                </div>
                <div className="text-xs text-muted-foreground mt-4 pt-3 border-t">
                  Specialized solutions for each industry
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center text-xl">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">ISO 9001 Quality Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">OEM Standards</span>
                </div>
                <div className="text-xs text-muted-foreground mt-4 pt-3 border-t">
                  Meeting Canadian quality standards
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>
    </PageContainer>
    </div>
  );
}
