
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const programmingSkills = [
    { name: "Python", progress: 75 },
    { name: "JavaScript", progress: 70 },
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "Node.js", progress: 65 },
  ];

  const databaseSkills = [
    { name: "SQL", progress: 70 },
    { name: "MongoDB", progress: 65 },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", progress: 80 },
    { name: "VS Code", progress: 85 },
  ];

  const softSkills = [
    "Problem-Solving",
    "Teamwork & Collaboration",
    "Attention to Detail",
    "Continuous Learning",
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{animationDelay: "0.2s"}}>
            <CardHeader>
              <CardTitle>Database Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {databaseSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{animationDelay: "0.3s"}}>
            <CardHeader>
              <CardTitle>Development Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{animationDelay: "0.4s"}}>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
