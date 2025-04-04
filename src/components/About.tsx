
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, FlagIcon, UserIcon } from "lucide-react";

export default function About() {
  const personalDetails = [
    { icon: CalendarIcon, label: "Date of Birth", value: "20/03/2003" },
    { icon: FlagIcon, label: "Nationality", value: "South African" },
    { icon: UserIcon, label: "Gender", value: "Female" },
  ];

  return (
    <section id="about" className="bg-muted/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="lg:col-span-2 animate-slide-up">
            <CardHeader>
              <CardTitle>Objective</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Aspiring software developer with a passion for coding, problem-solving, 
                and continuous learning. Currently studying software development through 
                the Power Learn Project, building foundational skills in programming, web 
                development, and software engineering. Seeking opportunities to contribute 
                to real-world projects and enhance technical expertise.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-up" style={{animationDelay: "0.2s"}}>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <detail.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
