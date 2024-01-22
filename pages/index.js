import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects, favorites, onToggleFavorite }) {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");

  function handleFilter(filterData) {
    setProjectsToDisplay(
      projects.filter(
        (project) =>
          project.priceCategory === filterData.priceCategory &&
          project.difficulty === filterData.difficulty &&
          filterData.category.includes(project.category.toLowerCase()) &&
          filterData.time >= project.time
      )
    );
  }
  function handleSearch() {
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProjectsToDisplay(filteredProjects);
  }
  return (
    <>
      <Subline>All projects</Subline>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
      />
      <FilterSection handleFilter={handleFilter} />
      <ProjectList
        projectsToDisplay={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
