import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export interface CVTemplate {
  id: string;
  name: string;
  description: string;
  preview: React.ReactNode;
}

const templates: CVTemplate[] = [
  {
    id: "classic",
    name: "Classic",
    description: "Traditional layout with clean lines and serif accents",
    preview: <ClassicPreview />,
  },
  {
    id: "modern",
    name: "Modern",
    description: "Bold headers with a sleek two-column design",
    preview: <ModernPreview />,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean whitespace-driven layout for a focused read",
    preview: <MinimalPreview />,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Eye-catching sidebar with color accents",
    preview: <CreativePreview />,
  },
  {
    id: "executive",
    name: "Executive",
    description: "Refined and professional for senior roles",
    preview: <ExecutivePreview />,
  },
  {
    id: "academic",
    name: "Academic",
    description: "Structured for research and academic positions",
    preview: <AcademicPreview />,
  },
];

interface CVTemplateSelectorProps {
  selected: string;
  onSelect: (id: string) => void;
}

// Mini preview components that simulate each template layout
function ClassicPreview() {
  return (
    <div className="flex h-full flex-col gap-1.5 p-2">
      <div className="mx-auto h-2 w-16 rounded-sm bg-foreground/60" />
      <div className="mx-auto h-1 w-12 rounded-sm bg-muted-foreground/40" />
      <div className="mt-1 h-px w-full bg-border" />
      <div className="space-y-1">
        <div className="h-1 w-10 rounded-sm bg-primary/50" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
        <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
      </div>
      <div className="space-y-1">
        <div className="h-1 w-12 rounded-sm bg-primary/50" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
        <div className="h-1 w-5/6 rounded-sm bg-muted-foreground/20" />
      </div>
    </div>
  );
}

function ModernPreview() {
  return (
    <div className="flex h-full flex-col gap-1.5 p-2">
      <div className="rounded-sm bg-primary/20 p-1.5">
        <div className="h-2 w-14 rounded-sm bg-primary/70" />
        <div className="mt-0.5 h-1 w-10 rounded-sm bg-foreground/40" />
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 space-y-1">
          <div className="h-1 w-8 rounded-sm bg-secondary/60" />
          <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
          <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-1 w-8 rounded-sm bg-secondary/60" />
          <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
          <div className="h-1 w-2/3 rounded-sm bg-muted-foreground/20" />
        </div>
      </div>
    </div>
  );
}

function MinimalPreview() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="h-2 w-20 rounded-sm bg-foreground/50" />
      <div className="h-1 w-14 rounded-sm bg-muted-foreground/30" />
      <div className="mt-1 space-y-1">
        <div className="h-1 w-full rounded-sm bg-muted-foreground/15" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/15" />
        <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/15" />
      </div>
      <div className="mt-1 space-y-1">
        <div className="h-1 w-full rounded-sm bg-muted-foreground/15" />
        <div className="h-1 w-5/6 rounded-sm bg-muted-foreground/15" />
      </div>
    </div>
  );
}

function CreativePreview() {
  return (
    <div className="flex h-full gap-0">
      <div className="w-1/3 space-y-1.5 rounded-l-sm bg-primary/15 p-1.5">
        <div className="mx-auto h-4 w-4 rounded-full bg-primary/40" />
        <div className="h-1 w-full rounded-sm bg-primary/30" />
        <div className="h-1 w-3/4 rounded-sm bg-primary/30" />
        <div className="h-1 w-full rounded-sm bg-primary/30" />
      </div>
      <div className="flex-1 space-y-1 p-1.5">
        <div className="h-1.5 w-12 rounded-sm bg-foreground/50" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
        <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
        <div className="mt-1 h-1 w-10 rounded-sm bg-secondary/50" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
      </div>
    </div>
  );
}

function ExecutivePreview() {
  return (
    <div className="flex h-full flex-col gap-1.5 p-2">
      <div className="border-b border-primary/40 pb-1.5">
        <div className="h-2.5 w-18 rounded-sm bg-foreground/60" />
        <div className="mt-0.5 h-1 w-12 rounded-sm bg-primary/50" />
      </div>
      <div className="space-y-1">
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
        <div className="h-1 w-2/3 rounded-sm bg-muted-foreground/20" />
      </div>
      <div className="border-t border-border pt-1 space-y-1">
        <div className="h-1 w-10 rounded-sm bg-primary/40" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
      </div>
    </div>
  );
}

function AcademicPreview() {
  return (
    <div className="flex h-full flex-col gap-1 p-2">
      <div className="mx-auto h-2 w-20 rounded-sm bg-foreground/50" />
      <div className="mx-auto h-1 w-16 rounded-sm bg-muted-foreground/30" />
      <div className="mx-auto h-1 w-12 rounded-sm bg-muted-foreground/20" />
      <div className="mt-1 h-px w-full bg-foreground/20" />
      <div className="space-y-1">
        <div className="h-1 w-14 rounded-sm bg-foreground/40 font-bold" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/15" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/15" />
      </div>
      <div className="space-y-1">
        <div className="h-1 w-12 rounded-sm bg-foreground/40" />
        <div className="h-1 w-full rounded-sm bg-muted-foreground/15" />
      </div>
    </div>
  );
}

const CVTemplateSelector = ({ selected, onSelect }: CVTemplateSelectorProps) => {
  return (
    <div className="animate-fade-in-up space-y-4">
      <h3 className="font-heading text-xl font-semibold">Choose a Template</h3>
      <p className="text-sm text-muted-foreground">
        Select a template style for your CV. You can change this anytime.
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {templates.map((template) => (
          <Card
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`group relative cursor-pointer overflow-hidden transition-all hover:shadow-card-hover ${
              selected === template.id
                ? "ring-2 ring-primary shadow-card-hover"
                : "shadow-card hover:ring-1 hover:ring-primary/30"
            }`}
          >
            {/* Selection indicator */}
            {selected === template.id && (
              <div className="absolute right-2 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
            )}

            {/* Template preview */}
            <div className="aspect-[3/4] w-full bg-muted/30">
              {template.preview}
            </div>

            {/* Template info */}
            <div className="border-t border-border p-3">
              <p className="font-heading text-sm font-semibold">{template.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{template.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CVTemplateSelector;
