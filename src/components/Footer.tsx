
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-foreground">Rania Kamel</h3>
            <p className="text-sm text-muted-foreground">Front-End Developer</p>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {currentYear} Rania Kamel. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ using React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
