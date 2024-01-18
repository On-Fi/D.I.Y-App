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
          project.priceCategory === filterData.priceCategory &&
          project.difficulty === filterData.difficulty &&
          filterData.category.includes(project.category.toLowerCase()) &&
          filterData.time >= project.time
      )
    );

    //   &&
    //   &&
    //   filterData.category.length ||
    //      &&
    //   filterData.time >= project.time
    // );
  }
  console.log("projectstoDisplay:", projectsToDisplay);
  return (
    <>
      <Subline>All projects</Subline>
      <FilterSection handleFilter={handleFilter} />
      <ProjectList
        projectsToDisplay={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
