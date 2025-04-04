
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCapIcon } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-muted/50">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="animate-slide-up">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCapIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Certifications & Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4 py-2">
                <h3 className="font-semibold text-lg">Power Learn Project Certification</h3>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="mt-2">
                  Comprehensive training in software development fundamentals, 
                  covering programming concepts, web development, and software 
                  engineering practices.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-primary/10 text-primary">
                  <GraduationCapIcon className="h-4 w-4 mr-2" />
                  <span>Constantly expanding knowledge through online courses and self-study</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
