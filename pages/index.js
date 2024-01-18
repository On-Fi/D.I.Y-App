import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects, favorites, onToggleFavorite }) {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  function handleFilter(filterData) {
    console.log("filterData:", filterData);
    setProjectsToDisplay(
      projects.filter(
        (project) =>
          (project.priceCategory === filterData.priceCategory) &
          (project.difficulty === filterData.difficulty) &
          (project.category.toLowerCase() === filterData.category) &
          (filterData.time >= project.time)
      )
    );
  }
  console.log("projectstoDisplay:", projectsToDisplay);
  return (
    <>
      <Subline>All projects</Subline>
      <FilterSection />
      <ProjectList
        projects={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        handleFilter={handleFilter}
      />
    </>
  );
}
