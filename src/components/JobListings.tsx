import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Clock, Building2, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  department: string;
  posted: string;
  description: string;
  tags: string[];
}

const SAMPLE_JOBS: Job[] = [
  {
    id: "1",
    title: "Junior Frontend Developer",
    company: "TechVista Solutions",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    posted: "2 days ago",
    description: "Join our engineering team to build modern web applications using React and TypeScript. Great opportunity for recent graduates.",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: "2",
    title: "Marketing Intern",
    company: "BrightWave Agency",
    location: "London, UK",
    type: "Internship",
    department: "Marketing",
    posted: "1 week ago",
    description: "Support our marketing campaigns across digital channels. Learn from experienced professionals in a fast-paced environment.",
    tags: ["Social Media", "Analytics", "Content"],
  },
  {
    id: "3",
    title: "Data Analyst Graduate",
    company: "Meridian Analytics",
    location: "Berlin, Germany",
    type: "Full-time",
    department: "Data",
    posted: "3 days ago",
    description: "Analyze business data to provide actionable insights. SQL and Python experience preferred. Training provided.",
    tags: ["SQL", "Python", "Tableau"],
  },
  {
    id: "4",
    title: "UX Design Trainee",
    company: "PixelCraft Studio",
    location: "Amsterdam, NL",
    type: "Part-time",
    department: "Design",
    posted: "5 days ago",
    description: "Work alongside senior designers to create user-centric designs for mobile and web products.",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: "5",
    title: "Backend Developer Intern",
    company: "CloudNest Technologies",
    location: "Remote",
    type: "Internship",
    department: "Engineering",
    posted: "1 day ago",
    description: "Help build scalable backend services using Node.js and cloud infrastructure. Mentorship included.",
    tags: ["Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "6",
    title: "HR Assistant",
    company: "PeopleFirst Consulting",
    location: "Dublin, Ireland",
    type: "Full-time",
    department: "Human Resources",
    posted: "4 days ago",
    description: "Support recruitment and employee engagement processes. Excellent growth opportunity in the HR field.",
    tags: ["Recruitment", "Communication", "Organization"],
  },
];

const DEPARTMENTS = ["All", "Engineering", "Marketing", "Data", "Design", "Human Resources"];
const TYPES = ["All", "Full-time", "Part-time", "Internship"];

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredJobs = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      const matchesSearch =
        !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDept = selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesType = selectedType === "All" || job.type === selectedType;
      return matchesSearch && matchesDept && matchesType;
    });
  }, [searchQuery, selectedDepartment, selectedType]);

  const handleApply = (job: Job) => {
    toast.success(`Application submitted for ${job.title} at ${job.company}!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-foreground">Open Positions</h2>
          <p className="mt-2 text-muted-foreground">
            Explore {SAMPLE_JOBS.length} opportunities across our network.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by title, company, or skill..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                  selectedType === type
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          {filteredJobs.length === 0 && (
            <Card className="p-8 text-center shadow-card">
              <Search className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-muted-foreground">No positions match your search. Try adjusting your filters.</p>
            </Card>
          )}

          {filteredJobs.map((job, i) => (
            <Card
              key={job.id}
              className="group cursor-pointer p-5 shadow-card transition-all hover:shadow-card-hover"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5" /> {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {job.posted}
                    </span>
                  </div>

                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-primary/8 px-2 py-0.5 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="sm"
                  className="shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApply(job);
                  }}
                >
                  Apply
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Showing {filteredJobs.length} of {SAMPLE_JOBS.length} positions
        </p>
      </div>
    </div>
  );
};

export default JobListings;
