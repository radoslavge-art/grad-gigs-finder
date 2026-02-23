import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Now accepting applications
          </div>

          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Launch Your
            <span className="text-gradient-primary"> Career</span>
            <br />
            With Us
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Build your professional CV and explore exciting opportunities across our network of companies. Your next chapter starts here.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="hero"
              size="lg"
              className="min-w-[200px] text-base"
              onClick={() => onNavigate("cv-builder")}
            >
              <FileText className="mr-2 h-5 w-5" />
              Build Your CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] text-base"
              onClick={() => onNavigate("jobs")}
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Jobs
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-foreground">150+</span>
              Open Positions
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-foreground">40+</span>
              Partner Companies
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="hidden items-center gap-2 sm:flex">
              <span className="font-heading text-2xl font-bold text-foreground">2k+</span>
              Students Placed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
