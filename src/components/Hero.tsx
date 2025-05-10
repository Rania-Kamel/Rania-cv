import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0  bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10  items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-3 animate-fade-in">WELCOME TO MY PORTFOLIO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            I'm <span className="text-primary">Rania Kamel</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in">
            Front-End Developer
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in">
            A skilled front-end developer specializing in responsive websites and mobile apps
            using React and React Native. Passionate about innovation, performance and accessibility.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            <Button asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-4 animate-fade-in">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-secondary p-3 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-secondary p-3 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:raniakamel706@gmail.com"
              className="rounded-full bg-secondary p-3 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
