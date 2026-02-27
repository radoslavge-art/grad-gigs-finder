import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, Home } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CVBuilder from "@/components/CVBuilder";
import JobListings from "@/components/JobListings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => setActiveTab("home")} className="flex items-center gap-3">
            <span className="font-heading text-xl font-extrabold uppercase tracking-wider text-foreground">
              aut<span className="text-primary">sorsa</span>
            </span>
          </button>

          <nav className="flex items-center gap-1">
            {[
              { value: "home", label: "Home", icon: Home },
              { value: "cv-builder", label: "CV Builder", icon: FileText },
              { value: "jobs", label: "Careers", icon: Search },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.value}
                  onClick={() => setActiveTab(item.value)}
                  className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.value
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        {activeTab === "home" && <HeroSection onNavigate={handleNavigate} />}
        {activeTab === "cv-builder" && <CVBuilder />}
        {activeTab === "jobs" && <JobListings />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="font-heading font-semibold uppercase tracking-wider">
            © 2026 <span className="text-primary">AutSorsa</span>. Connecting talent with opportunity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
