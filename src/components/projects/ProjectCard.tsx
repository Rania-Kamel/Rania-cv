import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link, Image, X, Eye } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Project } from './types';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectCard = ({ project }: { project: Project }) => {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupAlt, setPopupAlt] = useState<string>('');
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);

  const handleImageClick = (src: string, alt: string) => {
    setPopupImage(src);
    setPopupAlt(alt);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="overflow-hidden relative group">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16/9} className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center transform transition-all duration-500 group-hover:scale-110 hover:scale-110 cursor-pointer"
                      onClick={() => handleImageClick(image.src, image.alt)}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
            {project.images.length} <Image className="inline h-3 w-3 ml-1" />
          </div>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-3 mt-auto">
            <Button variant="outline" size="sm" onClick={() => setIsProjectDialogOpen(true)} className="inline-flex items-center gap-1">
              <Eye className="h-4 w-4" />
              Details
            </Button>
            
            {project.githubLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            
            {project.liveLink && (
              <Button size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                  <Link className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Project Details Dialog */}
      <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button 
              onClick={() => setIsProjectDialogOpen(false)}
              className="absolute right-0 top-0 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background/90 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full object-contain max-h-[60vh]"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                  </>
                )}
              </Carousel>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {project.githubLink && (
                <Button variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    View Code
                  </a>
                </Button>
              )}
              
              {project.liveLink && (
                <Button asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Link className="h-5 w-5" />
                    Visit Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Popup */}
      {popupImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closePopup}>
          <div className="relative max-w-screen-lg max-h-screen p-4">
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closePopup();
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={popupImage} 
              alt={popupAlt} 
              className="max-h-[90vh] max-w-full object-contain shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
