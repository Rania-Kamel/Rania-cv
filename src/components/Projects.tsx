<<<<<<< HEAD
import React, { useState } from "react";
import CategoryFilter from "./projects/CategoryFilter";
import ProjectsGrid from "./projects/ProjectsGrid";
import ProjectsPagination from "./projects/ProjectsPagination";
import { projects } from "./projects/projectsData";
=======

import React, { useState } from 'react';
import CategoryFilter from './projects/CategoryFilter';
import ProjectsGrid from './projects/ProjectsGrid';
import ProjectsPagination from './projects/ProjectsPagination';
import { projects } from './projects/projectsData';
>>>>>>> d33c2d76169f115df0bc62c2a5797c96be408292

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 6;

  // Get unique categories
<<<<<<< HEAD
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
=======
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };
>>>>>>> d33c2d76169f115df0bc62c2a5797c96be408292

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
<<<<<<< HEAD
    <section id="projects" className="bg-secondary/30 py-16 m-auto">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>

        {/* Category Filter */}
        <CategoryFilter
=======
    <section id="projects" className="bg-secondary/30 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        
        {/* Category Filter */}
        <CategoryFilter 
>>>>>>> d33c2d76169f115df0bc62c2a5797c96be408292
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
<<<<<<< HEAD

        {/* Projects Grid */}
        <ProjectsGrid projects={currentProjects} />

        {/* Pagination */}
        <ProjectsPagination
=======
        
        {/* Projects Grid */}
        <ProjectsGrid projects={currentProjects} />
        
        {/* Pagination */}
        <ProjectsPagination 
>>>>>>> d33c2d76169f115df0bc62c2a5797c96be408292
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Projects;
