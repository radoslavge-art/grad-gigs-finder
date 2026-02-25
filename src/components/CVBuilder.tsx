import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Trash2, Download, User, GraduationCap, Briefcase, Wrench, Globe } from "lucide-react";
import { toast } from "sonner";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface Language {
  id: string;
  language: string;
  level: string;
}

const CVBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  });
  const [education, setEducation] = useState<Education[]>([
    { id: "1", institution: "", degree: "", field: "", startYear: "", endYear: "" },
  ]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState<Language[]>([
    { id: "1", language: "", level: "Intermediate" },
  ]);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { label: "Personal", icon: User },
    { label: "Education", icon: GraduationCap },
    { label: "Experience", icon: Briefcase },
    { label: "Skills", icon: Wrench },
    { label: "Languages", icon: Globe },
  ];

  const addEducation = () => {
    setEducation([...education, { id: Date.now().toString(), institution: "", degree: "", field: "", startYear: "", endYear: "" }]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter((e) => e.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map((e) => (e.id === id ? { ...e, [field]: value } : e)));
  };

  const addExperience = () => {
    setExperience([...experience, { id: Date.now().toString(), company: "", role: "", description: "", startDate: "", endDate: "" }]);
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter((e) => e.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperience(experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)));
  };

  const addLanguage = () => {
    setLanguages([...languages, { id: Date.now().toString(), language: "", level: "Intermediate" }]);
  };

  const removeLanguage = (id: string) => {
    setLanguages(languages.filter((l) => l.id !== id));
  };

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    setLanguages(languages.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
  };

  const handleSubmit = () => {
    if (!personalInfo.fullName || !personalInfo.email) {
      toast.error("Please fill in your name and email at minimum.");
      return;
    }
    toast.success("CV saved successfully! You can now apply to positions.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-foreground">Build Your CV</h2>
          <p className="mt-2 text-muted-foreground">Fill out the sections below to create your professional profile.</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center gap-2">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <button
                key={section.label}
                onClick={() => setActiveSection(i)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-3 text-sm font-medium transition-all ${
                  activeSection === i
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            );
          })}
        </div>

        {/* Personal Info */}
        {activeSection === 0 && (
          <Card className="animate-fade-in-up p-6 shadow-card">
            <h3 className="mb-4 font-heading text-xl font-semibold">Personal Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="John Doe" value={personalInfo.fullName} onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@example.com" value={personalInfo.email} onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 234 567 890" value={personalInfo.phone} onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, Country" value={personalInfo.location} onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea id="summary" placeholder="A brief summary about yourself..." rows={4} value={personalInfo.summary} onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })} />
              </div>
            </div>
          </Card>
        )}

        {/* Education */}
        {activeSection === 1 && (
          <div className="animate-fade-in-up space-y-4">
            {education.map((edu) => (
              <Card key={edu.id} className="p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold">Education</h3>
                  {education.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => removeEducation(edu.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Institution</Label>
                    <Input placeholder="University name" value={edu.institution} onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree</Label>
                    <Input placeholder="e.g. Bachelor's" value={edu.degree} onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <Input placeholder="e.g. Computer Science" value={edu.field} onChange={(e) => updateEducation(edu.id, "field", e.target.value)} />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                      <Label>Start Year</Label>
                      <Input placeholder="2020" value={edu.startYear} onChange={(e) => updateEducation(edu.id, "startYear", e.target.value)} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label>End Year</Label>
                      <Input placeholder="2024" value={edu.endYear} onChange={(e) => updateEducation(edu.id, "endYear", e.target.value)} />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            <Button variant="outline" className="w-full" onClick={addEducation}>
              <Plus className="mr-2 h-4 w-4" /> Add Education
            </Button>
          </div>
        )}

        {/* Experience */}
        {activeSection === 2 && (
          <div className="animate-fade-in-up space-y-4">
            {experience.length === 0 && (
              <Card className="p-8 text-center shadow-card">
                <Briefcase className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
                <p className="text-muted-foreground">No experience added yet. Add your work experience below.</p>
              </Card>
            )}
            {experience.map((exp) => (
              <Card key={exp.id} className="p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold">Experience</h3>
                  <Button variant="ghost" size="icon" onClick={() => removeExperience(exp.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input placeholder="Company name" value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Input placeholder="Job title" value={exp.role} onChange={(e) => updateExperience(exp.id, "role", e.target.value)} />
                  </div>
                  <div className="flex gap-4 md:col-span-2">
                    <div className="flex-1 space-y-2">
                      <Label>Start Date</Label>
                      <Input placeholder="Jan 2023" value={exp.startDate} onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label>End Date</Label>
                      <Input placeholder="Present" value={exp.endDate} onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Describe your responsibilities..." rows={3} value={exp.description} onChange={(e) => updateExperience(exp.id, "description", e.target.value)} />
                  </div>
                </div>
              </Card>
            ))}
            <Button variant="outline" className="w-full" onClick={addExperience}>
              <Plus className="mr-2 h-4 w-4" /> Add Experience
            </Button>
          </div>
        )}

        {/* Skills */}
        {activeSection === 3 && (
          <Card className="animate-fade-in-up p-6 shadow-card">
            <h3 className="mb-4 font-heading text-xl font-semibold">Skills</h3>
            <div className="space-y-2">
              <Label>Skills (comma separated)</Label>
              <Textarea placeholder="e.g. JavaScript, React, Communication, Leadership..." rows={4} value={skills} onChange={(e) => setSkills(e.target.value)} />
            </div>
            {skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.split(",").filter(s => s.trim()).map((skill, i) => (
                  <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* Languages */}
        {activeSection === 4 && (
          <div className="animate-fade-in-up space-y-4">
            {languages.map((lang) => (
              <Card key={lang.id} className="p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold">Language</h3>
                  {languages.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => removeLanguage(lang.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Input placeholder="e.g. English" value={lang.language} onChange={(e) => updateLanguage(lang.id, "language", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Proficiency Level</Label>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={lang.level}
                      onChange={(e) => updateLanguage(lang.id, "level", e.target.value)}
                    >
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Beginner">Beginner</option>
                    </select>
                  </div>
                </div>
              </Card>
            ))}
            <Button variant="outline" className="w-full" onClick={addLanguage}>
              <Plus className="mr-2 h-4 w-4" /> Add Language
            </Button>
          </div>
        )}

        {/* Navigation & Submit */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            disabled={activeSection === 0}
            onClick={() => setActiveSection(activeSection - 1)}
          >
            Previous
          </Button>
          {activeSection < 4 ? (
            <Button onClick={() => setActiveSection(activeSection + 1)}>
              Next
            </Button>
          ) : (
            <Button variant="hero" onClick={handleSubmit}>
              <Download className="mr-2 h-4 w-4" />
              Save CV
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVBuilder;
