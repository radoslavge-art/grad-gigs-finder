import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, Sparkles } from "lucide-react";
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
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => setActiveTab("home")} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground">CareerHub</span>
          </button>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-muted">
              <TabsTrigger value="home" className="font-medium">
                Home
              </TabsTrigger>
              <TabsTrigger value="cv-builder" className="font-medium">
                <FileText className="mr-1.5 h-3.5 w-3.5" />
                CV Builder
              </TabsTrigger>
              <TabsTrigger value="jobs" className="font-medium">
                <Search className="mr-1.5 h-3.5 w-3.5" />
                Jobs
              </TabsTrigger>
            </TabsList>
          </Tabs>
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
          <p>© 2026 CareerHub. Connecting students with opportunities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
