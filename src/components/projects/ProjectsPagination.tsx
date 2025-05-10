
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProjectsPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const ProjectsPagination = ({ currentPage, totalPages, setCurrentPage }: ProjectsPaginationProps) => {
  if (totalPages <= 1) return null;
  
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            aria-disabled={currentPage === 1}
            className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
          />
        </PaginationItem>
        
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => setCurrentPage(index + 1)}
              isActive={currentPage === index + 1}
              className="cursor-pointer"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        
        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            aria-disabled={currentPage === totalPages}
            className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProjectsPagination;
