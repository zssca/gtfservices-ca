import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CTAButton {
  href: string;
  text: string;
  variant?: "default" | "secondary" | "outline";
  icon?: boolean;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  className?: string;
}

export function CTASection({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  className = "" 
}: CTASectionProps) {
  return (
    <Card className={`bg-primary text-primary-foreground border-0 ${className}`}>
      <CardContent className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button 
              asChild 
              size="lg" 
              variant={primaryButton.variant || "secondary"} 
              className="w-full sm:w-auto"
            >
              <Link href={primaryButton.href} className="flex items-center justify-center">
                {primaryButton.text}
                {primaryButton.icon && <ArrowRight className="ml-2 h-4 w-4" />}
              </Link>
            </Button>
            {secondaryButton && (
              <Button 
                asChild 
                size="lg" 
                variant={secondaryButton.variant || "outline"}
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
              >
                <Link href={secondaryButton.href} className="flex items-center justify-center">
                  {secondaryButton.text}
                  {secondaryButton.icon && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Light variant for use in different contexts
export function CTASectionLight({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  className = "" 
}: CTASectionProps) {
  return (
    <div className={`p-4 sm:p-6 lg:p-8 rounded-lg bg-muted/50 ${className}`}>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-center sm:text-left">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start max-w-lg mx-auto sm:mx-0">
        <Button 
          asChild 
          size="lg" 
          variant={primaryButton.variant || "default"}
          className="w-full sm:w-auto"
        >
          <Link href={primaryButton.href} className="flex items-center justify-center">
            {primaryButton.text}
            {primaryButton.icon && <ArrowRight className="ml-2 h-4 w-4" />}
          </Link>
        </Button>
        {secondaryButton && (
          <Button 
            asChild 
            size="lg" 
            variant={secondaryButton.variant || "outline"}
            className="w-full sm:w-auto"
          >
            <Link href={secondaryButton.href} className="flex items-center justify-center">
              {secondaryButton.text}
              {secondaryButton.icon && <ArrowRight className="ml-2 h-4 w-4" />}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}