import ProjectList from "@/components/ProjectList";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import styled from "styled-components";

const initialFilter = {
  time: 24,
  difficulty: null,
  category: null,
  priceCategory: null,
  searchTerm: null,
};

const Headline = styled.h2`
  text-align: center;
  font-size: 0rem;
  color: #fffff;
`;

export default function HomePage({
  projects,
  favorites,
  onToggleFavorite,
  theme,
  countCardClick,
}) {
  const [filters, setFilters] = useState(initialFilter);
  const projectsToDisplay = updateProjectsToDisplay(filters);

  function handleFilter(value, name) {
    setFilters({ ...filters, [name]: value });
  }

  function handleSearch(searchTerm) {
    setFilters({ ...filters, searchTerm: searchTerm });
  }

  function updateProjectsToDisplay() {
    const filteredByTime = filters.time
      ? projects.filter((project) => project.time <= filters.time)
      : projects;

    const filteredByCategory = filters.category
      ? filteredByTime.filter(
          (project) => project.category === filters.category
        )
      : filteredByTime;

    const filteredByPriceCategory = filters.priceCategory
      ? filteredByCategory.filter(
          (project) => project.priceCategory === filters.priceCategory
        )
      : filteredByCategory;

    const filteredByDifficulty = filters.difficulty
      ? filteredByPriceCategory.filter(
          (project) => project.difficulty === filters.difficulty
        )
      : filteredByPriceCategory;

    const filteredBySearchTerm = filters.searchTerm
      ? filteredByDifficulty.filter((project) =>
          project.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
        )
      : filteredByDifficulty;

    return filteredBySearchTerm;
  }

  function handleResetFilter() {
    setFilters(initialFilter);
  }

  return (
    <>
      <SearchBar theme={theme} onSearch={handleSearch} filters={filters} />
      <FilterSection
        theme={theme}
        onResetFilter={handleResetFilter}
        filters={filters}
        handleFilter={handleFilter}
      />
      <Headline>{projects.length} All projects</Headline>
      <ProjectList
        theme={theme}
        projectsToDisplay={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        isWhite={true}
        countCardClick={countCardClick}
      />
    </>
  );
}
