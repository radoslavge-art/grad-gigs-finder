import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-36">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Decorative yellow bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-warm" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-heading text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Your Career
            <br />
            <span className="text-gradient-primary">Starts Here</span>
          </h1>

          <div className="mx-auto mb-8 h-1 w-16 bg-primary rounded-full" />

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Build your professional CV and explore exciting opportunities across our network of partner companies. Take the first step today.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="warm"
              size="lg"
              className="min-w-[200px] text-base uppercase tracking-wide"
              onClick={() => onNavigate("cv-builder")}
            >
              <FileText className="mr-2 h-5 w-5" />
              Build Your CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] border-foreground/20 text-base text-foreground uppercase tracking-wide hover:bg-foreground/10"
              onClick={() => onNavigate("jobs")}
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Jobs
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <span className="block font-heading text-3xl font-bold text-primary">150+</span>
              Open Positions
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-center">
              <span className="block font-heading text-3xl font-bold text-primary">40+</span>
              Partner Companies
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="hidden text-center sm:block">
              <span className="block font-heading text-3xl font-bold text-primary">2k+</span>
              Students Placed
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA band */}
      <div className="mt-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-cta rounded-lg px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground">
              <span className="text-primary">Looking for</span> your next opportunity?
            </h2>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground uppercase tracking-wider font-semibold hover:bg-foreground/10"
              onClick={() => onNavigate("jobs")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
