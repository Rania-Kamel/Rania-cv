
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillCategories = [
  {
    id: "frontend",
    label: "Front-End",
    skills: ["React.js", "React Native", "Redux.js", "Next.js", "Bootstrap", "Material-UI", "Tailwind CSS"]
  },
  {
    id: "languages",
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"]
  },
  {
    id: "tools",
    label: "Tools & Others",
    skills: ["Git", "GitHub", "Responsive Design", "RESTful APIs", "Performance Optimization"]
  }
];

const SkillTab = ({ category }: { category: typeof skillCategories[0] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
      {category.skills.map((skill, index) => (
        <div 
          key={index}
          className="bg-card shadow-sm border rounded-lg p-3 text-center hover:border-primary transition-colors"
        >
          <span className="font-medium text-sm">{skill}</span>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className='m-auto'>
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <Card className="border shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="frontend">
              <TabsList className="grid grid-cols-3 mb-8">
                {skillCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <SkillTab category={category} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Education & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Education</h4>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Bachelor of Computer Science</div>
                    <div className="text-sm text-muted-foreground">Assiut University, Egypt | 2018 - 2022</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Certifications</h4>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Advanced React.js and Node.js Training</div>
                    <div className="text-sm text-muted-foreground">2021</div>
                  </div>
                  <div>
                    <div className="font-medium">Version Control with Git & GitHub</div>
                    <div className="text-sm text-muted-foreground">2020</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
