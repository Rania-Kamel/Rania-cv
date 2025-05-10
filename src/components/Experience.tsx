
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const ExperienceCard = ({ 
  company, 
  position, 
  period, 
  location,
  details,
  isLast = false
}: {
  company: string;
  position: string;
  period: string;
  location: string;
  details: string[];
  isLast?: boolean;
}) => {
  return (
    <div className="pl-8">
      {!isLast && (
        <div className="absolute left-3 top-6 -bottom-6 w-[1px] bg-border"></div>
      )}
      <div className={cn(
        "absolute left-0 top-6 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center",
        "before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-primary"
      )}></div>
      
      <div className="pt-2 pb-8">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{position}</h3>
                <p className="text-primary font-medium">{company}</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                <div>{period}</div>
                <div>{location}</div>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Rovero",
      position: "Front-End Developer",
      period: "Oct 2022 - Sep 2024",
      location: "Cairo, Egypt",
      details: [
        "Developed a React Native mobile application for managing factory bonus systems, integrating multi-level access control for user authorization and tracking edit history.",
        "Optimized app performance for accurate, real-time bonus tracking, addressing critical performance challenges to ensure efficient service for end users across various roles in the factory."
      ]
    },
    {
      company: "Oriented Coders",
      position: "Front-End Developer",
      period: "Aug 2020 - Jul 2023",
      location: "Cairo, Egypt",
      details: [
        "Developed a visually appealing website for a software company using React and Material-UI, boosting online presence and user engagement.",
        "Created a functional internal dashboard for Oriented Coders, utilizing React and Redux to manage jobs, news, portfolios, customer reviews, and employee information.",
        "Resolved technical challenges during development, ensuring smooth performance and enhanced user experience across both projects."
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              position={exp.position}
              period={exp.period}
              location={exp.location}
              details={exp.details}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
